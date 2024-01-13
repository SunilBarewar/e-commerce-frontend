import {
  CartItemList,
  EmptyCart,
  TotalAmount,
  OrderButton,
} from "../components/cart";
import useCart from "../hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  const { cart } = useCart();
  if (cart.length === 0) return <EmptyCart />;
  const [loadingCheckoutForm, setLoadingCheckoutForm] = useState(false);
  const navigate = useNavigate();
  const makePayment = async (e) => {
    e.preventDefault();
    setLoadingCheckoutForm(true);
    navigate("/payment", { replace: true, state: "123456789" });
  };

  return (
    <div className="pt-4 pt-3md:pt-8 md:px-6 overflow-hidden relative">
      <CartItemList />
      <div className="flex flex-col top-1  sticky">
        <TotalAmount />
        <div className="mb-10 mt-5 flex justify-center">
          <OrderButton onClick={makePayment} loading={loadingCheckoutForm} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
