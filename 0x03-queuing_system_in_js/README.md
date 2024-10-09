# Queuing System in JavaScript

## Description
This project implements a queue-based system using Node.js, Redis, and Kue. It provides functionalities for managing tasks asynchronously via job queues, such as sending notifications and managing stock. Additionally, it includes a seat reservation system that handles job processing using a Redis-backed queue.

The project demonstrates a variety of essential concepts such as:
- Working with Redis as a key-value store
- Managing asynchronous operations using promises
- Job creation and processing with Kue
- Tracking job progress, errors, and completion
- Building an Express-based API to interact with Redis and handle job queues

## Features
- **Job Queuing**: Create and process jobs asynchronously using Kue and Redis.
- **Error and Progress Tracking**: Jobs can fail or succeed, and their progress is tracked.
- **Stock Management**: Basic stock management with Redis for reserving products.
- **Seat Reservation System**: Handles seat reservations, tracks available seats, and queues jobs for reservation processing.
- **API**: Provides a RESTful API built with Express to interact with the queuing system and Redis.

## Technologies
- **Node.js**: JavaScript runtime for building the back-end server.
- **Redis**: In-memory data structure store used as a database for job management and stock tracking.
- **Kue**: A priority job queue backed by Redis.
- **Express**: A web framework used to build the API for job management, stock management, and seat reservation.
- **Babel**: A JavaScript compiler to enable the use of ES6+ syntax in the project.

---

## Installation

### Prerequisites
Before running the project, ensure that the following are installed on your system:
- **Node.js** (Version 12.x or higher)
- **Redis** (Version 6.0 or higher)

### Steps to Install

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gideon-Phiri/alx-backend.git
   cd alx-backend/0x03-queuing_system_in_js
   ```

2. **Install Node.js dependencies:**
   Run the following command in the project directory:
   ```bash
   npm install
   ```

3. **Start the Redis server:**
   If Redis is not running, you can start it with:
   ```bash
   redis-server &
   ```

4. **Compile Redis if necessary (Optional):**
   If you need to compile Redis manually, run the following commands:
   ```bash
   wget http://download.redis.io/releases/redis-6.0.10.tar.gz
   tar xzf redis-6.0.10.tar.gz
   cd redis-6.0.10
   make
   ```

5. **Ensure Babel is properly configured:**
   Babel is used to enable modern JavaScript syntax. The Babel configuration is included in `.babelrc`.

---

## Running the Project

### 1. Running Job Creation and Processing

#### Create Jobs
To create jobs that send push notifications, run the following command:
```bash
npm run dev 7-job_creator.js
```

#### Process Jobs
To process the jobs created in the queue, open another terminal and run:
```bash
npm run dev 7-job_processor.js
```

### 2. Running Stock Management API

Start the Express server to manage product stock:
```bash
npm run dev 9-stock.js
```

#### Available API Endpoints

- **Get Product List:**
  ```bash
  GET /list_products
  ```

- **Get Product Details by ID:**
  ```bash
  GET /list_products/:itemId
  ```

- **Reserve a Product by ID:**
  ```bash
  GET /reserve_product/:itemId
  ```

### 3. Running Seat Reservation System

Start the Express server for the seat reservation system:
```bash
npm run dev 100-seat.js
```

#### Available API Endpoints

- **Check Available Seats:**
  ```bash
  GET /available_seats
  ```

- **Reserve a Seat:**
  ```bash
  GET /reserve_seat
  ```

- **Process the Reservation Queue:**
  ```bash
  GET /process
  ```

---

## Testing

### Run Tests

This project includes a test suite to validate job creation using **Mocha** and **Chai**. To run the tests:
```bash
npm test 8-job.test.js
```

The test suite will ensure that:
- Jobs are created correctly in the queue.
- Proper error handling occurs when the input is invalid.

---

## File Structure

```
.
├── README.md
├── 0-redis_client.js        # Simple Redis client connection
├── 1-redis_op.js            # Redis client with basic operations
├── 2-redis_op_async.js      # Redis client with async/await operations
├── 4-redis_advanced_op.js   # Advanced Redis operations (hash values)
├── 5-subscriber.js          # Redis subscriber example
├── 5-publisher.js           # Redis publisher example
├── 6-job_creator.js         # Creates jobs using Kue
├── 6-job_processor.js       # Processes jobs using Kue
├── 7-job_creator.js         # Create jobs with progress/error tracking
├── 7-job_processor.js       # Process jobs with blacklisted numbers
├── 8-job.js                 # Job creation function
├── 8-job-main.js            # Test file for job creation
├── 8-job.test.js            # Mocha/Chai tests for job creation
├── 9-stock.js               # Product stock management with Redis
├── 100-seat.js              # Seat reservation system with Redis and Kue
├── package.json             # Project dependencies
├── .babelrc                 # Babel configuration
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

- **Your Name**
  - GitHub: [Your GitHub Profile](https://github.com/Gideon_Phiri)
