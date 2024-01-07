import Divider from "../UI/Divider";
import CallToUs from "./CallToUs";
import WriteToUs from "./WriteToUs";

const ContactInfo = () => {
  return (
    <div className="w-[340px] flex flex-col gap-4 py-5 md:py-8 px-4 md:px-6 shadow rounded flex-shrink-0">
      <CallToUs />
      <Divider />
      <WriteToUs />
    </div>
  );
};

export default ContactInfo;
