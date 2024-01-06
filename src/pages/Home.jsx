import {
  HeroSection,
  FlashSales,
  Categories,
  BestSellingProducts,
  TrendingProduct,
  FeaturedProducts,
} from "../components/home";
import Services from "../components/about/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <TrendingProduct />
      <FeaturedProducts />
      <Services />
    </>
  );
};

export default Home;
