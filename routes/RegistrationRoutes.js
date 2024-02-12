const {  registration } = require("../controllers/RegistrationController");


const router = require("express").Router();

router.post("/registration", registration);

module.exports = router;