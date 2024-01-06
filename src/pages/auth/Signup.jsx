import { SignupForm, Banner, Heading } from "../../components/auth";
const Signup = () => {
  return (
    <div className="flex mt-10 gap-8 items-center justify-center">
      <Banner />
      <div className="max-w-[370px] w-full flex flex-col">
        <Heading
          heading={"Create an account"}
          subheading={"Enter your details below"}
        />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
