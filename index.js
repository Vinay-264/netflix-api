const express = require("express");
const cors = require("cors");
const cluster = require('cluster');
const numCPUs = require('os').availableParallelism();
const status = require("express-status-monitor");
const netflixRoutes = require("./routes/NetflixRoutes");
const userRoutes = require("./routes/UserRoutes");
const { limiter } = require("./services/RateLimit");
const watchListRoutes = require("./routes/WatchListRoutes");
const db = require("./utils/db");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const authRoutes = require('./routes/AuthRoutes');

function handleInvalidJson(err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ message: 'Invalid JSON' });
  }
  next(err);
}

// Middleware function to handle unauthorized errors
function handleUnauthorized(err, req, res, next) {
  if (err.status === 401) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  next(err);
}

// Middleware function to handle not found errors
function handleNotFound(err,req, res, next) {
  if (err.status === 404) {
    return res.status(404).send({ message: err.message ? err.message : 'Not Found' });
  }
  // const err = new Error('Not Found');
  // err.status = 404;
  next(err);
}

// Middleware function to handle all other errors
function handleAllOtherErrors(err, req, res, next) {
  res.status(err.status || 500).send({ message: err.message ? err.message: 'Internal Server Error' });
}



if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const PORT = process.env.PORT || 5000;

  const app = express();
  app.use(status());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use(cors());
  // Apply rate limiter to all requests
  app.use(limiter);

  app.use(handleInvalidJson);
app.use(handleUnauthorized);
app.use(handleNotFound);
app.use(handleAllOtherErrors);

  db.dbConfig();

  app.use("/api/netflix", netflixRoutes);
  app.use("/api/user", userRoutes);
  app.use('/api/auth', authRoutes);

  app.use("/api/watchList", watchListRoutes);

  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

}
