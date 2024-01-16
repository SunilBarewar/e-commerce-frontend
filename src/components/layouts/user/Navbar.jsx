import { lazy, useState } from "react";
import Divider from "@/components/UI/Divider";
import { navItems } from "@/constants/constants";
import NavItem from "@/components/UI/NavItem";
import useCart from "@/hooks/useCart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CratIcon from "@/assets/cart.png";
import useAuth from "../../../hooks/useAuth";
import { MobileSidebar } from "../../home/herosection/SidebarCategories";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useAuthApi from "../../../hooks/api/useAuthApi";

const Navbar = () => {
  const { productCountInCart } = useCart();
  const { auth } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(false);
  };
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
        </ul>

        <div className="flex items-center justify-center gap-3">
          {!auth?.accessToken ? (
            // <NavItem title={"Sign in"} route={"/auth/signin"} />
            <Link to={"/auth/signin"} className="hover:text-primary">
              <Button colorScheme="whatsapp">Sign in</Button>
            </Link>
          ) : null}

          <div className="lg:hidden">
            <Button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              // py="3px"
              p="5px"
            >
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/25/menu--v1.png"
                alt="menu--v1"
              />
            </Button>
          </div>

          <Link to={"/cart"} className="relative mr-1 flex-shrink-0">
            <span className="absolute w-[20px] h-[20px] bg-red-500 text-white right-[-2px] top-[-8px] rounded-full  text-xs text-center grid place-content-center">
              {productCountInCart()}
            </span>

            <div>
              <img src={CratIcon} alt="cart-icon" />
            </div>
          </Link>

          {auth?.accessToken &&
            ["/", "/product", "/cart", "/products"].includes(
              location.pathname
            ) && <ProfileMenu />}
        </div>
      </nav>
      <Divider />

      {isSidebarOpen && <MobileSidebar toggleMenu={toggleSidebar} />}
    </div>
  );
};

const ProfileMenu = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthApi();
  const handleLogout = async () => {
    await logout();
    setAuth({});
    if (location.pathname === "/cart") {
      navigate("/");
    }
  };
  return (
    <Menu>
      <MenuButton as={"Button"}>
        <Avatar size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Navbar;
