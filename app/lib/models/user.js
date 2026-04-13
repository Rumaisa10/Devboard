import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password : { type :String},
    
    image: String,
  },
  { timestamps: true },
);
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
