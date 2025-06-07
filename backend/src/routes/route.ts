import { Router } from "express";
import userRoute from "../modules/user/user.route";

const router = Router();

const modelRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
];

modelRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
