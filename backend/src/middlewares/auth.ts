import { Types } from "mongoose";
import jwt from "jsonwebtoken";
import config from "../config";

// JWT TOKEN GENERATING TYPES
type TJwttoken = {
  _id: Types.ObjectId;
  uid: string;
  email: string;
  role: string;
};

// JWT TOKEN GENERATING MIDDLEWARE
export const generateToken = (payload: TJwttoken) => {
  const generatedToken = jwt.sign(payload, config.secret as string, {
    expiresIn: "24h",
  });
  return generatedToken;
};
