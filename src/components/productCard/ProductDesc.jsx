import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";

const ProductDesc = ({ product }) => {
  return (
    <>
      <h3>{product.title}</h3>
      <div className="flex gap-3">
        <span className="text-primary ">
          ${calculateDiscountedPrice(product)}
        </span>
        <span className="relative text-sm self-end text-gray-500 line-through">
          ${product.price}
        </span>
      </div>
    </>
  );
};

export default ProductDesc;
