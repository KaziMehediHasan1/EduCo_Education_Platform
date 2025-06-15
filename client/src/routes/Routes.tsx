import { createBrowserRouter } from "react-router-dom";
import Register from "@/pages/auth/Register";
import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/auth/Login";
import Course from "@/pages/Course";
import App from "@/pages/App";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Course_Details from "@/pages/Course_Details";
import DashboardLayout from "@/layout/DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: "not found page",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: `/course-details/:id`,
        element: <Course_Details />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // DASHBOARD LAYOUT
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: "dashboard main",
      },
    ],
  },
]);

export default routes;
