const express = require("express");
const cors = require("cors");
const cluster = require('cluster');
const numCPUs = require('os').availableParallelism();
const status = require("express-status-monitor");
const netflixRoutes = require("./routes/NetflixRoutes");
const userRoutes = require("./routes/UserRoutes");
const { logReqRes } = require("./middlewares/log");
const { handleErrors } = require("./middlewares/errorhandlingMiddleware");
const { limiter } = require("./services/RateLimit");
const watchListRoutes = require("./routes/WatchListRoutes");
const { dbConfig } = require("./utils/db");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const authRoutes = require('./routes/AuthRoutes');
const PORT = process.env.PORT || 5000;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();


//Clustering (8 core)
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

  app.use(status());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use(cors());
  // Apply rate limiter to all requests
  app.use(limiter);
  //DB connection
  dbConfig();
  // logging APi call in log.txt file
  app.use(logReqRes());

  //Routes
  app.use("/api/netflix", netflixRoutes);
  app.use("/api/user", userRoutes);
  app.use('/api/auth', authRoutes);
  app.use("/api/watchList", watchListRoutes);
  
  //Error(invalid Json(400), Not Found(404), Internal Server error(500) ) Handling Middlware
  app.use(handleErrors);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

}
