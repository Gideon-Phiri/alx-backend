import express from 'express';
import redis from 'redis';
import kue from 'kue';
import { promisify } from 'util';

const app = express();
const client = redis.createClient();
const queue = kue.createQueue();

// Promisify Redis functions
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// Initial number of seats and reservation status
let reservationEnabled = true;
const INITIAL_SEATS = 50;

// Function to reserve seats in Redis
async function reserveSeat(number) {
  await setAsync('available_seats', number);
}

// Function to get the current number of available seats from Redis
async function getCurrentAvailableSeats() {
  const seats = await getAsync('available_seats');
  return seats;
}

// Set the initial number of seats
reserveSeat(INITIAL_SEATS);

// Route to get the number of available seats
app.get('/available_seats', async (req, res) => {
  const seats = await getCurrentAvailableSeats();
  res.json({ numberOfAvailableSeats: seats });
});

// Route to reserve a seat
app.get('/reserve_seat', async (req, res) => {
  if (!reservationEnabled) {
    res.json({ status: 'Reservation are blocked' });
    return;
  }

  const job = queue.create('reserve_seat')
    .save((err) => {
      if (!err) {
        res.json({ status: 'Reservation in process' });
      } else {
        res.json({ status: 'Reservation failed' });
      }
    });

  // Job processing completion or failure
  job.on('complete', () => {
    console.log(`Seat reservation job ${job.id} completed`);
  });

  job.on('failed', (err) => {
    console.log(`Seat reservation job ${job.id} failed: ${err.message}`);
  });
});

// Route to process the queue and reserve seats
app.get('/process', async (req, res) => {
  res.json({ status: 'Queue processing' });

  queue.process('reserve_seat', async (job, done) => {
    let seats = await getCurrentAvailableSeats();

    if (seats <= 0) {
      reservationEnabled = false;
      return done(new Error('Not enough seats available'));
    }

    seats -= 1;
    await reserveSeat(seats);

    if (seats === 0) {
      reservationEnabled = false;
    }

    done();
  });
});

// Start server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
