"use client";

import { FCProps } from "@/types";
import CartButton from "@/elements/cartButton";
import LoginButton from "@/elements/loginButton";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

const Header: FCProps = () => {
  const { cartState } = useCart();

  const totalQuantity = cartState.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="w-full h-20 flex flex-col justify-center z-30">
      <div className="w-full px-6 flex md:justify-between justify-end">
        <h1 className="leading-1 text-lg md:flex hidden text-primary flex-col justify-center">
          Profile.fyi - Frontend Assignment
        </h1>
        <Link
          href="/"
          className="flex flex-col text-3xl font-heading w-full md:-translate-x-6 translate-x-6 text-center absolute tracking-widest justify-center"
        >
          TULOS
        </Link>
        <div className="flex justify-between">
          <LoginButton />
          <CartButton itemQuantity={totalQuantity} />
        </div>
      </div>
    </div>
  );
};

export default Header;
