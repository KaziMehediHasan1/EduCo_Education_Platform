import Title from "../shared/Title";
import Book from "@/assets/Icon/book.png";
import Backpack from "@/assets/Icon/backpack.png";
import Light from "@/assets/Icon/light.png";
import Puzzle from "@/assets/Icon/puzzel.png";
const Goals = () => {
  const data = [
    {
      title: "TProvide Practical Skills",
      description:
        "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
      icon: Book,
    },
    {
      title: "Foster Creative Problem-Solving",
      description:
        "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
      icon: Backpack,
    },
    {
      title: "Promote Collaboration and Community",
      description:
        "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
      icon: Light,
    },
    {
      title: "Stay Ahead of the Curve",
      description:
        "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
      icon: Puzzle,
    },
  ];
  return (
    <>
      <div>
        <Title
          header="Our Goals"
          subHeader="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
        Through our carefully crafted courses, we aim to"
        />

        {/* CARD SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* ACHIEVEMENTS CARD */}
          {data?.map((item, inx) => {
            return (
              <div
                key={inx}
                className="bg-white p-6 rounded-xl  flex flex-col gap-4"
              >
                <div className="border-[var(--color-bgPrimary)] border-[1px] bg-[var(--color-deepHover)] rounded-md p-2  w-fit">
                  <img src={item?.icon} alt={item?.icon} className=" w-5 h-6"/>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{item?.title}</h3>
                  <p className="text-gray-600 text-sm">{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Goals;
