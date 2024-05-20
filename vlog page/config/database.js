const mongoose = require("mongoose");

require("dotenv").config();

const connectwithDb = () =>{
   mongoose.connect(process.env.DATABASE_URL)   
   .then(() => console.log ("DB ka Connection is Successful")) 
     .catch((error) => { 
       console.log("issuse in db connection");
       console.error(error.message);
       process.exit(1);
     })  
   
};
module.exports = connectwithDb;