import ReactStars from "react-stars";
import AddToCartButton from "./AddToCartButton";
import ProductThumbnail from "./ProductThumbnail";
import ProductDesc from "./ProductDesc";
import useCart from "@/hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="w-full lg:w-[270px] rounded ">
        <div className="bg-white-2 relative flex justify-center items-center h-[250px]">
          <ProductThumbnail thumbnail={product.thumbnail} />
          <AddToCartButton onClick={() => addToCart(product)} />
        </div>
        <div className="pt-1">
          <ProductDesc product={product} />
          <ReactStars
            count={5}
            onChange={() => {}}
            value={product.rating}
            edit={false}
            size={20}
            color2={"#ffd700"}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
