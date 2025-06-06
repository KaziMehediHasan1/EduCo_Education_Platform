import config from "../../config";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import userModel from "./user.model";

// CREATE NEW USER
const createUser = async (payload: any) => {
  const saltRounds = Number(config.saltRounds);
  const uid = "UID-" + uuidv4();
  const hashedPassword = await bcrypt.hash(payload.password, saltRounds);
  payload.password = hashedPassword;
  payload.uid = uid;
  const result = await userModel.create(payload);
  return result;
};

// GET ALL USERS
const getUser = async () => {
  const result = await userModel.find();
  return result;
};

// GET A USER
const getUserById = async (id: string) => {
  const result = await userModel.findOne({ _id: id });
  return result;
};

// DELETE A USER
const deleteAUser = async (id: string) => {
  const result = await userModel.deleteOne({ _id: id });
  return result;
};

export const userServices = {
  createUser,
  getUser,
  getUserById,
  deleteAUser
};
