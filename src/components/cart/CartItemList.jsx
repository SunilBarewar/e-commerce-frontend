import useCart from "@/hooks/useCart";
import CartItem from "./CartItem";
import Columns from "./Columns";

const CartItemList = () => {
  const { cart } = useCart();

  return (
    <div className="flex flex-col gap-2">
      <Columns />
      {cart?.map((item, i) => {
        return <CartItem key={item._id} item={item} index={i} />;
      })}
    </div>
  );
};

export default CartItemList;
