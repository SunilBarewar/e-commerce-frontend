import React from "react";
import HeroSection from "../components/home/herosection/HeroSection";
import FlashSales from "../components/home/flashSales/FlashSales";
import Categories from "../components/home/categories/Categories";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <Categories />
    </>
  );
};

export default Home;
