import Achievements from "@/components/about/Achievements";
import Banner from "@/components/about/Banner";
import Goals from "@/components/about/Goals";
import CommonHeader from "@/components/Shared/CommonHeader";
import Divider from "@/components/Shared/Divider";
import CommonWrapper from "@/wrapper/CommonWrapper";

const About = () => {
  return (
    <div>
      <CommonWrapper>
        {/* HEADER TEXT SECTION */}
        <CommonHeader
          title="About Skillbridge"
          subTitle="Welcome to our platform, where we are passionate about empowering
            individuals to master the world of design and development. We offer
            a wide range of online courses designed to equip learners with the
            skills and knowledge needed to succeed in the ever-evolving digital
            landscape."
        />
      </CommonWrapper>
      {/* DIVIDER */}
      <Divider />
      <CommonWrapper>
        <Achievements />
        <Goals />
        <Banner />
      </CommonWrapper>
    </div>
  );
};

export default About;
