import React from "react";

const ProductThumbnail = ({ thumbnail }) => {
  return (
    <div className="my-6 max-h-[250px] overflow-hidden">
      <img
        src={thumbnail}
        alt=""
        className="w-[100%] object-contain h-full bg-neutral-400"
        loading="lazy"
      />
    </div>
  );
};

export default ProductThumbnail;
