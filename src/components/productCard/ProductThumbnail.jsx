import React from "react";

const ProductThumbnail = ({ thumbnail }) => {
  return (
    <div className="my-6 max-h-[250px] overflow-hidden">
      <img src={thumbnail} alt="" className="object-contain h-full" />
    </div>
  );
};

export default ProductThumbnail;
