import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import { categories } from "../../../constants/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <SectionWrapper>
      <SectionHeading title={"Categories"} heading={"Browse By Categories"} />
      <section className="grid  grid-cols-2 xs:grid-cols-3 md:grid-cols-5 lg:grid-flow-col lg:gap-x-5 gap-y-7">
        {categories.map((category) => {
          return <CategoryCard key={category.route} {...category} />;
        })}
      </section>
    </SectionWrapper>
  );
};

export default Categories;
