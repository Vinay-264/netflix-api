const {
    register, login
  } = require("../controllers/AuthController");

  
  const router = require("express").Router();
  router.get("/", (req, res) => {
    console.log("default api call");
    res.status(200).json({msg:"default api call"});
  });

  router.post("/register", register);

  router.post("/login", login);

  
  
  
  module.exports = router;
  