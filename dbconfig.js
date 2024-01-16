// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/GoldRateConverter').then(()=>{
//     console.log('Connected to the database');
// }).catch((err)=>{
//     console.log(err);
// })


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Gold:Gold@gold.zmthgwa.mongodb.net/Gold", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Connection Error: ", err);
  }
}

module.exports = connectDB;
