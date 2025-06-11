import mongoose from "mongoose";
import { IUser, Role } from "./user.type";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.STUDENT },
    uid: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    password: { type: String, required: true },
    changeRoleReq: {
      type: String,
      enum: ["pending", "approved", "rejected", null],
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
