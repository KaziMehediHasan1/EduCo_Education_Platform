import express from "express";
import { userControler } from "./user.controller";

const route = express.Router();
route.post("/create-user", userControler.createAUser);
route.get("/getUser", userControler.getUsers);

const userRoute = route;
export default userRoute;
