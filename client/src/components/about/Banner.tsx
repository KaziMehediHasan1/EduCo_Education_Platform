import { Button } from "../ui/button";
import Icon from "@/components/about/BgIcon";
const Banner = () => {
  return (
    <div>
      <div className="bg-white p-14 rounded-xl flex items-center justify-between  gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">
            <span className="text-[var(--color-bgPrimary)] text-[15px] sm:text-[25px] font-semibold leading-[100%] inline-block">
              Together
            </span>
            <span className="text-[15px] sm:text-[25px]">
              , let's shape the future of digital
              <br /> innovation
            </span>
          </h3>
          <p className="text-gray-600 text-sm">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div>
            <img src={Icon} alt="" />
        </div>
        <Button
          size="lg"
          className="bg-[var(--color-bgPrimary)] rounded-[8px] cursor-pointer hover:bg-[var(--color-bgPrimary)]"
        >
          Join
        </Button>
      </div>
    </div>
  );
};

export default Banner;
