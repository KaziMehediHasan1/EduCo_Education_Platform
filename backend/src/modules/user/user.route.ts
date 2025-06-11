import express from "express";
import { userControler } from "./user.controller";

const route = express.Router();
route.post("/create-user", userControler.createAUser);
route.get("/getUser", userControler.getUsers);
route.get("/me/:id", userControler.loginUser);
route.get("/get-single-user/:id", userControler.getAUser);
route.delete("/delete-user/:id", userControler.deleteAUser);
route.patch("/req-instructor/:id", userControler.reqInstructor);

const userRoute = route;
export default userRoute;
