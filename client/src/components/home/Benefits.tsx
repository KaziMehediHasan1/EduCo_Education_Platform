import CommonWrapper from "@/wrapper/CommonWrapper";
import Title from "../shared/Title";
import { ArrowRight } from "lucide-react";
const Benefits = () => {
  const data = [
    {
      no: "01",
      title: "Flexible Learning Schedule",
      paraOne:
        " Fit your coursework around your existing commitments and obligations.",
    },
    {
      no: "02",
      title: "Flexible Learning Schedule",
      paraOne:
        " Fit your coursework around your existing commitments and obligations.",
    },
    {
      no: "03",
      title: "Flexible Learning Schedule",
      paraOne:
        " Fit your coursework around your existing commitments and obligations.",
    },
    {
      no: "04",
      title: "Flexible Learning Schedule",
      paraOne:
        " Fit your coursework around your existing commitments and obligations.",
    },
    {
      no: "05",
      title: "Flexible Learning Schedule",
      paraOne:
        " Fit your coursework around your existing commitments and obligations.",
    },
    {
      no: "06",
      title: "Flexible Learning Schedule",
      paraOne:
        " Fit your coursework around your existing commitments and obligations.",
    },
  ];
  return (
    <div>
      <CommonWrapper>
        <Title
          header="Benifit"
          subHeader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia?"
          button="View all"
        />

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((item) => {
            return (
              <div
                key={item.no}
                className="bg-white p-10 rounded-[8px] shadow-md flex flex-col justify-between"
              >
                <h1 className="text-[3.5rem] sm:text-[5rem] leading-[30%] font-semibold text-end">
                  {item?.no}
                </h1>
                <div className="space-y-1.5 pt-8">
                  <p className="text-sm sm:text-[20px] leading-[150%]">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-[15px] leading-[150%] text-[#4C4C4D]">
                    {item.paraOne}
                  </p>
                </div>

                <div className="text-end">
                  <button className="cursor-pointer max-w-fit mt-5 hover:bg-[var(--color-bgPrimary)] duration-200 transform translate group rounded-[2px] hover:scale-105 p-2 ">
                    <ArrowRight className=" max-w-5 sm:max-w-8 group-hover:text-white group-hover:scale-105 -rotate-45 group-hover:rotate-0 duration-200 transform translate " />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Benefits;
