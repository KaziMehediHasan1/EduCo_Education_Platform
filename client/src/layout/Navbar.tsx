import Logo from "@/assets/logo/MainLogo.png";
import Menubar from "@/assets/Icon/Menu.png";
import CommonWrapper from "@/wrapper/CommonWrapper";
import { NavLink } from "react-router-dom";
import Ad from "./Ad";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Ad />
      <CommonWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[45px]">
            {/** LOGO **/}
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="max-w-8 sm:max-w-12 max-h-10 rounded-[8px] p-0.5 bg-[var(--color-bgPrimary)]"
              />
            </Link>

            {/* NAV-LINK */}
            <div className="md:flex items-center gap-[20px] hidden">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-sm leading-[150%] text-[var(--color-textColor)] bg-[var(--color-bgOne)]  space-y-3 rounded-[8px] active-style"
                    : "text-sm leading-[150%]  "
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-sm leading-[150%] text-[var(--color-textColor)] bg-[var(--color-bgOne)]  space-y-3 rounded-[8px] active-style"
                    : "text-sm leading-[150%]  "
                }
                to="/course"
              >
                Courses
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-sm leading-[150%] text-[var(--color-textColor)] bg-[var(--color-bgOne)]  space-y-3 rounded-[8px] active-style"
                    : "text-sm leading-[150%]  "
                }
                to="/about"
              >
                About us
              </NavLink>
              <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-sm leading-[150%] text-[var(--color-textColor)] bg-[var(--color-bgOne)]  space-y-3 rounded-[8px] active-style"
                  : "text-sm leading-[150%]  "
              }
                to="/pricing"
              >
                Pricing
              </NavLink>
              <NavLink
               className={({ isActive }) =>
                  isActive
                    ? "text-sm leading-[150%] text-[var(--color-textColor)] bg-[var(--color-bgOne)]  space-y-3 rounded-[8px] active-style"
                    : "text-sm leading-[150%]  "
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/*** FOR MOBILE DEVICE ONLY ***/}
          <button className="md:hidden block">
            <img src={Menubar} alt="" />
          </button>

          {/** AUTH NAV-LINK **/}
          <div className="md:flex items-center gap-[20px] hidden">
            <NavLink
              className={"text-sm leading-[150%] text-[var(--color-textColor)]"}
              to="/register"
            >
              Sign up
            </NavLink>
            <NavLink
              className={
                "Login text-sm leading-[150%] text-white bg-[var(--color-bgPrimary)] rounded-[8px] py-[8px] px-[15px] hover:text-black hover:bg-white transform transition-all duration-200"
              }
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Navbar;
