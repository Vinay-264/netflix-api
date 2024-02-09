const mongoose = require("mongoose");

const likeMoviesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,   
  genres: Array,
  image: String
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    max: 20,
    required: true,
    unique: true,
  },
  likedMovies: [likeMoviesSchema],
});

module.exports = mongoose.model("users", userSchema);
