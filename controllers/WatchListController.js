const {
    fetchWatchList,
    addWatchList,
    removeWatchList,
  } = require("../services/WatchListService.js");
  
  module.exports.getWatchListMovies = async (req, res) => {
    try {
      await fetchWatchList(req, res);
    } catch (error) {
      return res.json({ msg: "Error fetching watchlist of movies." });
    }
  };
  
  module.exports.addToWatchListMovies = async (req, res) => {
    try {
      await addWatchList(req, res);
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Error adding movie to the watch list" });
    }
  };
  
  module.exports.removeFromWatchListMovies = async (req, res) => {
    try {
      await removeWatchList(req, res);
    } catch (error) {
      return res.json({ msg: "Error removing movie from watchlist" });
    }
  };
  