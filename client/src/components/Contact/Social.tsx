import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Social = () => {
  return (
    <div className="lg:w-[30%] w-full p-8 xl:p-16">
      <div className="space-y-8">
        <div className="flex flex-col items-center bg-[var(--color-cards)] space-y-2 p-6 rounded-[8px]">
          <Mail className="bg-gray-200 p-1.5 w-8 h-8 rounded-[8px]" />
          <p className="text-[10px] font-light mt-1 text-center">
            kazimehedihasan@243gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center bg-[var(--color-cards)] space-y-2 p-6 rounded-[8px]">
          <Phone className="bg-gray-200 p-1.5 w-8 h-8 rounded-[8px]" />
          <p className="text-[10px] font-light mt-1 text-center">
            +91 00000 00000
          </p>
        </div>
        <div className="flex flex-col items-center bg-[var(--color-cards)] space-y-2 p-6 rounded-[8px]">
          <MapPin className="bg-gray-200 p-1.5 w-8 h-8 rounded-[8px]" />
          <p className="text-[10px] font-light mt-1 text-center">
            Some Where in the World
          </p>
        </div>
        <div className="flex flex-col items-center bg-[var(--color-cards)] space-y-2 p-6 rounded-[8px]">
          <div className="flex items-center space-x-3">
            <Facebook className="bg-gray-200 p-1.5 w-8 h-8 rounded-[8px]" />
            <Twitter className="bg-gray-200 p-1.5 w-8 h-8 rounded-[8px]" />
            <Linkedin className="bg-gray-200 p-1.5 w-8 h-8 rounded-[8px]" />
          </div>
          <p className="text-[10px] font-light mt-1 text-center">
            Social Profiles
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
