import SectionHeading from "../SectionHeading";
import SectionWrapper from "../SectionWrapper";
import Button from "../../UI/Button";
import FlashSalesSwiper from "./FlashSalesSwiper";

const FlashSales = () => {
  return (
    <SectionWrapper>
      <SectionHeading title={"Today's"} heading={"Flash sales"} />
      <FlashSalesSwiper />
      {/* <div className="flex justify-center mt-6">
        <Button title={"view all products"} />
      </div> */}
    </SectionWrapper>
  );
};

export default FlashSales;
