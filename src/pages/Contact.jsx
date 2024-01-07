import { ContactForm, ContactInfo } from "../components/contact";
const Contact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-between lg:flex-nowrap mt-12 gap-7">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
