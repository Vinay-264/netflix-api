const {
    getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovieorTVShows, getMovieById, getShowById
  } = require("../controllers/NetflixController");

  
  const router = require("express").Router();
  router.get("/", (req, res) => {
    console.log("Welcome to Netflix Api...");
    res.status(200).json({msg:"Welcome to Netflix Api..."});
  });

  router.get("/genres", getGenres);

  router.get("/trending/:category/:time_window", getTrendingMovies);

  router.get("/popular", getPopularMovies);

  router.get("/genre/:type", fetchDataByGenre);

  router.get("/search", searchMovieorTVShows);

  router.get("/movie/:movie_id", getMovieById);

  router.get("/tvshow/:series_id", getShowById);
  //router.get("/liked/:email", getLikedMovies);
//   router.post("/add", addToLikedMovies);
//   router.put("/remove", removeFromLikedMovies);
  
  
//   router.post("/create-user", createUser);
  
//   router.post("/login-user", loginUser);
  
  module.exports = router;
  
