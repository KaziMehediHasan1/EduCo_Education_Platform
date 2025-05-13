import CommonWrapper from "@/wrapper/CommonWrapper";
import corsIcon from "@/assets/Icon/XAroow.svg";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const Faq = () => {
  const [showAns, setShowAns] = useState<number | null>();
  const faqData = [
    {
      id: 55,
      question: "What is your refund policy?",
      answer: "We offer a 14-day money-back guarantee on all plans.",
    },
    {
      id: 56,
      question: "How can I contact support?",
      answer:
        "You can reach us via the contact form or at support@example.com.",
    },
    {
      id: 57,
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial for new users.",
    },
    {
      id: 58,
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial for new users.",
    },
    {
      id: 60,
      question: "How can I contact support?",
      answer:
        "You can reach us via the contact form or at support@example.com.",
    },
  ];
  const toggleShowAns = (indexVal: number) => {
    console.log(`prev ${showAns} and current ${indexVal}`);
    setShowAns(showAns === indexVal ? null : indexVal);
  };
  return (
    <>
      <CommonWrapper>
        <div className="flex flex-col sm:flex-row bg-white rounded-[8px] p-[30px] md:p-[80px] justify-between">
          {/* HEADER OF FAQ SECTION */}
          <div className=" space-y-[20px] max-w-full md:max-w-[450px]">
            <div>
              <h1 className="text-sm sm:text-3xl leading-[130%]">
                Frequently Asked Questions
              </h1>
              <p className="text-xs sm:text-sm">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
            </div>
            <button className="py-2.5 px-6 border text-xs sm:text-sm rounded-[8px] bg-[var(--color-bgOne)] cursor-pointer">
              See All FAQ
            </button>
          </div>
          {/* FAQ MAIN SECTION */}
          <div className="shadow-xs  w-full rounded-[8px] py-6">
            {faqData?.map((data) => {
              return (
                <div key={data?.id} className=" py-3 px-8 space-y-2.5">
                  <button
                    onClick={() => toggleShowAns(data?.id)}
                    className=" flex items-center justify-between w-full cursor-pointer "
                  >
                    <p className="text-xs sm:text-sm ">{data?.question}</p>
                    {showAns === data?.id ? (
                      <X className="bg-[var(--color-deepHover)] p-1 " />
                    ) : (
                      <Plus className="bg-[var(--color-deepHover)] p-1" />
                    )}
                  </button>

                  {showAns === data?.id && (
                    <button className="cursor-pointer">
                      <p className="text-gray-400 text-[9px] sm:text-[12px]">
                        {data?.answer}
                      </p>
                    </button>
                  )}
                  <div className={`w-full h-0.5 border-b-[1px] inline-block`} />
                </div>
              );
            })}
          </div>
        </div>
      </CommonWrapper>
    </>
  );
};

export default Faq;
