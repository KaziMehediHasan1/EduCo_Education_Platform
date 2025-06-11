const loginUser = (payload: { email: string; password: string }) => {
  const { email, password } = payload;

  console.log(email, password, "service of authoooo");
};

export const authServices = {
  loginUser,
};
