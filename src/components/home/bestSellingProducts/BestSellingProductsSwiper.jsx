import { bestSellingProducts } from "@/constants/products";
import ProductCard from "@/components/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { productSwiperBreakpoints } from "@/constants/breakpoints";

const BestSellingProductsSwiper = () => {
  return (
    <Swiper
      // slidesPerView={4}
      modules={[Pagination]}
      breakpoints={productSwiperBreakpoints}
    >
      {bestSellingProducts.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BestSellingProductsSwiper;
