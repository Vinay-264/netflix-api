const {
    getLikedMovies,
    addToLikedMovies,
    removeFromLikedMovies,
    getUserPreferences,
    saveUserPreferences,
    modifyUserPreferences,
    getRecommendedContent,
    getContentNotification
 } = require("../controllers/UserController");
const authMiddleware = require('../middlewares/authMiddleware')

const router = require("express").Router();

router.get("/liked/:email", authMiddleware, getLikedMovies);
router.post("/add", authMiddleware, addToLikedMovies);
router.put("/remove", authMiddleware, removeFromLikedMovies);
router.get("/genrepref/:email", authMiddleware, getUserPreferences)
router.post("/savepref", authMiddleware, saveUserPreferences)
router.put("/modifypref/:email", authMiddleware, modifyUserPreferences)
router.get("/recommended/:email/:category", authMiddleware, getRecommendedContent)
router.get("/notification/:category", authMiddleware, getContentNotification)

module.exports = router;