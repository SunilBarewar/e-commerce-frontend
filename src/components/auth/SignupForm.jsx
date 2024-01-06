import useInput from "../../hooks/useInput";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const SignupForm = () => {
  const [name, nameAttr] = useInput("");
  const [email, emailAttr] = useInput("");
  const [password, passwordAttr] = useInput("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signed up ");
  };
  return (
    <form className="w-full justify-center flex-1 flex flex-col gap-8 mt-5">
      <InputField
        label={"Name"}
        placeholder="Enter your name"
        type="text"
        {...nameAttr}
      />
      <InputField
        label={"Email"}
        type="email"
        placeholder="Enter your email"
        {...emailAttr}
      />
      <InputField
        label={"Password"}
        placeholder="Password"
        type="password"
        {...passwordAttr}
      />

      <Button title={"Sign up"} onClick={handleSignup} />

      <p>
        Already have an account?{" "}
        <Link to={"/auth/signin"} className="text-primary">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
