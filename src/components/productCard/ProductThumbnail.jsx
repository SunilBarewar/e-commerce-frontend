import React from "react";

const ProductThumbnail = ({ thumbnail }) => {
  return (
    <div className="my-6">
      <img src={thumbnail} alt="" className="object-fill h-full" />
    </div>
  );
};

export default ProductThumbnail;
