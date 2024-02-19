const express = require("express");
const cors = require("cors");
const status = require("express-status-monitor");
const netflixRoutes = require("./routes/NetflixRoutes");
const userRoutes = require("./routes/UserRoutes");
const { limiter } = require("./services/RateLimit");
const watchListRoutes = require("./routes/WatchListRoutes");
const db = require("./utils/db");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const authRoutes = require('./routes/AuthRoutes');

const PORT = process.env.PORT || 5000;

const app = express();
 
app.use(status());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
// Apply rate limiter to all requests
app.use(limiter);

db.dbConfig();

app.use("/api/netflix", netflixRoutes);
app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);

app.use("/api/watchList", watchListRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
