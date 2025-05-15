import Title from "../shared/Title";

const Achievements = () => {
  const data = [
    {
      title: "Trusted by Thousands",
      description:
        "  We have successfully served thousands of students, helping  them unlock their potential and achieve their career goals.",
      icon: "🏆",
    },
    {
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades for their quality, depth of content, and effective teaching.",
      icon: "🥇",
    },
    {
      title: "Positive Student Feedback",
      description:
        " We take pride in the feedback from students who appreciate the practicality and relevance of our content.",
      icon: "😊",
    },
    {
      title: "Industry Partnerships",
      description:
        "  We partner with industry leaders to give students access to the latest tools and tech.",
      icon: "⚡",
    },
  ];
  return (
    <>
      <div>
        <Title
          header="Achievements"
          subHeader="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
        />
      </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-14">
          {/* ACHIEVEMENTS CARD */}
          {data?.map((item, inx) => {
            return (
              <div
                key={inx}
                className="bg-white p-6 rounded-xl  flex flex-col gap-4"
              >
                <div className="border-[var(--color-bgPrimary)] border-[1px] bg-[var(--color-deepHover)] rounded-md p-2  w-fit">
                  {item?.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{item?.title}</h3>
                  <p className="text-gray-600 text-sm">{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
     
    </>
  );
};

export default Achievements;
