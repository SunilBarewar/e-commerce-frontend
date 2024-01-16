import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useAuth from "../../../hooks/useAuth";
import useRefreshToken from "../../../hooks/useRefreshToken";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

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
      <ApiAlert />
      <div className="px-[12px] md:px-4 lg:px-[80px] font-Inter flex flex-col min-h-[100vh]  overflow-hidden">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ApiAlert = () => {
  const [alertVisible, setAlertVisibile] = useState(
    JSON.parse(sessionStorage.getItem("alert"))
  );

  const handleAlertVisibility = () => {
    setAlertVisibile("true");
    sessionStorage.setItem("alert", "true");
  };
  return (
    <>
      {!alertVisible && (
        <Alert status="error" style={{ position: "relative", zIndex: 10000 }}>
          <AlertIcon />
          <AlertTitle>
            Initially API could take 60-90 seconds to Response.
          </AlertTitle>
          <AlertDescription>it's hosted on Render free plan</AlertDescription>
          <CloseButton
            style={{ position: "absolute", right: "1rem" }}
            onClick={handleAlertVisibility}
          />
        </Alert>
      )}
    </>
  );
};
export default Layout;
