const {
    getGenres, getTrendingMovies, getPopularMovies, searchMovies
  } = require("../controllers/NetflixController");

  
  const router = require("express").Router();
  router.get("/", (req, res) => {
    console.log("default api call");
    res.status(200).json({msg:"default api call"});
  });

  router.get("/genres", getGenres);

  router.get("/trendingMovies/:category/:time_window", getTrendingMovies);

  router.get("/popularMovies", getPopularMovies);

  router.get("/search", searchMovies);

  //router.get("/liked/:email", getLikedMovies);
//   router.post("/add", addToLikedMovies);
//   router.put("/remove", removeFromLikedMovies);
  
  
//   router.post("/create-user", createUser);
  
//   router.post("/login-user", loginUser);
  
  module.exports = router;
  