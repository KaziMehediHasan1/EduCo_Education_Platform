import { authServices } from "./auth.service";

const loginUser = (payload: { email: string; password: string }) => {
  const result = authServices.loginUser(payload);
  
};

export const authController = {
  loginUser
};
