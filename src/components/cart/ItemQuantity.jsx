import React from "react";

const ItemQuantity = ({ onClick, quantity }) => {
  return (
    <div className="border px-2 flex justify-between items-center">
      <button
        className="px-1 text-[30px] text-bold"
        onClick={() => onClick(-1)}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="num">{quantity < 10 ? "0" + quantity : quantity}</span>
      <button
        className=" px-1 text-[30px] text-bold"
        onClick={() => onClick(1)}
      >
        +
      </button>
    </div>
  );
};
export default ItemQuantity;
