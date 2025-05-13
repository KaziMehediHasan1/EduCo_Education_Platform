import LoginForm from "@/components/auth/LoginForm";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CommonWrapper from "@/wrapper/CommonWrapper";

const Login = () => {
  return (
    <div>
      <CommonWrapper>
        <div className="flex flex-col lg:flex-row items-center gap-[15px] sm:gap-[35px]">
          {/* TESTIMONIAL */}
          <TestimonialCard />
          {/* FORM SECTION */}
          <LoginForm />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Login;
