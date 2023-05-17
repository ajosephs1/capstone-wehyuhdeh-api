const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.route("/").post(profileController.addProfile)

router.route("/login").post(profileController.loginProfile)


module.exports = router;
