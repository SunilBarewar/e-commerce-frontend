import React, { useEffect, useState } from "react";
import { productsAll } from "../constants/products";
import ProductCard from "../components/productCard";
import useProductsApi from "../hooks/api/useProductsApi";
import { useSearchParams } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { findProducts } = useProductsApi();
  let [searchParams] = useSearchParams();
  //  let url = `?page=${page}&sort=${sortby.option}&order=${sortby.order}&category=${categories.toString()}&search=${searchQuery}`
  useEffect(() => {
    let query = `?`;
    if (searchParams.get("category")) {
      query += `category=${searchParams.get("category")}`;
    }
    const fetchProducts = async () => {
      try {
        const res = await findProducts(query);
        // console.log(res);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="my-10">
      {products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 place-items-center">
          {products.map((product) => {
            return (
              <div key={product._id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center self-center">
          <h2 className="text-4xl font-bold mb-3">No Results Found</h2>
          <p>
            Sorry, we couldn't find any results for your search query. Please
            try a different search term or refine your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
