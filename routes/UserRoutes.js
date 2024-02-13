const {
    getLikedMovies,
    addToLikedMovies,
    removeFromLikedMovies } = require("../controllers/UserController");
const authMiddleware = require('../middlewares/authMiddleware')



const router = require("express").Router();

router.get("/liked/:email", authMiddleware, getLikedMovies);
router.post("/add", authMiddleware, addToLikedMovies);
router.put("/remove", authMiddleware, removeFromLikedMovies);


module.exports = router;