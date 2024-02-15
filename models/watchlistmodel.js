const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  email: {
    type: String,
    max: 20,
    required: true,
    unique: true,
  },
  watchListMovies: [{
    id: { type: Number, unique: true },
    genres: [String],
    name: String
  }]
});

module.exports = mongoose.model("watchlist", watchlistSchema);
