"use client";

import { FCProps } from "@/types";
import CartButton from "@/elements/cartButton";
import LoginButton from "@/elements/loginButton";
import { useCart } from "@/hooks/useCart";

const Header: FCProps = () => {
  const { cartState } = useCart();

  const totalQuantity = cartState.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="w-full h-20 flex flex-col justify-center z-30">
      <div className="w-full px-6 flex justify-between">
        <h1 className="leading-1 text-lg text-primary flex flex-col justify-center">
          Profile.fyi - Frontend Assignment
        </h1>
        <h1 className="flex flex-col text-3xl font-heading w-full -translate-x-6 text-center absolute tracking-widest justify-center">
          TULOS
        </h1>
        <div className="flex justify-between">
          <LoginButton />
          <CartButton itemQuantity={totalQuantity} />
        </div>
      </div>
    </div>
  );
};

export default Header;
