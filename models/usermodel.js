const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    max: 20,
    required: true,
    unique: true,
  },
  likedMovies: [{
    id: { type: Number, unique: true },
    genres: [String],
    image: String,
    name: String
  }]
});

module.exports = mongoose.model("users", userSchema);
