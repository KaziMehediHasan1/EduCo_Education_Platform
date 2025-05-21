import Logo from "@/assets/Icon/Icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" mx-auto md:mt-[120px] mt-14 px-4 ">
      {/* Header Main Content */}
      <div className=" mx-auto text-center">
        {/* Logo + Heading */}
        <div className="bg-white inline-flex items-center justify-center gap-2 p-3 rounded-[8px] ">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 min-w-5 rounded-md p-2 bg-[var(--color-secondary)]"
          />

          <h1 className="text-sm md:text-[1.5rem] lg:text-[2.5rem] font-semibold inline-block leading-[150%]">
            <span className="text-[var(--color-bgPrimary)]">Unlock</span> Your
            Creative Potential
          </h1>
        </div>

        {/* Sub Text */}
        <div className="space-y-2 pt-6">
          <p className="text-sm md:text-[0.9rem] lg:text-[1.5rem] leading-[150%]">
            with Online Design and Development Courses.
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center sm:gap-4 gap-2 mt-6">
          <Link to="/course" className="bg-[var(--color-bgPrimary)] text-white text-xs sm:text-sm py-2 px-4 sm:py-3 sm:px-6 rounded-[8px] hover:bg-[var(--color-hover)] hover:text-black transition-all duration-200 cursor-pointer">
            Explore Courses
          </Link>
          <Link to="/pricing" className="bg-white text-xs sm:text-sm py-2 px-4 sm:py-3 sm:px-6 rounded-[8px] border hover:bg-gray-100 transition-all duration-200 cursor-pointer">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
