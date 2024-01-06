import useInput from "../../hooks/useInput";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const SigninForm = () => {
  const [email, resetEmail, emailAttr] = useInput("");
  const [password, resetPassword, passwordAttr] = useInput("");

  const handleLogin = () => {
    console.log("logged in ");
  };
  return (
    <form className="w-full justify-center flex-1 flex flex-col gap-8 mt-5">
      <InputField
        label={"Email"}
        placeholder="Enter your email"
        {...emailAttr}
      />
      <InputField
        label={"Password"}
        placeholder="Password"
        type="password"
        {...passwordAttr}
      />

      <div className="flex justify-between items-center">
        <Button title={"Sign in"} onClick={handleLogin} />
        <Link to={"/auth/reset-password"} className="text-red-600">
          Forget password?
        </Link>
      </div>

      <p>
        New user?{" "}
        <Link to={"/auth/signup"} className="text-primary">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
