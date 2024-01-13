import { createContext, useCallback, useState } from "react";
import calculateDiscountedPrice from "../utils/calculateDiscountedPrice";
import { useEffect } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const productCountInCart = () => cart?.length;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateTotalPrice = () => {
    const total = cart?.reduce((acc, curr) => {
      return acc + curr.total;
    }, 0);
    return total;
  };
  const addToCart = useCallback((item) => {
    const cartItem = {
      _id: item._id,
      title: item.title,
      price: item.price,
      quantity: 1,
      total: calculateDiscountedPrice(item),
      discountPercentage: item.discountPercentage,
      discountedPrice: calculateDiscountedPrice(item),
      thumbnail: item.thumbnail,
    };

    setCart((prevCart) => {
      let pIdx = prevCart.findIndex((p) => item._id === p._id);
      if (pIdx >= 0) return prevCart;

      // not exists
      return [...prevCart, cartItem];
    });
  }, []);

  const updateQuantity = useCallback((val, index) => {
    setCart((oldCart) => {
      if (oldCart[index].quantity + val === 0) {
        return oldCart.filter((_, i) => i !== index);
      }

      const updatedCart = oldCart.map((item, i) => {
        let qt = item.quantity;
        let total = item.total + val * item.discountedPrice;
        if (i === index) {
          return { ...item, quantity: qt + val, total };
        }
        return { ...item };
      });
      return updatedCart;
    });
  }, []);

  const removeProduct = useCallback((item) => {
    setCart((prevCart) => {
      let updatedCart = prevCart.filter((p) => p._id !== item._id);
      return updatedCart;
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        productCountInCart,
        updateQuantity,
        removeProduct,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
