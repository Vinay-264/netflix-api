const {
  addToLikedMovies,
  removedLikedMovies,
  fetchLikedMovies,
  getUserPreferences,
  saveUserPreferences,
  modifyUserPreferences,
  getRecommendedContent,
  getContentNotification
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

module.exports.getUserPreferences = async (req, res) => {
  try {
    await getUserPreferences(req, res);
  } catch (error) {
    return res.json({ msg: "Error fetching preferred genres." });
  }
};

module.exports.saveUserPreferences = async (req, res) => {
  try {
    await saveUserPreferences(req, res);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error adding genre to the preferred list" });
  }
};

module.exports.modifyUserPreferences = async (req, res) => {
  try {
    await modifyUserPreferences(req, res);
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error adding genre to the preferred list" });
  }
};

module.exports.getRecommendedContent = async (req, res) => {
  try {
    await getRecommendedContent(req, res);
  } catch (error) {
    return res.json({ msg: "Error fetching recommendations for the user." });
  }
};

module.exports.getContentNotification = async (req, res) => {
  try {
    await getContentNotification(req, res);
  } catch (error) {
    return res.json({ msg: "Error fetching content notifications for the user." });
  }
};