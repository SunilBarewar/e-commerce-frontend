import React from "react";
import calculateDiscountedPrice from "../../utils/calculateDiscountedPrice";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import ItemQuantity from "../cart/ItemQuantity";
import { useState } from "react";
import ReactStars from "react-stars";
import useAuth from "../../hooks/useAuth";
import { useToast } from "@chakra-ui/react";
import {
  productBuynowToast,
  productCartLoginToast,
} from "../../constants/toastOptions";

const ProductInfo = ({ product }) => {
  const { addToCart, cart } = useCart();
  const { auth } = useAuth();
  const toast = useToast();
  const handleAddtoCart = () => {
    if (!auth?.accessToken) {
      toast(productCartLoginToast);
      return;
    }

    addToCart(product);
  };
  const [qnt, setQnt] = useState(1);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (!auth?.accessToken) {
      toast(productBuynowToast);
      return;
    }

    const item = {
      _id: product._id,
      title: product.title,
      price: product.price,
      quantity: qnt,
      total: calculateDiscountedPrice(product),
      discountPercentage: product.discountPercentage,
      discountedPrice: calculateDiscountedPrice(product),
      thumbnail: product.thumbnail,
    };
    navigate("/payment", { state: { products: [item], from: "product" } });
  };
  const changeQuantity = (val) => {
    setQnt((prev) => prev + val);
  };
  const isProductInCart = cart?.some((p) => {
    return p._id === product._id;
  });
  const handleGotoCart = () => {
    navigate("/cart");
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
        <p>{product.description}</p>
      </div>

      <div className="flex gap-5  flex-wrap">
        <div className="w-[140px]">
          <ItemQuantity quantity={qnt} onClick={changeQuantity} />
        </div>
        <Button title={"Buy Now"} onClick={handleBuyNow} />
        {isProductInCart && (
          <PButton onClick={handleGotoCart} title={"already in your cart"}>
            Go to Cart
          </PButton>
        )}
        {!isProductInCart && (
          <PButton onClick={handleAddtoCart} title={"add to cart"}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/add-shopping-cart.png"
              alt="add-shopping-cart"
            />
          </PButton>
        )}
      </div>
    </div>
  );
};

const PButton = ({ children, onClick, title }) => {
  return (
    <button
      className="py-2 px-4 rounded grid place-content-center bg-green shadow-lg text-white"
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ProductInfo;
