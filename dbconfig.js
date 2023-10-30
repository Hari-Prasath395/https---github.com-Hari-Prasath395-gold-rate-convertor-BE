// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/GoldRateConverter').then(()=>{
//     console.log('Connected to the database');
// }).catch((err)=>{
//     console.log(err);
// })


const mongoose = require("mongoose");


const connection = async()=>{
  await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection Error: ", err);
  });
}

module.exports =connection;