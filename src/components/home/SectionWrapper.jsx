import Divider from "@/components/UI/Divider";
const SectionWrapper = ({ children }) => {
  return (
    <>
      <div className="mt-4 mb-2 md:mt-10 md:mb-8 overflow-hidden relative">
        {children}
      </div>
      <Divider />
    </>
  );
};

export default SectionWrapper;
