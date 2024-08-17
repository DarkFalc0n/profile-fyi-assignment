"use client";

import { FCProps } from "@/types";
import CartButton from "@/elements/cartButton";
import LoginButton from "@/elements/loginButton";
import { useCart } from "@/hooks/useCart";

const Header: FCProps = () => {
  const [cartItems] = useCart();
  const totalQuantity = cartItems.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="w-full h-20 sticky top-0 flex flex-col justify-center bg-white z-30">
      <div className="w-full px-6 flex justify-between">
        <h1 className="font-extrabold text-2xl leading-1 text-cta-regular flex flex-col justify-center">
          Profile.fyi - Frontend Assignment
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
