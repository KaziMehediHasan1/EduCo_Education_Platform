import userModel from "../user/user.model";
import bcrypt from "bcryptjs";
const loginUser = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  const user = userModel.find({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const matchPass = await bcrypt.compare(password, user.password);
   if (!matchPass) {
    throw new Error("Invalid email or password");
  }
};

export const authServices = {
  loginUser,
};
