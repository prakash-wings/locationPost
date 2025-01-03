const express = require("express");
const router = express.Router();


const {locationPost,getLocations} = require("./../controllers/locationController")


router.post("/locationPost" , locationPost);
router.get("/getLocations" , getLocations);

module.exports = router;