
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Gold:Gold@gold.zg6tkae.mongodb.net/Gold", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Connection Error: ", err);
  }
}

module.exports = connectDB;
