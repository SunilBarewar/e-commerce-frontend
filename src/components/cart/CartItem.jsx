import calculateDiscountedPrice from "../../utils/calculateDiscountedPrice";
import ItemQuantity from "./ItemQuantity";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import { Price, ProductName, RemoveButton, Subtotal } from "./CartItemUI";

const CartItem = ({ item, index }) => {
  const disPrice = calculateDiscountedPrice(item);

  const [quantity, setQuantity] = useState(item.quantity);
  const { updateQuantity, removeProduct } = useCart();

  const handleClick = (val) => {
    // console.log(val, index);
    setQuantity((prev) => prev + val);
    updateQuantity(val, index);
  };

  return (
    <div className="grid grid-cols-3 border  md:grid-cols-6 shadow px-3 py-5 gap-3 rounded relative mb-3 justify-center items-center">
      <ProductName thumbnail={item.thumbnail} title={item.title} />

      <Price price={disPrice} />

      <ItemQuantity quantity={quantity} onClick={handleClick} />

      <Subtotal price={disPrice} quantity={quantity} />

      <RemoveButton onClick={() => removeProduct(item)} />
    </div>
  );
};

export default CartItem;
