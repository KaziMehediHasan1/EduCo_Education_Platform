import RegisterForm from "@/components/auth/RegisterForm";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CommonWrapper from "@/wrapper/CommonWrapper";

const Register = () => {
  return (
    <div>
      <CommonWrapper>
        <div className="flex flex-col lg:flex-row items-center gap-[15px] sm:gap-[35px]">
          {/* TESTIMONIAL */}
          <TestimonialCard />
          {/* FORM SECTION */}
          <RegisterForm />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Register;
