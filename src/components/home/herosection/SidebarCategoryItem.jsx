import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarCategoryItem = ({
  category,
  submenuOpen,
  handleMenuOpen,
  toggleMenu = () => {},
}) => {
  return (
    <li
      className="relative group cursor-pointer pr-10"
      onClick={() =>
        handleMenuOpen((prev) => {
          if (category.title === prev) return "";
          return category.title;
        })
      }
    >
      {!category.submenu && category.route ? (
        <Link to={`/products?category=${category.route}`}>
          <span className="hover:text-gray-600 h-6">{category.title}</span>
        </Link>
      ) : (
        <span className="hover:text-gray-600 h-6">{category.title}</span>
      )}
      {category.submenu && (
        <div
          className={`${
            submenuOpen === category.title && "-rotate-90"
          } absolute -right-5 lg:right-4 top-0 group-hover:transition-all duration-700`}
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/chevron-down.png"
            alt="chevron-down"
            className=""
          />
        </div>
      )}
      {category.submenu && (
        <ul
          className={`bg-white flex-col my-2 ${
            submenuOpen === category.title ? "flex transition-all" : "hidden"
          }`}
        >
          {category.sublinks?.map((link) => {
            return (
              <Link
                to={`/products?category=${link.route}`}
                onClick={() => toggleMenu()}
              >
                <li className="text-base capitalize ml-2 hover:text-primary rounded-md py-2 ">
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default SidebarCategoryItem;
