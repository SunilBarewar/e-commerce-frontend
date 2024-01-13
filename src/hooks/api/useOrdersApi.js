import useAxiosPrivate from "../useAxiosPrivate";

const useOrdersApi = () => {
  const axiosPrivate = useAxiosPrivate();
  const placeOrder = async (payload) => {
    return await axiosPrivate.post("/orders/place-order", payload);
  };

  const createCheckoutSession = async (payload) => {
    return await axiosPrivate.post("/orders/create-checkout-session", payload);
  };

  const getSessionStatus = async (session_id) => {
    return await axiosPrivate.get(
      `/orders/session-status?session_id=${session_id}`
    );
  };
  return { placeOrder, createCheckoutSession, getSessionStatus };
};

export default useOrdersApi;
