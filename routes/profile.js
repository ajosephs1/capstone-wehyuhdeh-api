const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router
  .route("/").post(profileController.addProfile)


module.exports = router;
