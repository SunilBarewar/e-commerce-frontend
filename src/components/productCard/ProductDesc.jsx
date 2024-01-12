import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";

const ProductDesc = ({ product }) => {
  return (
    <div className="overflow-hidden">
      <p className="truncate overflow-hidden">{product.title.substr(0, 30)}</p>
      <div className="flex gap-3">
        <span className="text-primary ">
          ${calculateDiscountedPrice(product)}
        </span>
        <span className="relative text-sm self-end text-gray-500 line-through">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductDesc;
