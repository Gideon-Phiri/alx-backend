import kue from 'kue';

// Create queue
const queue = kue.createQueue();

// Job data
const jobData = {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account',
};

// Create job
const job = queue.create('push_notification_code', jobData)
  .save((err) => {
    if (!err) {
      console.log(`Notification job created: ${job.id}`);
    }
  });

// Job completion
job.on('complete', () => {
  console.log('Notification job completed');
});

// Job failure
job.on('failed', () => {
  console.log('Notification job failed');
});
