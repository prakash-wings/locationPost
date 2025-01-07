const mongoose =  require("mongoose");
require('dotenv').config()



const database =()  =>{

    mongoose.connect("mongodb+srv://prakashberawings:KwsSHIlFnm7oDuB8@cluster0.y6qww.mongodb.net/",{
        useNewUrlParser: true,
      useUnifiedTopology: true,
    
    }).then(()=>{
        console.log("DB Connected Successfully!")
    }).catch((err)=>{
        console.log(err)
    })
}
    


module.exports = database;