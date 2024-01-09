import useInput from "../../hooks/useInput";
import Button from "../UI/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAuthApi from "../../hooks/api/useAuthApi";

const SignupForm = () => {
  const [name, nameAttr] = useInput("");
  const [email, emailAttr, resetEmail] = useInput("");
  const [password, passwordAttr, resetPwd] = useInput("");
  const [errMsg, setErrMsg] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { signup } = useAuthApi();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setErrMsg("name or password can't be empty");
      return;
    }
    if (!password || password.length < 6) {
      setErrMsg("password should have atleast 6 characters");
      return;
    }
    const formData = { email, password, name };
    try {
      const response = await signup(formData);
      setAuth({ accessToken: response.data?.accessToken });

      resetEmail();
      resetPwd();
      navigate(from, { replace: true });
      // console.log(response);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status < 500) {
        setErrMsg("email or password may be wrong");
      } else {
        setErrMsg("Failed to signup");
      }
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

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
      {errMsg && (
        <p className="text-red-600 text-sm" aria-live="assertive">
          *{errMsg}
        </p>
      )}
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
