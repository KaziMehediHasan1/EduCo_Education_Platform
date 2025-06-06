import express from "express";
import { userControler } from "./user.controller";

const route = express.Router();
route.post("/create-user", userControler.createAUser);
route.get("/getUser", userControler.getUsers);
route.get("/get-single-user/:id", userControler.getAUser);
route.delete("/delete-user/:id", userControler.deleteAUser);

const userRoute = route;
export default userRoute;
