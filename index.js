const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/NetflixRoutes");
const authRoutes=require("./routes/AuthRoutes")
const mongoose = require("mongoose");
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());



mongoose.connect('mongodb+srv://vinayrishi9676:NetflixBackend@cluster0.rr3ervc.mongodb.net/NetflixUsers').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.error('Error connecting to MongoDB:', err));



app.use("/api", userRoutes);
app.use("/api",authRoutes);
app.listen(5000, () => {
  console.log("server started on port 5000");
});
