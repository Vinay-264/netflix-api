const {  
    getWatchListMovies, 
    addToWatchListMovies, 
    removeFromWatchListMovies } = require("../controllers/WatchListController");

const authMiddleware=require('../middlewares/authMiddleware');

const router = require("express").Router();

router.get("/:email", authMiddleware, getWatchListMovies);
router.post("/addwatchlist", authMiddleware, addToWatchListMovies);
router.put("/removewatchlist", authMiddleware, removeFromWatchListMovies);

module.exports = router;