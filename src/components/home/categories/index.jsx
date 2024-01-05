import React from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import { categories } from "../../../constants/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <SectionWrapper>
      <SectionHeading title={"Categories"} heading={"Browse By Categories"} />
      <section className="flex flex-wrap gap-7">
        {categories.map((category) => {
          return <CategoryCard key={category.route} {...category} />;
        })}
      </section>
    </SectionWrapper>
  );
};

export default Categories;
