import { Link, useLocation } from "react-router-dom";

const NavItem = ({ title, route }) => {
  const location = useLocation();

  return (
    <li
      className={`text-base p-1 ${
        location.pathname === route ? "activeNav" : ""
      } hover:text-gray-700 list-none`}
    >
      <Link to={route}>{title}</Link>
    </li>
  );
};

export default NavItem;
