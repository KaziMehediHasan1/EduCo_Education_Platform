import Adobe from "@/assets/logo/Adobe.png";
import Amazon from "@/assets/logo/Amazon.png";
import Netflix from "@/assets/logo/Netflix.png";
import Notion from "@/assets/logo/Notion.png";
import Spotify from "@/assets/logo/Spotify.png";
import Zapier from "@/assets/logo/Zapier.png";
import Zoom from "@/assets/logo/Zoom.png";
import CommonWrapper from "@/wrapper/CommonWrapper";
import { motion } from "framer-motion";

const logos = [Adobe, Amazon, Netflix, Notion, Spotify, Zapier, Zoom];

const Partner = () => {
  return (
    <CommonWrapper>
      <div className="mt-[80px] overflow-hidden w-full h-auto rounded-[8px]">
        <div className="flex items-center gap-3 bg-white">
          <motion.div
            className="flex items-center gap-[40px] py-5"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index}`}
                className="p-1 md:p-[25px] max-w-14 md:max-w-36 flex-shrink-0"
              />
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-[40px] py-5"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index}`}
                className="p-1 md:p-[25px] max-w-14 md:max-w-36 flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Partner;
