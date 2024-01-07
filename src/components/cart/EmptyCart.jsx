import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[250px]">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
          alt=""
        />
      </div>
      <h1 className="text-center text-3xl mb-4">Your Cart is empty!! </h1>
      <Link
        to={"/"}
        href="#"
        class="inline-flex text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
      >
        Shop now
      </Link>
    </div>
  );
};
export default EmptyCart;
