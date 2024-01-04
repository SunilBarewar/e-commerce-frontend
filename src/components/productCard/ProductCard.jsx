import ReactStars from "react-stars";

function calculateDiscountedPrice(product) {
  // Ensure that the discountPercentage is a valid number
  if (
    typeof product.discountPercentage !== "number" ||
    isNaN(product.discountPercentage)
  ) {
    throw new Error("Invalid discount percentage");
  }

  // Calculate the discounted price
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  // Round the discounted price to two decimal places
  const roundedDiscountedPrice = Math.round(discountedPrice * 100) / 100;

  return Math.floor(roundedDiscountedPrice);
}

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="w-full lg:w-[270px] rounded ">
        <div className="bg-white-2 relative flex justify-center items-center h-[250px]">
          <div className=" my-6">
            <img
              src={product.thumbnail}
              alt=""
              className="object-fill h-full"
            />
          </div>
          <button
            className="bg-white absolute top-2 right-3 p-2 rounded-full"
            title="add to cart"
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/add-shopping-cart.png"
              alt="add-shopping-cart"
            />
          </button>
        </div>
        <div>
          <h3>{product.title}</h3>
          <div className="flex gap-3">
            <span className="text-primary ">
              ${calculateDiscountedPrice(product)}
            </span>
            <span className="relative text-sm self-end text-gray-500 line-through">
              ${product.price}
            </span>
          </div>
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
