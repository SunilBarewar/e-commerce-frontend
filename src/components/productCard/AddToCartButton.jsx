const AddToCartButton = ({ onClick }) => {
  return (
    <button
      className="bg-green absolute bottom-2 right-5 p-2 rounded-full shadow-lg"
      title="add to cart"
      onClick={onClick}
    >
      <img
        width="26"
        height="26"
        src="./image/cart_icon.png"
        alt="add-shopping-cart"
      />
    </button>
  );
};

export default AddToCartButton;
