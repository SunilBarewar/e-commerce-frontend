import useInput from "../../hooks/useInput";
import Button from "../UI/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import { useEffect, useRef, useState } from "react";
import useAuthApi from "../../hooks/api/useAuthApi";
import useAuth from "../../hooks/useAuth";

const SigninForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, emailAttr, resetEmail] = useInput("");
  const [password, passwordAttr, resetPwd] = useInput("");
  const [errMsg, setErrMsg] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuthApi();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      setErrMsg("email or password can't be empty");
      return;
    }
    const formData = { email, password };
    try {
      const response = await login(formData);
      setAuth({ accessToken: response.data?.accessToken });
      // localStorage.setItem("token", response.data?.accessToken);
      resetEmail();
      resetPwd();
      navigate(from, { replace: true });
      // console.log(response);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status < 500) {
        console.log(err)
        setErrMsg("email or password may be wrong");
      } else {
        setErrMsg("Failed to login");
      }

      errRef.current.focus();
    }
  };

  useEffect(() => {
    userRef.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  return (
    <form className="w-full justify-center flex-1 flex flex-col gap-8 mt-5">
      <InputField
        label={"Email"}
        placeholder="Enter your email"
        {...emailAttr}
        autoComplete="off"
      />
      <InputField
        label={"Password"}
        placeholder="Password"
        type="password"
        {...passwordAttr}
        autoComplete="off"
      />
      {errMsg && (
        <p ref={errRef} className="text-red-600 text-sm" aria-live="assertive">
          *{errMsg}
        </p>
      )}

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
