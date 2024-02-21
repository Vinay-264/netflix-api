const {
    getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovieorTVShows, getMovieById, getShowById, getMovieReviewsById, getShowReviewsById
  } = require("../controllers/NetflixController");
const { cacheMiddleware } = require("../middlewares/redisCacheMiddleware");
  
  const authMiddleware=require('../middlewares/authMiddleware')

  
  const router = require("express").Router();
  router.get("/", (req, res) => {
    console.log("Welcome to Netflix Api...");
    res.status(200).json({msg:"Welcome to Netflix Api..."});
  });


  router.get("/genres",cacheMiddleware,authMiddleware, getGenres);

  router.get("/trending/:category/:time_window",cacheMiddleware,authMiddleware, getTrendingMovies);

  router.get("/popular",cacheMiddleware,authMiddleware, getPopularMovies);

  router.get("/genre/:type",cacheMiddleware,authMiddleware, fetchDataByGenre);

  router.get("/search",cacheMiddleware,authMiddleware, searchMovieorTVShows);

  router.get("/movie/:movie_id",cacheMiddleware,authMiddleware, getMovieById);

  router.get("/tvshow/:series_id",cacheMiddleware,authMiddleware, getShowById);

  router.get("/movie/:movie_id/reviews",cacheMiddleware, authMiddleware, getMovieReviewsById);

  router.get("/tvshow/:series_id/reviews",cacheMiddleware, authMiddleware, getShowReviewsById);
  //router.get("/liked/:email", getLikedMovies);
//   router.post("/add", addToLikedMovies);
//   router.put("/remove", removeFromLikedMovies);
  
  
//   router.post("/create-user", createUser);
  
//   router.post("/login-user", loginUser);
  
  module.exports = router;
  
