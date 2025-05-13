import Benefits from "@/components/home/Benefits";
import Course from "@/components/home/Course";
import Faq from "@/components/home/Faq";
import Header from "@/components/home/Header";
import Partner from "@/components/home/Partner";
import Pricing from "@/components/home/Pricing";
import Testimonial from "@/components/home/Testimonial";
import Video from "@/components/home/Video";
import CommonWrapper from "@/wrapper/CommonWrapper";

const App = () => {
  return (
    <div>
      <CommonWrapper>
        <Header />
        <Partner />
        <Video />
        <Benefits />
        <Course />
        <Testimonial />
        <Pricing />
        <Faq />
      </CommonWrapper>
    </div>
  );
};

export default App;
