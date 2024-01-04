import { flashSalesProducts } from "@/constants/products";
import ProductCard from "@/components/productCard/ProductCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { productSwiperBreakpoints } from "../../../constants/breakpoints";

const FlashSalesSwiper = () => {
  return (
    <Swiper
      modules={[Navigation]}
      // slidesPerView={4}
      breakpoints={productSwiperBreakpoints}
    >
      {flashSalesProducts.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        );
      })}

      <NavBtn />
    </Swiper>
  );
};

const NavBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute top-5 right-0 z-30 ">
      <button
        className="bg-primary p-2 rounded-full"
        onClick={() => swiper.slidePrev()}
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-rounded/24/chevron-left.png"
          alt="chevron-left"
        />
      </button>
      <button
        className="bg-primary p-2 rounded-full ml-5"
        onClick={() => swiper.slideNext()}
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-sharp/24/chevron-right.png"
          alt="chevron-right"
        />
      </button>
    </div>
  );
};

export default FlashSalesSwiper;
