import React from "react";

const OrderButton = ({ onClick }) => {
  return (
    <button
      className="bg-green w-fit text-white text-bold text-lg self-center px-12 py-4 rounded-md mt-5 tracking-[2px]"
      onClick={onClick}
    >
      Order
    </button>
  );
};

export default OrderButton;
