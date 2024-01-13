import { BeatLoader } from "react-spinners";
const OrderButton = ({ onClick, loading }) => {
  return (
    <button
      className="bg-green w-fit text-white text-bold text-lg self-center px-12 py-4 rounded-md tracking-[2px]"
      onClick={onClick}
    >
      {loading ? <BeatLoader /> : "Order Now"}
    </button>
  );
};

export default OrderButton;
