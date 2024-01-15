import React, { useCallback, useEffect, useState } from "react";
import { sidebarCategories } from "@/constants/categories";
import SidebarCategoryItem from "./SidebarCategoryItem";
import { createPortal } from "react-dom";
const SidebarCategories = () => {
  const [submenuOpen, setSubmenuOpen] = useState("");
  const handleMenuOpen = (title) => {
    setSubmenuOpen(title);
  };
  return (
    <ul className="w-[250px] h-[100%] lg:flex flex-col lg:flex-grow justify-around gap-5 flex-shrink-0 pr-5 overflow-y-auto bg-white">
      {sidebarCategories.map((category) => (
        <SidebarCategoryItem
          key={category.route}
          submenuOpen={submenuOpen}
          handleMenuOpen={handleMenuOpen}
          category={category}
        />
      ))}
    </ul>
  );
};

export const MobileSidebar = ({ toggleMenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState("");
  const handleMenuOpen = (title) => {
    setSubmenuOpen(title);
  };
  const Comp = () => {
    useEffect(() => {
      document.querySelector("body").style.overflow = "hidden";

      return () => {
        document.querySelector("body").style.overflow = "auto";
      };
    }, []);
    return (
      <div className="w-full xs:w-[350px] fixed min-h-screen top-0 right-0 lg:hidden bg-white px-4 overflow-auto">
        <img
          onClick={() => toggleMenu()}
          width="35"
          height="35"
          src="https://img.icons8.com/color/48/delete-sign--v1.png"
          alt="delete-sign--v1"
          className="absolute cursor-pointer right-2 top-3 z-20"
        />
        <ul className="w-full md:w-[350px] h-[200vh] mt-8  flex flex-col gap-8 flex-shrink-0  bg-white py-6 px-5 font-Inter relative overflow-y-auto">
          {sidebarCategories.map((category) => (
            <SidebarCategoryItem
              key={category.title}
              submenuOpen={submenuOpen}
              handleMenuOpen={handleMenuOpen}
              category={category}
              toggleMenu={toggleMenu}
            />
          ))}
        </ul>
      </div>
    );
  };
  return <>{createPortal(<Comp />, document.getElementById("mobile-nav"))}</>;
};
export default SidebarCategories;
