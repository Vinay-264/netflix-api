const {
  addToLikedMovies,
  removedLikedMovies,
  fetchLikedMovies,
} = require("../services/UserService.js");

module.exports.getLikedMovies = async (req, res) => {
  try {
    await fetchLikedMovies(req, res);
  } catch (error) {
    return res.json({ msg: "Error fetching liked movies." });
  }
};

module.exports.addToLikedMovies = async (req, res) => {
  try {
    await addToLikedMovies(req, res);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error adding movie to the liked list" });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    await removedLikedMovies(req, res);
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};
