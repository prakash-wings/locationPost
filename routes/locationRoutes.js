const express = require("express");
const router = express.Router();


const {locationPost} = require("./../controllers/locationController")


router.post("/locationPost" , locationPost);

module.exports = router;