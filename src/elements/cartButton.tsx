"use client";
import { FCProps } from "@/types";
import Link from "next/link";
import React from "react";

import { FiShoppingCart } from "react-icons/fi";

const CartButton: FCProps<{ itemQuantity: number }> = ({ itemQuantity }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link href="/cart">
      <button
        className="duration-200 px-2 py-2 rounded-full flex justify-evenly text-primary"
        style={{ scale: hovered ? 1.1 : 1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FiShoppingCart size={24} />
        {itemQuantity > 0 && (
          <div className="bg-red-500 text-white text-xs h-7 w-7 rounded-full absolute translate-x-5 -translate-y-4 flex flex-col justify-center">
            {itemQuantity}
          </div>
        )}
      </button>
    </Link>
  );
};

export default CartButton;
