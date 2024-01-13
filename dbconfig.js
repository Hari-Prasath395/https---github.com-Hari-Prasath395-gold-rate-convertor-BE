// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/GoldRateConverter').then(()=>{
//     console.log('Connected to the database');
// }).catch((err)=>{
//     console.log(err);
// })


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://hari:hari@gold.jr3qfmk.mongodb.net/GOLD_RATE", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Connection Error: ", err);
  }
}

module.exports = connectDB;
