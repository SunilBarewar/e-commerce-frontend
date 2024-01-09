import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NotRequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth);
  return !auth?.accessToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default NotRequireAuth;
