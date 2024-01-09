import { useEffect, useLayoutEffect } from "react";
import { SigninForm, Banner, Heading } from "../../components/auth";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  // const { auth } = useAuth();
  // const navigate = useNavigate();
  // useLayoutEffect(() => {
  //   console.log(auth);

  //   navigate("/", { replace: true });
  // }, []);
  return (
    <div className="flex mt-10 gap-8 items-center justify-center">
      <Banner />
      <div className="max-w-[370px] w-full flex flex-col">
        <Heading
          heading={"Login to Exclusive"}
          subheading={"Enter your details below"}
        />
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
