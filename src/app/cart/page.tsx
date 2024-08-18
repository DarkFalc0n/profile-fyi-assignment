"use client";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const { cartState } = useCart();
  return <div className="">{JSON.stringify(cartState.products)}</div>;
};

export default CartPage;
