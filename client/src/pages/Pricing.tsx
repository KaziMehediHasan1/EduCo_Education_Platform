import CommonHeader from "@/components/Shared/CommonHeader";
import Divider from "@/components/Shared/Divider";
import { cn } from "@/lib/utils";
import CommonWrapper from "@/wrapper/CommonWrapper";
import { useState } from "react";
import markIcon from "@/assets/Icon/Mark.svg";
import corsIcon from "@/assets/Icon/XAroow.svg";
import Faq from "@/components/home/Faq";
const Pricing = () => {
  const [priceRng, setPriceRng] = useState<boolean>(true);
  return (
    <div>
      <CommonHeader
        title="Our Pricings"
        subTitle="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <Divider />
      <CommonWrapper>
        <div className="bg-white flex items-center gap-x-2 mb-5 sm:mb-0 w-fit mx-auto rounded-[8px] p-1.5">
          <button
            onClick={() => setPriceRng(true)}
            className={cn(
              "text-xs sm:text-sm duration-200 transform cursor-pointer rounded-[8px] py-[8px] px-[15px]",
              priceRng
                ? "bg-[var(--color-bgPrimary)] text-white"
                : "hover:text-white hover:bg-[var(--color-bgPrimary)]"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setPriceRng(false)}
            className={cn(
              "text-xs sm:text-sm duration-200 transform cursor-pointer rounded-[8px] py-[8px] px-[15px]",
              !priceRng
                ? "bg-[var(--color-bgPrimary)] text-white"
                : "hover:text-white hover:bg-[var(--color-bgPrimary)]"
            )}
          >
            Yearly
          </button>
        </div>

        <div className="bg-white p-[20px] sm:p-[50px] flex flex-col md:flex-row justify-between gap-8 items-center mt-14">
          <div className=" w-full p-[15px] sm:p-[40px] bg-[#F1F1F3] space-y-[30px] rounded-[8px]">
            <h1 className="bg-[var(--color-deepHover)] py-2.5 px-6 text-center rounded-[8px]">
              Free Plan
            </h1>
            <div className="flex items-end justify-center">
              <h2 className="text-3xl sm:text-5xl font-semibold ">$0</h2>
              <p className="text-xs sm:text-sm">/month</p>
            </div>

            {/* features */}
            <div className="bg-white rounded-[8px] px-5">
              <div className="w-full p-2">
                <h1 className="text-xs sm:text-sm font-semibold my-[20px] text-center">
                  Available Features
                </h1>
                <div className="flex items-center gap-x-2 p-[8px]  rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">Access to selected free courses.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">
                    Limited course materials and resources.
                  </p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">Ad-supported platform.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">No certification upon completion.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={corsIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] max-w-6"
                  />
                  <p className="text-xs">No certification upon completion.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={corsIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] max-w-6 "
                  />
                  <p className="text-xs">No certification upon completion.</p>
                </div>
                {/* button */}
                <button className="py-2.5 px-6 rounded-[8px] bg-[var(--color-bgPrimary)] text-white cursor-pointer w-full my-[20px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* second card */}
          <div className=" w-full p-[15px] sm:p-[40px] bg-[#F1F1F3] space-y-[30px] rounded-[8px]">
            <h1 className="bg-[var(--color-deepHover)] py-2.5 px-6 text-center rounded-[8px]">
              Free Plan
            </h1>
            <div className="flex items-end justify-center">
              <h2 className="text-3xl sm:text-5xl font-semibold ">$79</h2>
              <p className="text-xs sm:text-sm">/month</p>
            </div>

            {/* features */}
            <div className="bg-white rounded-[8px] px-5">
              <div className="w-full p-2">
                <h1 className="text-xs sm:text-sm font-semibold my-[20px] text-center">
                  Available Features
                </h1>
                <div className="flex items-center gap-x-2 p-[8px]  rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">Access to selected free courses.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">
                    Limited course materials and resources.
                  </p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">Ad-supported platform.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={markIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] p-[2px]"
                  />
                  <p className="text-xs">No certification upon completion.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={corsIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] max-w-6"
                  />
                  <p className="text-xs">No certification upon completion.</p>
                </div>
                <div className="flex items-center gap-x-2 p-[8px] rounded-[8px]">
                  <img
                    src={corsIcon}
                    alt="markIcon"
                    className="bg-[var(--color-deepHover)] max-w-6 "
                  />
                  <p className="text-xs">No certification upon completion.</p>
                </div>
                {/* button */}
                <button className="py-2.5 px-6 rounded-[8px] bg-[var(--color-bgPrimary)] text-white cursor-pointer w-full my-[20px]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>
      <Faq />
    </div>
  );
};

export default Pricing;
