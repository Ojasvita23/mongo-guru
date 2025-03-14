import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define MONGO_URI in your .env file");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
