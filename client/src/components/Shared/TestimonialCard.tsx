import imageOne from "@/assets/Image/Image (6).png";
import imageTwo from "@/assets/Image/Image (7).png";
import imageThree from "@/assets/Image/Image (8).png";
import imageFour from "@/assets/Image/Image (9).png";
import { MoveLeft, MoveRight } from "lucide-react";

const TestimonialCard = () => {
  const photo = [imageOne, imageTwo, imageThree, imageFour];
  console.log(photo);
  return (
    <div className="max-w-[650px] ">
      <div className="space-y-[40px]">
        <div>
          <h1 className="text-[1.1rem] sm:text-[25px] text-[var(--color-textColor)] font-semibold">
            Students Testimonials
          </h1>
          <p className="text-xs sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            amet neque vel, at eum unde officiis sunt, non illum cumque dolores
            commodi architecto minus quas!
          </p>
        </div>
        <div className="bg-white">
          <p className="p-[15px] sm:p-[35px] text-xs sm:text-sm leading-[150%]">
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          <div className="bg-[var(--color-cards)] flex items-center justify-between p-[8px] sm:p-[15px]">
            <div className="flex items-center gap-x-4">
              <img src={imageOne} alt="" />
              <p className="text-xs sm:text-sm">name</p>
            </div>
            <button className="py-3 px-6 bg-[var(--color-bgOne)] text-xs sm:text-sm cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-4 justify-end">
        <button className="bg-white rounded-[8px] p-2 cursor-pointer">
          <MoveLeft />
        </button>
        <button className="bg-white rounded-[8px] p-2 cursor-pointer">
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
