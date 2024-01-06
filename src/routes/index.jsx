import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import UserLayout from "@/components/layouts/user";

import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <UserLayout />,
      children: [
        { path: "signin", element: <SigninPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
        { path: "verify", element: <VerifyPage /> },
      ],
    },
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "/", element: <HomePage />, index: true },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

//auth pages
const SigninPage = Loadable(lazy(() => import("../pages/auth/Signin")));
const SignupPage = Loadable(lazy(() => import("../pages/auth/Signup")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const VerifyPage = Loadable(lazy(() => import("../pages/auth/Verify")));
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);

// main pages

const HomePage = Loadable(lazy(() => import("../pages/Home")));
const AboutPage = Loadable(lazy(() => import("../pages/About")));
const CartPage = Loadable(lazy(() => import("../pages/Cart")));
const ContactPage = Loadable(lazy(() => import("../pages/Contact")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
