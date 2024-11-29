import mongoose from "mongoose"; 

const connectDB = async () => {
  try {
    const url = "mongodb://localhost:27017/orders";
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Mongoose connection error:", error);
    process.exit(1);
  }
};

export default connectDB;

// module.exports = 
