import CommonWrapper from "@/wrapper/CommonWrapper";
import Video1 from "@/assets/Image/Container.png";
import { Clock } from "lucide-react";
const Course_Details = () => {
  return (
    <div>
      <CommonWrapper>
        {/* HEADER TEXT SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-stretch space-y-3">
          <h1 className="text-[20px] sm:text-[35px] font-semibold leading-[150%] inline-block">
            UI/UX Design Course
          </h1>
          <p className="text-xs sm:text-[14px] leading-[150%] text-[var(--color-smallText)]">
            Welcome to our UI/UX Design course! This comprehensive program will
            equip you with the knowledge and skills to create exceptional user
            interfaces (UI) and enhance user experiences (UX). Dive into the
            world of design thinking, wireframing, prototyping, and usability
            testing. Below is an overview of the curriculum
          </p>
        </div>
      </CommonWrapper>
      {/* DIVIDER */}
      <div className="max-w-full mx-auto h-[1px] bg-[var(--color-underline)]" />
      <CommonWrapper>
        {/* VIDEO WATCH */}
        <div className="space-y-20 sm:space-y-32">
          <img src={Video1} alt="video" />
        </div>

        {/* COURSE OUTLINE SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[35px] my-[20px] sm:my-[35px] p-3">
            <div className="bg-white p-7 sm:p-10 rounded-[8px]">
                <div className="space-y-4 sm:space-y-8"> 
                    <h1 className="text-[1.8rem] sm:text-[3rem] leading-[30%] font-semibold text-end">01</h1>
                    <p className="text-[18px] sm:text-2xl leading-[150%] text-[var(--color-textColor)] font-medium">Introduction to UI/UX Design</p>
                </div>

                {/* CLASS MODULES */}
                <div className="my-[20px] space-y-4">
                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white p-7 sm:p-10 rounded-[8px]">
                <div className="space-y-4 sm:space-y-8"> 
                    <h1 className="text-[1.8rem] sm:text-[3rem] leading-[30%] font-semibold text-end">02</h1>
                    <p className="text-[18px] sm:text-2xl leading-[150%] text-[var(--color-textColor)] font-medium">Introduction to UI/UX Design</p>
                </div>

                {/* CLASS MODULES */}
                <div className="my-[20px] space-y-4">
                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>

     
            <div className="bg-white p-7 sm:p-10 rounded-[8px]">
                <div className="space-y-4 sm:space-y-8"> 
                    <h1 className="text-[1.8rem] sm:text-[3rem] leading-[30%] font-semibold text-end">03</h1>
                    <p className="text-[18px] sm:text-2xl leading-[150%] text-[var(--color-textColor)] font-medium">Introduction to UI/UX Design</p>
                </div>

                {/* CLASS MODULES */}
                <div className="my-[20px] space-y-4">
                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-7 sm:p-10 rounded-[8px]">
                <div className="space-y-4 sm:space-y-8"> 
                    <h1 className="text-[1.8rem] sm:text-[3rem] leading-[30%] font-semibold text-end">04</h1>
                    <p className="text-[18px] sm:text-2xl leading-[150%] text-[var(--color-textColor)] font-medium">Introduction to UI/UX Design</p>
                </div>

                {/* CLASS MODULES */}
                <div className="my-[20px] space-y-4">
                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-7 sm:p-10 rounded-[8px]">
                <div className="space-y-4 sm:space-y-8"> 
                    <h1 className="text-[1.8rem] sm:text-[3rem] leading-[30%] font-semibold text-end">05</h1>
                    <p className="text-[18px] sm:text-2xl leading-[150%] text-[var(--color-textColor)] font-medium">Introduction to UI/UX Design</p>
                </div>

                {/* CLASS MODULES */}
                <div className="my-[20px] space-y-4">
                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:items-center justify-between gap-3  border border-[var(--color-cards)] rounded-[8px] px-3 py-5 sm:px-4 sm:py-6">
                        <div className="space-y-1">
                            <h1 className="text-[12px] sm:text-[16px]">Understanding UI/UX Design Principles</h1>
                            <p className="text-[10px] sm:text-[12px]">Lesson 01</p>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 bg-[var(--color-bgOne)] px-2 py-2 rounded-sm">
                            <Clock className="w-full max-w-4 h-4"/>
                            <p className="text-xs sm:text-sm">45 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Course_Details;
