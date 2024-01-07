import Heading from "./Heading";
import MailIcon from "../../assets/icon-mail.png";

const WriteToUs = () => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <Heading title={"Write to Us"} icon={MailIcon} />

      <p>
        Write To US Fill out our form and we will contact you within 24 hours.
      </p>
      <p>Email: customer@exclusive.com</p>
      <p>Email: support@exclusive.com</p>
    </div>
  );
};

export default WriteToUs;
