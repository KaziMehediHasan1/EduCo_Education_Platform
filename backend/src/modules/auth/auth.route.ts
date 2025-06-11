import express from "express";
const route = express.Router();
const payload = {
  email: "gamil.com",
  password: "password3540",
};

route.get("/auth/login", payload);

const loginRoute = route;
export default loginRoute;
