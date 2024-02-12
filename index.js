const express = require("express");
const cors = require("cors");
const netflixRoutes = require("./routes/NetflixRoutes");
const registrationRoutes = require("./routes/RegistrationRoutes");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const { DB_USER_NAME, DB_PASSWORD, DB_NAME } = require('./utils/constants');

// const serviceAccount = require("./path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

mongoose
  .connect(`mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.l1wrxey.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/netflix", netflixRoutes);
app.use("/api/auth", registrationRoutes);
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
