import Title from "@/components/shared/Title";
import imag1 from "@/assets/Image/Image (1).png";
import imag2 from "@/assets/Image/Image (2).png";
import imag3 from "@/assets/Image/Image (3).png";
import CommonWrapper from "@/wrapper/CommonWrapper";

const Course = () => {
  return (
    <div>
      <div>
        <CommonWrapper>
          {/* HEADER TEXT SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-self-stretch space-y-3">
            <h1 className="text-[20px] sm:text-[35px] font-semibold leading-[150%] inline-block">
              Online Courses on Design and Development
            </h1>
            <p className="text-xs sm:text-[14px] leading-[150%] text-[var(--color-smallText)]">
              Welcome to our online course page, where you can enhance your
              skills in design and development. Choose from our carefully
              curated selection of 10 courses designed to provide you with
              comprehensive knowledge and practical experience. Explore the
              courses below and find the perfect fit for your learning journey.
            </p>
          </div>
        </CommonWrapper>
        <div className="max-w-[95%] mx-auto h-[1px] bg-[var(--color-underline)]" />
        {/* COURSE SECTION */}
        <CommonWrapper>
          <div className="bg-white p-4 sm:p-6 rounded-[8px]">
            {/* FIRST COURSE */}
            <div>
              <Title
                header="Web Design Fundamentals"
                subHeader="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                button="View Course"
              />
              {/* IMAGES */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                  <img src={imag1} alt="image" className=" h-fit" />
                  <img src={imag2} alt="image" className=" h-fit" />
                  <img src={imag3} alt="image" className=" h-fit" />
                </div>
                {/* COURSE DETAILS */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <p className="border border-[var(--color-underline)] py-1.5 sm:py-2 px-3 sm:px-5 rounded-[8px]">
                      4 Weeks
                    </p>
                    <p className="border border-[var(--color-underline)] py-1.5 sm:py-2 px-3 sm:px-5 rounded-[8px]">
                      Beginner
                    </p>
                  </div>

                  <h1>Kazi Mehedi Hasan</h1>
                </div>
              </div>

              {/* CURRICULUM */}
              <div className="border border-[var(--color-cards)] rounded-[var(--radius-main)] mt-[35px] p-2 sm:p-4">
                <h1 className="text-sm sm:text-[16px] leading-[150%] font-semibold text-[var(--color-textColor)] p-3 sm:p-0">
                  Curriculum
                </h1>

                {/* DIVIDER */}
                <div className="max-w-full mx-auto h-[1px] my-2 bg-[var(--color-underline)]" />

                {/* COURSE OUTLINE */}
                <div className="flex flex-wrap gap-y-5 flex-col sm:flex-row sm:items-center justify-between w-full p-3">
                  <div >
                    <h1 className="text-2xl sm:text-4xl leading-[150%] font-extrabold text-[var(--color-textColor)]">
                      01
                    </h1>
                    <p className="text-[12px] sm:text-[14px] leading-[150%] text-[var(--color-textColor)] font-medium">
                      Introduction to HTML
                    </p>
                  </div>
                  <div >
                    <h1 className="text-2xl sm:text-4xl leading-[150%] font-extrabold text-[var(--color-textColor)]">
                      02
                    </h1>
                    <p className="text-[12px] sm:text-[14px] leading-[150%] text-[var(--color-textColor)] font-medium">
                      Introduction to HTML
                    </p>
                  </div>
                  <div >
                    <h1 className="text-2xl sm:text-4xl leading-[150%] font-extrabold text-[var(--color-textColor)]">
                      03
                    </h1>
                    <p className="text-[12px] sm:text-[14px] leading-[150%] text-[var(--color-textColor)] font-medium">
                      Introduction to HTML
                    </p>
                  </div>
                  <div >
                    <h1 className="text-2xl sm:text-4xl leading-[150%] font-extrabold text-[var(--color-textColor)]">
                      04
                    </h1>
                    <p className="text-[12px] sm:text-[14px] leading-[150%] text-[var(--color-textColor)] font-medium">
                      Introduction to HTML
                    </p>
                  </div>
                  <div >
                    <h1 className="text-2xl sm:text-4xl leading-[150%] font-extrabold text-[var(--color-textColor)]">
                      05
                    </h1>
                    <p className="text-[12px] sm:text-[14px] leading-[150%] text-[var(--color-textColor)] font-medium">
                      Introduction to HTML
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND COURSE */}
            <div></div>
            {/* THIRD COURSE */}
            <div></div>
            {/* FOURTH COURSE */}
            <div></div>
            {/* FIFTH COURSE */}
            <div></div>
          </div>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default Course;
