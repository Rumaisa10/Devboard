import mongoose from "mongoose";

export default async function db() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_URI));
    return conn;
  } catch (err) {
    console.error(err);
  }
}
