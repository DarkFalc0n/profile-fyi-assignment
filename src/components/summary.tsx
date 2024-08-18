"use client";

import CheckoutButton from "@/elements/checkoutButton";
import { useCart } from "@/hooks/useCart";

const Summary = () => {
  const { cartState } = useCart();
  const subtotal = cartState.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const discount: { type: "CONSTANT" | "PERCENTAGE"; value: number } = {
    type: "PERCENTAGE",
    value: 10,
  };

  const total =
    discount.type === "CONSTANT"
      ? subtotal - discount.value
      : subtotal * (1 - discount.value / 100);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-between">
        <h1 className="text-xl">Subtotal</h1>
        <div className="text-xl text-right">${subtotal.toFixed(2)}</div>
      </div>
      <div className="flex w-full justify-between">
        <h1 className="text-xl">Discounts (10%)</h1>
        <div className="text-xl text-right">
          ${(subtotal - total).toFixed(2)}
        </div>
      </div>
      <div className="flex w-full mt-14 justify-between">
        <h1 className="text-xl font-bold">Total</h1>
        <div className="text-2xl font-bold text-right">${total.toFixed(2)}</div>
      </div>
      <CheckoutButton />
    </div>
  );
};

export default Summary;
