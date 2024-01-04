export default function calculateDiscountedPrice(product) {
  if (
    typeof product.discountPercentage !== "number" ||
    isNaN(product.discountPercentage)
  ) {
    throw new Error("Invalid discount percentage");
  }

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  const roundedDiscountedPrice = Math.round(discountedPrice * 100) / 100;

  return Math.floor(roundedDiscountedPrice);
}
