import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <div className="px-[10px] lg:px-[80px] font-Inter flex flex-col min-h-[100vh]">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
