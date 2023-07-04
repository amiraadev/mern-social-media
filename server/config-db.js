import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to DB...");
      } catch (error) {
        console.log(error);
      }
}


export default connectToDB;
