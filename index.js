const express =require("express");
const bodyParser = require("body-parser");
const database = require("./config/database");


const PORT = process.env.PORT || 8800;


require('dotenv').config();


const app = express();

app.use(bodyParser.json());


const locationRoute = require("./routes/locationRoutes")

app.use("/api/v1" , locationRoute);

app.listen(4000,(req,res)=>{
    console.log(`Server has been started on port number 4000`)

})


app.get('/',(req,res)=>{
    res.send("This is my server side Get Request")
})


database();