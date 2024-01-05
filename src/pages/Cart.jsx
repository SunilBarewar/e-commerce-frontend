import {
  CartItemList,
  EmptyCart,
  TotalAmount,
  OrderButton,
} from "../components/cart";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="pt-4 pt-3md:pt-8 md:px-6 overflow-hidden relative">
      <CartItemList />
      <div className="flex flex-col top-1  sticky">
        <TotalAmount />
        <OrderButton />
      </div>
    </div>
  );
};

export default Cart;
