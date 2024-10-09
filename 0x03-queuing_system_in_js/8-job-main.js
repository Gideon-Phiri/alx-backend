import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

// Create a Kue queue
const queue = kue.createQueue();

// List of jobs to process
const list = [
  { phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' },
  { phoneNumber: '4153518781', message: 'This is the code 4562 to verify your account' },
];

// Call the function to create jobs
createPushNotificationsJobs(list, queue);
