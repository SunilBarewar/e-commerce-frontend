import Divider from "@/components/UI/Divider";
import { navItems } from "@/constants/constants";
import NavItem from "@/components/UI/NavItem";
import useCart from "@/hooks/useCart";
import { Link } from "react-router-dom";
import CratIcon from "@/assets/cart.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { productCountInCart } = useCart();
  const { auth } = useAuth();
  return (
    <div className="sticky top-0 w-full z-50">
      <nav className="flex justify-between items-center py-5 bg-white ">
        <Link to={"/"} className="text-2xl font-bold tracking-wide">
          Exclusive
        </Link>
        <ul className="hidden sm:flex gap-5">
          {navItems.map((item) => (
            <NavItem key={item.route} {...item} />
          ))}

          {!auth?.accessToken ? (
            <NavItem title={"Sign in"} route={"/auth/signin"} />
          ) : null}
        </ul>
        <div className="flex items-center justify-center gap-3">
          {/* <span>
          <img src="./image/search.png" alt="" />
        </span> */}
          <Link to={"/cart"} replace className="relative mr-1 flex-shrink-0">
            <span className="absolute w-[20px] h-[20px] bg-red-500 text-white right-[-2px] top-[-8px] rounded-full  text-xs text-center grid place-content-center">
              {productCountInCart()}
            </span>
            <div>
              <img src={CratIcon} alt="cart-icon" />
            </div>
          </Link>
        </div>
      </nav>
      <Divider />
    </div>
  );
};

export default Navbar;
