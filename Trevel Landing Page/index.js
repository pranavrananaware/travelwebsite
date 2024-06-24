import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      "mongodb+srv://ganeshpawar09:ganesh2003@cluster0.qwr7daj.mongodb.net/travelIndia"
    );

    console.log(`MongoDB connected ${connectInstance.connection.host} `);
  } catch (error) {
    console.log("Mongodb connect error ", error);
    process.exit(1);
  }
};

export default connectDB;