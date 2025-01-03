const mongoose =  require("mongoose");
require('dotenv').config()



const database =()  =>{

    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
    
    }).then(()=>{
        console.log("DB Connected Successfully!")
    }).catch((err)=>{
        console.log(err)
    })
}
    


module.exports = database;