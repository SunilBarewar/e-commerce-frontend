import { sidebarCategories } from "@/constants/categories";
import SidebarCategories from "./SidebarCategories";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex justify-center mt-5 lg:justify-between gap-7 overflow-hidden">
      <div className="hidden max-h-[345px] h-full flex-grow overflow-hidden lg:block">
        <SidebarCategories />
      </div>
      <Banner />
    </div>
  );
};

const Banner = () => {
  return (
    <Link to={`/product/659fbca5c4a0f9b460970ee8`}>
      <img src="./image/header.png" alt="iphone" />
    </Link>
  );
};

export default HeroSection;
