import PhoneIcon from "../../assets/icon-phone.png";
import Heading from "./Heading";

const CallToUs = () => {
  return (
    <div className="flex flex-col gap-4 mb-3">
      <Heading icon={PhoneIcon} title={"Call to Us"} />
      <p>We are available 24/7, 7 days a week.</p>
      <p>Phone: +8801611112222</p>
    </div>
  );
};

export default CallToUs;
