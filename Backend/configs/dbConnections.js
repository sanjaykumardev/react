const mongoose = require("mongoose");

const connectDB = async()=>{
  try{
    await mongoose.connect(process.env.URL);
    console.log("connection is successfull");
  }
  catch(err){
    console.log(err);
    process.exit(1)
  }
};




module.exports = connectDB;