"use client";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const [cartItems, cartAction] = useCart();
  return (
    <div className="bg-background">{JSON.stringify(cartItems.products)}</div>
  );
};

export default CartPage;
