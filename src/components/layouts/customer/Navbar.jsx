import React, { useState } from "react";
import Divider from "@/components/UI/Divider";
import { navItems } from "@/constants/constants";
import NavItem from "@/components/UI/NavItem";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <>
      <nav className="flex  justify-between items-center py-5">
        <h1 className="text-2xl font-bold tracking-wide">Exclusive</h1>
        <ul className="flex gap-5">
          {navItems.map((item) => (
            <NavItem
              key={item.route}
              {...item}
              isActive={activeNav === item.route}
              setActiveNav={setActiveNav}
            />
          ))}
        </ul>
        <div className="flex items-center justify-center gap-3">
          {/* <span>
          <img src="./image/search.png" alt="" />
        </span> */}
          <div className="relative mr-1">
            <span className="absolute w-[18px] h-[18px] bg-red-500 text-white right-0 top-[-5px] rounded-full  text-xs text-center">
              10
            </span>
            <img src="./image/cart.png" alt="" />
          </div>
        </div>
      </nav>
      <Divider />
    </>
  );
};

export default Navbar;
