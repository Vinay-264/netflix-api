const {
    getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovies
  } = require("../controllers/NetflixController");

  
  const router = require("express").Router();
  router.get("/", (req, res) => {
    console.log("Welcome to Netflix Api...");
    res.status(200).json({msg:"default api call"});
  });

  router.get("/genres", getGenres);

  router.get("/trending/:category/:time_window", getTrendingMovies);

  router.get("/popular", getPopularMovies);

  router.get("/genre/:type", fetchDataByGenre);

  router.get("/search", searchMovies);

  //router.get("/liked/:email", getLikedMovies);
//   router.post("/add", addToLikedMovies);
//   router.put("/remove", removeFromLikedMovies);
  
  
//   router.post("/create-user", createUser);
  
//   router.post("/login-user", loginUser);
  
  module.exports = router;
  