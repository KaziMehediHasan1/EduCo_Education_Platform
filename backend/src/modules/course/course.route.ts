import express from "express";
import { courseController } from "./course.controller";
const route = express.Router();

route.post("/create-course", courseController.createACourse);
route.get("/getAll-course", courseController.getAllCourses);
route.get("/getCourseById/:id", courseController.getCourseById);

const useCourseRoute = route;
export default useCourseRoute