import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useAuth from "../../../hooks/useAuth";
import useRefreshToken from "../../../hooks/useRefreshToken";
const Layout = () => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      }
    };

    !auth?.accessToken && verifyRefreshToken();
  }, []);
  return (
    <>
      <div className="px-[12px] md:px-4 lg:px-[80px] font-Inter flex flex-col min-h-[100vh]">
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
