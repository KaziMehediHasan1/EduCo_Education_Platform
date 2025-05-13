
import { ArrowRight } from "lucide-react";
const Ad = () => {
  return (
    <div className="bg-[var(--color-bgPrimary)] py-1.5 sm:py-2.5 px-5 flex items-center space-x-4 justify-center">
      <h1 className="text-[0.5rem] sm:text-[0.8rem] text-white text-center ">
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </h1>
      <button className="cursor-pointer">
        <ArrowRight className="text-white max-w-3 sm:max-w-5" />
      </button>
    </div>
  );
};

export default Ad;
