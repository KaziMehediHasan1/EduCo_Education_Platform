import { Router } from "express";
import userRoute from "../modules/user/user.route";
import useCourseRoute from "../modules/course/course.route";

const router = Router();

const modelRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/course",
    route: useCourseRoute,
  },
];

modelRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
