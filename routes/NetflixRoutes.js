const {
    getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovieorTVShows, getMovieById, getShowById
  } = require("../controllers/NetflixController");
  
  const verifyToken=require('../middlewares/verifyToken')
  const authMiddleware=require('../middlewares/authMiddleware')

  
  const router = require("express").Router();
  router.get("/", (req, res) => {
    console.log("Welcome to Netflix Api...");
    res.status(200).json({msg:"Welcome to Netflix Api..."});
  });


  router.get("/genres",authMiddleware, getGenres);

  router.get("/trending/:category/:time_window",authMiddleware, getTrendingMovies);

  router.get("/popular",authMiddleware, getPopularMovies);

  router.get("/genre/:type",authMiddleware, fetchDataByGenre);

  router.get("/search",authMiddleware, searchMovieorTVShows);

  router.get("/movie/:movie_id",authMiddleware, getMovieById);

  router.get("/tvshow/:series_id",authMiddleware, getShowById);
  //router.get("/liked/:email", getLikedMovies);
//   router.post("/add", addToLikedMovies);
//   router.put("/remove", removeFromLikedMovies);
  
  
//   router.post("/create-user", createUser);
  
//   router.post("/login-user", loginUser);
  
  module.exports = router;
  
