interface ITitle {
  header: string;
  subHeader: string;
  button?: string;
  eventHandler?: () => void;
}

const Title = ({ header, subHeader, button, eventHandler }: ITitle) => {
  return (
    <div className="space-y-[4px] my-8">
      <h1 className="text-[var(--color-textColor)] text-xl sm:text-3xl leading-[150%] font-semibold">
        {header}
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between ">
        <p className="text-[10px] sm:text-sm leading-[150%] max-w-full sm:max-w-[66%] text-[var(--color-textSec)]">
          {subHeader}
        </p>
        {button && (
          <button
            onClick={eventHandler}
            className="bg-white py-[8px] px-[15px] rounded-[8px] text-xs sm:text-sm cursor-pointer hover:bg-[var(--color-bgPrimary)] duration-200 transform translate hover:text-white w-fit"
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
};

export default Title;
