import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useOrdersApi from "../../hooks/api/useOrdersApi";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const {
    state: { products, from },
  } = useLocation();
  const { createCheckoutSession } = useOrdersApi();
  // payment integration
  const cancelPayment = async (e) => {
    e.preventDefault();
    navigate("/cart", { replace: true });
  };

  useEffect(() => {
    console.log(products);
    (async () => {
      if (!products || !products.length) {
        navigate("/");
        return;
      }

      try {
        const body = {
          products,
          from
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
    <>
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
        <div className="flex min-h-screen items-center justify-center">
          <ClipLoader size={110} color="#f1150a" />
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
