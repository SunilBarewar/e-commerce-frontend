import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ReactStars from "react-stars";
import ItemQuantity from "../components/cart/ItemQuantity";
import Button from "../components/UI/Button";

const product = {
  _id: "659c2f35e4bdf05664e4d429",
  name: "APPLE iPhone 14 Pro (Silver, 1 TB)",
  desc: "1 TB ROM#15.49 cm (6.1 inch)#Super Retina XDR Display#48MP + 12MP + 12MP | 12MP Front Camera#A16 Bionic Chip, 6 Core Processor Processor",
  price: 169900,
  stock: 56,
  rating: 4.5,
  category: "phones",
  discount: 5,
  thumbnail:
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/l/p/-original-imaghxemc3wtcuhb.jpeg?q=70",
  images: [
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/p/d/-original-imaghxemhgfzjgja.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/m/l/-original-imaghxejxzzzkqr7.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/r/e/-original-imaghxeeme2n7hy7.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/p/6/-original-imaghxem3utgrtyg.jpeg?q=70",
  ],
  __v: 0,
};

const Product = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center mt-12 gap-7 mb-14">
      <ProductImagesSwiper productImages={product.images} />
      <ProductInfo />
    </div>
  );
};

const ProductImagesSwiper = ({ productImages }) => {
  return (
    <div className=" w-[100%] xs:w-[80%] lg:w-[50%] relative flex items-center rounded-xl py-10 px-10 shadow">
      <Swiper modules={[Navigation]} className="imageSlider">
        {productImages.map((imageUrl) => {
          return (
            <SwiperSlide>
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
      className={`hidden md:block p-2 rounded-full absolute left-2 top-[50%] z-10 ${
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
      className={`hidden md:block p-2 rounded-full ml-5 absolute right-2 top-[50%] z-10 ${
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
    <div className="w-[90%] h-auto overflow-hidden rounded grid place-content-center">
      <img src={imageUrl} alt="" srcset="" />
    </div>
  );
};
const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <div className="flex gap-5 items-center">
          <ReactStars
            count={5}
            onChange={() => {}}
            value={product.rating}
            edit={false}
            size={20}
            color2={"#ffd700"}
          />
          <span className={`${product.stock ? "text-green" : "text-red-600"}`}>
            {product.stock ? "In Stock" : "out of stock"}
          </span>
        </div>
        <h3 className="text-xl font-bold">&#x20B9; {product.price}</h3>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-xl">Description</h2>
        <ul className="flex flex-col gap-3">
          {product.desc.split("#").map((str) => {
            return <li key={Math.random()}>&#9733; {str}</li>;
          })}
        </ul>
      </div>

      <div className="flex gap-5 justify-between flex-wrap">
        <div className="w-[140px]">
          <ItemQuantity quantity={1} onClick={() => {}} />
        </div>
        <Button title={"Buy Now"} />
        <AddToCartButton />
      </div>
    </div>
  );
};

const AddToCartButton = ({ onClick }) => {
  return (
    <button
      className="top-2 right-3 py-2 px-4 rounded grid place-content-center bg-green shadow-lg"
      title="add to cart"
      onClick={onClick}
    >
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-rounded/24/add-shopping-cart.png"
        alt="add-shopping-cart"
      />
    </button>
  );
};
export default Product;
