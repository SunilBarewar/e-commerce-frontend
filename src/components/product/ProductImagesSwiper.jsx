import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const ProductImagesSwiper = ({ productImages }) => {
  return (
    <div className=" w-[100%] xs:w-[80%] lg:w-[500px] relative flex items-center rounded-xl py-10 px-10 shadow">
      <Swiper modules={[Navigation]} className="imageSlider">
        {productImages?.map((imageUrl) => {
          return (
            <SwiperSlide key={imageUrl}>
              <ProductSliderImage key={imageUrl} imageUrl={imageUrl} />
            </SwiperSlide>
          );
        })}
        <NavBtnPrev />
        <NavBtnNext />
      </Swiper>
    </div>
  );
};
const NavBtnPrev = () => {
  const swiper = useSwiper();
  const [isLast, setIsLast] = useState(false);
  return (
    <button
      className={`hidden md:block p-2 rounded-full absolute -left-2 top-[50%] z-10 ${
        !isLast ? "bg-red-400" : "bg-primary"
      }`}
      onClick={() => setIsLast(swiper.slidePrev())}
    >
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-rounded/24/chevron-left.png"
        alt="chevron-left"
      />
    </button>
  );
};

const NavBtnNext = () => {
  const swiper = useSwiper();
  const [isLast, setIsLast] = useState(false);
  return (
    <button
      className={`hidden md:block p-2 rounded-full ml-5 absolute -right-2 top-[50%] z-10 ${
        !isLast ? "bg-red-400" : "bg-primary"
      }`}
      onClick={() => {
        setIsLast(swiper.slideNext());
      }}
    >
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-sharp/24/chevron-right.png"
        alt="chevron-right"
      />
    </button>
  );
};
const ProductSliderImage = ({ imageUrl }) => {
  return (
    <div className="w-[100%] h-auto max-h-[450px] overflow-hidden rounded grid place-content-center aspect-square">
      <img src={imageUrl} alt="" className="w-100% object-contain" />
    </div>
  );
};
export default ProductImagesSwiper;
