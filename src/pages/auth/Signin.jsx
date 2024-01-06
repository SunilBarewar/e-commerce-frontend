import { SigninForm, Banner, Heading } from "../../components/auth";
const Signin = () => {
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
