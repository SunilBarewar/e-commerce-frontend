import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/UI/Button";
import { BeatLoader } from "react-spinners";
import useCart from "../../hooks/useCart";
import useOrdersApi from "../../hooks/api/useOrdersApi";
const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const { getSessionStatus, placeOrder } = useOrdersApi();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const session_id = searchParams.get("session_id");
      if (!session_id) navigate("/404", { replace: true });

      try {
        const response = await getSessionStatus(session_id);
        const session = response.data;

        if (session?.payment_status === "complete" && cart?.length) {
          const orderObj = {
            ...session,
            items: cart,
            shipping_address: {
              city: "Dummy City",
              country: "IN",
              line1: "123 Dummy Street",
              line2: "Apt 456",
              postal_code: "789012",
              state: "Dummy State",
            },
          };

          await placeOrder(orderObj);
          if (searchParams.get("from") === "cart") {
            localStorage.removeItem("cart");
            setCart([]);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setOrderPlaced(true);
      }
    })();
  }, []);

  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="bg-white shadow-lg w-fit p-8 flex flex-col justify-center items-center rounded-md mt-8">
          <img
            src="./pay-success.svg"
            alt="payment-successful"
            width={150}
            height={150}
          />

          <h1 className="text-[22px] mt-5 font-bold text-red-600">
            Payment Successful!!!
          </h1>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-3">
        {orderPlaced ? (
          <>
            <span className="text-xl mb-3">order placed successfully</span>
            <Button title={"Go to home"} onClick={goToHomePage} />
          </>
        ) : (
          <>
            <span className="text-xl mb-3">
              placing your order , please wait
            </span>
            <BeatLoader color="green" loading />
          </>
        )}
      </div>
    </>
  );
};

export default PaymentStatus;
