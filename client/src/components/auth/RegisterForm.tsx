import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="max-w-[650px] w-full mx-auto bg-white rounded-[8px] my-[4px]">
      <div className="p-[20px] sm:p-[40px] space-y-8">
        <div className="space-y-3">
          <h1 className="font-semibold text-lg sm:text-3xl text-center">
            Sign UP
          </h1>
          <p className="text-xs sm:text-sm text-center">
            Create an account to unlock exclusive features.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-semibold">Full Name</h2>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border p-[7px] sm:p-[10px] bg-[var(--color-mainBg)] rounded-[8px] w-full"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-semibold">Email</h2>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border p-[7px] sm:p-[10px] bg-[var(--color-mainBg)] rounded-[8px]  w-full"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-semibold">Password</h2>
            <input
              type="password"
              placeholder="Enter a password"
              className="border p-[7px] sm:p-[10px] bg-[var(--color-mainBg)] rounded-[8px]  w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-xs sm:text-sm ">
            I agree with Terms of Use and Privacy Policy
          </p>
        </div>
        <button className="py-2.5 px-6 bg-[var(--color-bgPrimary)] rounded-[8px] w-full text-white">
          Sign Up
        </button>

        {/* BREAK POINT */}
        <div className="flex items-center gap-x-4">
          <div className="w-full h-[1px] bg-[var(--color-deepHover)]" />
          <p>OR</p>
          <div className="w-full h-[1px] bg-[var(--color-deepHover)]" />
        </div>

        {/* GOOGLE AUTH */}
        <button className="flex items-center justify-center gap-x-2 py-3 px-6 rounded-[8px] bg-[var(--color-mainBg)] w-full ">
          <FcGoogle className="text-2xl" />
          <p>Sign Up with Google</p>
        </button>

        {/* REDIRECT PAGE */}
        <div className="flex items-center gap-x-2 justify-center">
          <p className="text-xs sm:text-sm">Already have an account?</p>
          <Link to="/login" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
