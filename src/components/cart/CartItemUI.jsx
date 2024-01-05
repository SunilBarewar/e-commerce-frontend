import React from "react";

export const RemoveButton = ({ onClick }) => {
  return (
    <button title="remove item" className="" onClick={onClick}>
      <img
        className="mx-auto"
        width="30"
        height="30"
        src="https://img.icons8.com/plasticine/30/filled-trash.png"
        alt="filled-trash"
      />
    </button>
  );
};

export const Subtotal = ({ price, quantity }) => {
  return <p className="text-center">${price * quantity}</p>;
};

export const Price = ({ price }) => {
  return <p className="text-center">${price}</p>;
};

export const ProductName = ({ thumbnail, title }) => {
  return (
    <div className="flex col-span-2 gap-3 items-center ">
      <img src={thumbnail} className="w-[50px]" alt="" />{" "}
      <span className="truncate"> {title}</span>
    </div>
  );
};
