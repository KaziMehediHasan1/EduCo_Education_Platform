import Video1 from "@/assets/Image/Container.png";
import CommonWrapper from "@/wrapper/CommonWrapper";

const Video = () => {
  return (
    <div className="md:mt-[50px] mt-14">
      <CommonWrapper>
        <img src={Video1} alt="video" />
      </CommonWrapper>
    </div>
  );
};

export default Video;
