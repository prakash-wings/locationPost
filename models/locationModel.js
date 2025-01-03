const mongoose = require("mongoose");


const locationSchema = new mongoose.Schema(
    {
        latitude:String,
        longitude:String,
        date:String,
        location:String
    }
)


module.exports = mongoose.model('locationModel',locationSchema)