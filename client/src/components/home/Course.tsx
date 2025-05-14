import CommonWrapper from "@/wrapper/CommonWrapper";
import Title from "../shared/Title";
import image1 from "@/assets/Image/Image (1).png";
import image2 from "@/assets/Image/Image (2).png";
import image3 from "@/assets/Image/Image (3).png";
import image4 from "@/assets/Image/Image (4).png";
import image5 from "@/assets/Image/Image (5).png";
import image6 from "@/assets/Image/Image.png";
const Data = [
  {
    id: 12,
    image: image1,
    week: "4 Weeks",
    level: "Beginner",
    name: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    button: "Get it Now",
  },
  {
    id: 13,
    image: image2,
    week: "4 Weeks",
    level: "Beginner",
    name: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    button: "Get it Now",
  },
  {
    id: 14,
    image: image3,
    week: "4 Weeks",
    level: "Beginner",
    name: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    button: "Get it Now",
  },
  {
    id: 15,
    image: image4,
    week: "4 Weeks",
    level: "Beginner",
    name: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    button: "Get it Now",
  },
  {
    id: 16,
    image: image5,
    week: "4 Weeks",
    level: "Beginner",
    name: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    button: "Get it Now",
  },
  {
    id: 17,
    image: image6,
    week: "4 Weeks",
    level: "Beginner",
    name: "By John Smith",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    button: "Get it Now",
  },
];

const Course = () => {
  return (
    <div>
      <CommonWrapper>
        <div>
          <Title
            header="Our Courses"
            subHeader="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            button="View All"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
            {Data?.map((cards) => {
              return (
                <div
                  key={cards?.id}
                  className="max-w-[100%] p-[15px] md:p-[40px] bg-white rounded-[8px]"
                >
                  <img src={cards?.image} alt="image" />
                  <div className="flex flex-wrap gap-2 items-center justify-between py-[24px]">
                    <div className="flex items-center gap-x-4">
                      <button className="sm:text-[0.8rem] md:text-[1rem] text-[0.7rem] bg-[var(--color-cards)] px-4 py-1.5 rounded-[8px]">
                        {cards?.week}
                      </button>
                      <button className="bg-[var(--color-cards)] px-4 py-1.5 sm:text-[0.8rem] md:text-[1rem] text-[0.7rem] rounded-[8px]">
                        {cards?.level}
                      </button>
                    </div>
                    <h1 className="text-sm md:text-[1.1rem]">{cards?.name}</h1>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="text-sm md:text-[1.5rem] font-semibold">
                      {cards?.title}
                    </h2>
                    <p className="text-xs sm:text-sm">{cards?.description}</p>
                  </div>
                  <button className="w-full text-sm md:text-[1.1rem] bg-[var(--color-bgOne)] px-2 md:px-[1.5rem] py-2 md:py-[0.9rem] rounded-[8px] mt-4 cursor-pointer duration-200 transform translate hover:bg-[var(--color-bgPrimary)] hover:text-white">
                    {cards?.button}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Course;
