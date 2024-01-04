import React from "react";
import { sidebarCategories } from "@/constants/categories";
import SidebarCategoryItem from "./SidebarCategoryItem";
const SidebarCategories = () => {
  return (
    <ul className="hidden lg:flex flex-col justify-around flex-grow flex-shrink-0 border-r border-gray-300 pr-2">
      {sidebarCategories.map((category) => (
        <SidebarCategoryItem key={category.route} {...category} />
      ))}
    </ul>
  );
};

export default SidebarCategories;
