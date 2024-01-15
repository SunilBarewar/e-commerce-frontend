import React, { useEffect, useState } from "react";
import ProductCardSkeleton from "../components/productCard/Skeleton";
import ProductCard from "../components/productCard";
import useProductsApi from "../hooks/api/useProductsApi";
import { useSearchParams } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(true);
        const res = await findProducts(query);
        // console.log(res);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchParams]);
  return (
    <div className="my-10">
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 place-items-center">
          {!loading &&
            products.map((product) => {
              return (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })}

          {loading &&
            Array(6)
              .fill(0)
              .map((_, i) => (
                <ProductCardSkeleton key={i * 999 + Math.random()} />
              ))}
        </div>
      }

      {!loading && products.length === 0 && (
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
