import React from "react";
import useCart from "../../hooks/useCart";

const TotalAmount = () => {
  const { totalAmount } = useCart();
  return (
    <div className="text-bold text-xl self-end flex-shrink-0 mr-5">
      <span className="tracking-[1px]">Total Amount : </span>
      <span className="text-primary tracking-[.5px]"> ${totalAmount}</span>
    </div>
  );
};

export default TotalAmount;
