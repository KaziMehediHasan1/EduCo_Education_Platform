import { CommonWrapperType } from "./wrapper.types";

const CommonWrapper = ({ children }: CommonWrapperType) => {
  return <div className="max-w-[1280px] mx-auto p-5">{children}</div>;
};

export default CommonWrapper;
