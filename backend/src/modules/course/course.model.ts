import mongoose from "mongoose";
import { Role } from "../user/user.type";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String },
  thumbnail: { type: String, required: true },
});
