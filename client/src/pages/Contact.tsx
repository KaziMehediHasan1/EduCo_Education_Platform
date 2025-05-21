import Form from "@/components/Contact/Form";
import Social from "@/components/Contact/Social";
import CommonHeader from "@/components/Shared/CommonHeader";
import Divider from "@/components/Shared/Divider";
import CommonWrapper from "@/wrapper/CommonWrapper";

const Contact = () => {
  return (
    <div>
      <CommonHeader
        title="Contact Us"
        subTitle="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <Divider />
      <CommonWrapper>
        <div className="w-full flex flex-col lg:flex-row justify-between  bg-white  rounded-[8px]">
          <Form />
          <div className="w-[1px] bg-[var(--color-cards)]" />
          <Social />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Contact;
