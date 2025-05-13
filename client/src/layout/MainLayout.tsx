import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-[var(--color-mainBg)] h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
