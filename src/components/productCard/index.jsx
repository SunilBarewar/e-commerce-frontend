import ReactStars from "react-stars";
import AddToCartButton from "./AddToCartButton";
import ProductThumbnail from "./ProductThumbnail";
import ProductDesc from "./ProductDesc";
import useCart from "@/hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const handleAddtoCart = () => {
    addToCart(product);
  };
  return (
    <>
      <div className="w-full lg:w-[270px] rounded shadow p-2 relative">
        <div className="bg-white-2 relative flex justify-center items-center h-[250px]">
          <ProductThumbnail thumbnail={product.thumbnail} />
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

        <AddToCartButton onClick={handleAddtoCart} />
      </div>
    </>
  );
};

export default ProductCard;
