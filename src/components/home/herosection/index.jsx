import { sidebarCategories } from "@/constants/categories";
import SidebarCategories from "./SidebarCategories";
const HeroSection = () => {
  return (
    <div className="flex justify-center mt-5 lg:justify-between gap-7">
      <SidebarCategories />
      <Banner />
    </div>
  );
};

const Banner = () => {
  return (
    <div>
      <img src="./image/header.png" alt="" />
    </div>
  );
};

export default HeroSection;
