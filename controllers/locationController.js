const locationModel = require("./../models/locationModel")



exports.locationPost = async(req,res) =>{

    try{
        const {location,longitude,latitude,date} = req.body;


   

          const locationData = new locationModel({
            latitude,
            longitude,
            date,
            location,
          });

          await locationData.save();
          res.status(201).json({ message: 'Location data saved successfully' });
      


    }catch(err){
        console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });


    }
}