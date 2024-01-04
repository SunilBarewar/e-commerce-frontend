const AddToCartButton = ({ onClick }) => {
  return (
    <button
      className="bg-white absolute top-2 right-3 p-2 rounded-full shadow-lg"
      title="add to cart"
      onClick={onClick}
    >
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-rounded/24/add-shopping-cart.png"
        alt="add-shopping-cart"
      />
    </button>
  );
};

export default AddToCartButton;
