import InputField from "../UI/InputField";
import Button from "../UI/Button";

const ContactForm = () => {
  return (
    <div className="flex-grow shadow rounded py-5 md:py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-rows-5 gap-4 ">
        <InputField
          placeholder="Your Name"
          required={true}
          className="h-[50px]"
        />
        <InputField placeholder="Your Email" className="h-[50px]" />
        <InputField placeholder="Your Phone" className="h-[50px]" />
        <textarea
          placeholder="Your Message"
          className="p-3 col-span-1 lg:col-span-3 row-span-4 bg-white-2 focus:outline-1 focus:outline-gray-300"
        />
      </div>

      <div className="mt-5 self-end ">
        <Button title={"Send Message"} />
      </div>
    </div>
  );
};
export default ContactForm;
