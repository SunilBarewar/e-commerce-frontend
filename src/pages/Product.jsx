import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ReactStars from "react-stars";
import ItemQuantity from "../components/cart/ItemQuantity";
import Button from "../components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import useProductsApi from "../hooks/api/useProductsApi";
import useCart from "../hooks/useCart";
import calculateDiscountedPrice from "../utils/calculateDiscountedPrice";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const { getProduct } = useProductsApi();
  const navigate = useNavigate();
  useEffect(() => {
    if (!params.id || params.id === "undefined") {
      navigate("/404");
    }
    const fetchProductDetails = async () => {
      try {
        const response = await getProduct(params.id);
        setProduct(response.data.product);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (params.id) fetchProductDetails();
  }, [params]);
  return (
    <div className=" flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-normal  mt-12 gap-7 lg:gap-[140px] mb-14">
      {product && <ProductImagesSwiper productImages={product.images} />}
      {product && <ProductInfo product={product} />}
    </div>
  );
};

const ProductImagesSwiper = ({ productImages }) => {
  return (
    <div className=" w-[100%] xs:w-[80%] lg:w-[500px] relative flex items-center rounded-xl py-10 px-10 shadow">
      <Swiper modules={[Navigation]} className="imageSlider">
        {productImages?.map((imageUrl) => {
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
const ProductInfo = ({ product }) => {
  const { addToCart } = useCart();
  const handleAddtoCart = () => {
    console.log("adding to cart");
    addToCart(product);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{product.title}</h1>
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
        <h3 className="text-xl font-bold">
          ${calculateDiscountedPrice(product)}
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-xl">Description</h2>
        {/* <ul className="flex flex-col gap-3">
          {product?.description?.split(".").map((str) => {
            return <li key={Math.random()}>&#9733; {str}</li>;
          })}
        </ul> */}
        <p>{product.description}</p>
      </div>

      <div className="flex gap-5  flex-wrap">
        <div className="w-[140px]">
          <ItemQuantity quantity={1} onClick={() => {}} />
        </div>
        <Button title={"Buy Now"} />
        <AddToCartButton onClick={handleAddtoCart} />
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
