import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useOrdersApi from "../../hooks/api/useOrdersApi";
const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart } = useCart();

  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { createCheckoutSession } = useOrdersApi();
  // payment integration
  const cancelPayment = async (e) => {
    e.preventDefault();
    navigate("/cart", { replace: true });
  };

  useEffect(() => {
    console.log(state);
    (async () => {
      if (!state || !cart || !cart.length) {
        navigate("/");
        return;
      }

      try {
        const body = {
          products: cart,
        };
        const response = await createCheckoutSession(body);

        const session = response.data;
        setClientSecret(session.clientSecret);
        console.log(session);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="w-full h-[100%]">
      {clientSecret ? (
        <>
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
          <div className="flex justify-center mt-5 mb-10">
            <button
              className="py-4 px-10 rounded-lg text-xl bg-red-600 text-white"
              onClick={cancelPayment}
            >
              Cancel Transaction
            </button>
          </div>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <ClipLoader size={110} color="#f1150a" />
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
