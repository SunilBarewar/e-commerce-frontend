import React from "react";
import { productsAll } from "../constants/products";
import ProductCard from "../components/productCard";
const ProductList = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 place-items-center">
        {productsAll.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
