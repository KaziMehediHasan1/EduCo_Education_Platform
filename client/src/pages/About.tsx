import Achievements from "@/components/about/Achievements";
import Goals from "@/components/about/Goals";
import CommonWrapper from "@/wrapper/CommonWrapper";

const About = () => {
  return (
    <div>
      <CommonWrapper>
        {/* HEADER TEXT SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-stretch space-y-3">
          <h1 className="text-[20px] sm:text-[35px] font-semibold leading-[150%] inline-block">
            About Skillbridge
          </h1>
          <p className="text-xs sm:text-[14px] leading-[150%] text-[var(--color-smallText)]">
            Welcome to our platform, where we are passionate about empowering
            individuals to master the world of design and development. We offer
            a wide range of online courses designed to equip learners with the
            skills and knowledge needed to succeed in the ever-evolving digital
            landscape.
          </p>
        </div>
      </CommonWrapper>
      {/* DIVIDER */}
      <div className="max-w-[95%] mx-auto h-[1px] bg-[var(--color-underline)]" />
      <CommonWrapper>
        {/* ACHIEVEMENTS SECTION */}
        <Achievements />
        {/* GOAL SECTION */}
        <Goals />
        
      </CommonWrapper>
    </div>
  );
};

export default About;
