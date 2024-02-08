const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/NetflixRoutes");
const mongoose = require("mongoose");
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());


app.use("/api/netflix", userRoutes);
app.listen(5000, () => {
  console.log("server started on port 5000");
});
