import { Link } from "react-router-dom";

const NavItem = ({ title, route, isActive, setActiveNav }) => {
  return (
    <li
      className={`text-base p-1 ${
        isActive ? "activeNav" : ""
      } hover:text-gray-700`}
      onClick={() => setActiveNav(route)}
    >
      <Link to={route}>{title}</Link>
    </li>
  );
};

export default NavItem;
