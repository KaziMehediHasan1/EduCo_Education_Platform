import CommonWrapper from "@/wrapper/CommonWrapper";
import Title from "../shared/Title";
import Image1 from "@/assets/Image/Image (6).png";
import Image2 from "@/assets/Image/Image (7).png";
import Image3 from "@/assets/Image/Image (8).png";
import Image4 from "@/assets/Image/Image (9).png";

const Testimonial = () => {
  const Data = [
    {
      id: 1,
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
      button: "Read Full Story",
      image: Image1,
    },
    {
      id: 2,
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Jason M",
      button: "Read Full Story",
      image: Image2,
    },
    {
      id: 3,
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Emily R",
      button: "Read Full Story",
      image: Image3,
    },
    {
      id: 4,
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Michael K",
      button: "Read Full Story",
      image: Image4,
    },
  ];
  return (
    <div>
      <CommonWrapper>
        <div>
          <Title
            header="Our Testimonials"
            subHeader="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            button="View All"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
            {Data?.map((card) => {
              return (
                <div
                  key={card?.id}
                  className="max-w-[650px] p-[15px] md:p-[40px] bg-white rounded-[8px]"
                >
                  <p className="text-xs sm:text-sm leading-[150%] text-[var(--color-textSec)] py-[20px]">
                    {card?.desc}
                  </p>

                  <div className="bg-[var(--color-bgOne)] py-[14px] px-[15px] flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex flex-wrap items-center gap-x-4">
                      <img
                        src={card?.image}
                        alt="image"
                        className="max-w-12 max-h-12"
                      />
                      <p className="text-xs sm:text-sm">{card?.name}</p>
                    </div>
                    <button className="bg-[var(--color-cards)] py-3 px-4 text-xs md:text-[1rem]">
                      {card?.button}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Testimonial;
