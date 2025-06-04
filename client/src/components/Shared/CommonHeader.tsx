import CommonWrapper from "@/wrapper/CommonWrapper";

const CommonHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <CommonWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-stretch space-y-3 mt-10">
          <h1 className="text-[20px] sm:text-[35px] font-semibold leading-[150%] inline-block">
            {title}
          </h1>
          <p className="text-xs sm:text-[14px] leading-[150%] text-[var(--color-smallText)]">
           {subTitle}
          </p>
        </div>
      </CommonWrapper>
    </>
  );
};

export default CommonHeader;
