import { createContext, useCallback, useState } from "react";
import calculateDiscountedPrice from "../utils/calculateDiscountedPrice";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const productCountInCart = () => cart.length;

  const addToCart = useCallback((item) => {
    setCart((prevCart) => {
      let pIdx = prevCart.findIndex((p) => item.id === p.id);
      if (pIdx >= 0) return prevCart;

      setTotalAmount(
        (prevAmount) => prevAmount + calculateDiscountedPrice(item)
      );
      // not exists
      item.quantity = 1;
      return [...prevCart, item];
    });
  }, []);

  const updateQuantity = useCallback((val, index) => {
    setCart((prevCart) => {
      if(prevCart.quantity === 1){
        return prevCart.filter((p, i) => i !== index);
      }
      let updatedQnt = prevCart[index].quantity + val;
      prevCart[index].quantity = updatedQnt;
      setTotalAmount(
        (prevAmount) =>
          prevAmount + val * calculateDiscountedPrice(prevCart[index])
      );
      return prevCart;
    });
  }, []);

  const removeProduct = useCallback((item) => {
    setCart((prevCart) => {
      let updatedCart = prevCart.filter((p) => p.id !== item.id);

      setTotalAmount(
        (prevAmount) =>
          prevAmount - item.quantity * calculateDiscountedPrice(item)
      );
      return updatedCart;
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        productCountInCart,
        updateQuantity,
        removeProduct,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
