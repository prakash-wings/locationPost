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



exports.getLocations = async(req,res)=>{
    try {
        const locations = await locationModel.find();
        res.status(200).json(locations);
      } catch (error) {
        console.error('Error retrieving location data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
}