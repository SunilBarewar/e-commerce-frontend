import React from "react";
import HeroSection from "@/components/home/herosection/HeroSection";
import FlashSales from "@/components/home/flashSales/FlashSales";
import Categories from "@/components/home/categories/Categories";
import BestSellingProducts from "@/components/home/BestSellingProducts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSellingProducts />
    </>
  );
};

export default Home;
