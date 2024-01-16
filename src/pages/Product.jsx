import React, { useEffect, useState } from "react";
// Import Swiper React components
import { useNavigate, useParams } from "react-router-dom";
import useProductsApi from "../hooks/api/useProductsApi";
import {
  ProductImagesSwiper,
  ProductPageSkeleton,
  ProductInfo,
} from "../components/product";

import { useToast } from "@chakra-ui/react";
import { FailedToLoadProudct } from "../constants/toastOptions";
// import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const { getProduct } = useProductsApi();
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
    if (!params.id || params.id === "undefined") {
      navigate("/404");
    }
    const fetchProductDetails = async () => {
      try {
        const response = await getProduct(params.id);
        await new Promise((resolve) => {
          setTimeout(() => {
            setProduct(response.data.product);
            resolve();
          }, 900);
        });

        // console.log(response);
      } catch (error) {
        toast(FailedToLoadProudct);
        // console.log(error);
      }
    };
    fetchProductDetails();
  }, [params]);
  return (
    <>
      {product ? (
        <div className="fade-in w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-normal mt-12 gap-7 lg:gap-[140px] mb-14">
          {/* {product && <ProductImagesSwiper productImages={product.images} />} */}

          <ProductImagesSwiper productImages={product.images} />
          <ProductInfo product={product} />
        </div>
      ) : (
        <ProductPageSkeleton />
      )}
    </>
  );
};

export default Product;
