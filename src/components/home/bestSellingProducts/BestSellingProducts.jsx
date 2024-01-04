import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import Button from "../../UI/Button";
import BestSellingProductsSwiper from "./BestSellingProductsSwiper";

const BestSellingProducts = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-end">
        <SectionHeading
          title={"This month"}
          heading={"Best Selling Products"}
        />
        <div className="mb-8 flex flex-shrink-0">
          <Button title={"View all"} />
        </div>
      </div>

      <BestSellingProductsSwiper />
    </SectionWrapper>
  );
};

export default BestSellingProducts;
