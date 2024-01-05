import React from "react";

const Columns = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 border px-3 py-5 gap-2 rounded relative mb-3 justify-center items-center text-primary">
      <div className="flex col-span-2 gap-3 items-center ">Product Name</div>
      <p className="text-center">Price</p>
      <p>Quantity</p>
      <p className="text-center">Subtotal</p>
      <p className="text-center">Remove</p>
    </div>
  );
};

export default Columns;
