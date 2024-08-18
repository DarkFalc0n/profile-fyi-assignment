import { ICartProduct, useCart } from "@/hooks/useCart";
import { FCProps } from "@/types";
import React from "react";
import Image from "next/image";
import QuantitySelector from "@/elements/quantitySelector";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem: FCProps<{ product: ICartProduct }> = ({ product }) => {
  const { cartDispatch } = useCart();
  return (
    <div className="bg-white flex md:px-4 px-2 md:py-4 py-4 my-4">
      <div className="md:w-1/6 w-1/3 md:px-0 px-4 relative">
        <Image
          src={product.image}
          alt={product.title}
          objectFit="contain"
          fill
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex w-full justify-between">
          <h1 className=" md:text-xl text line-clamp-2 w-2/3 md:line-clamp-1 px-4 py-1">
            {product.title}
          </h1>
          <h1 className="font-semibold md:text-2xl text-lg text-right">
            $ {product.price}
          </h1>
        </div>
        <div className="flex w-full justify-between px-4 py-1">
          <QuantitySelector product={product} />
          <div className="flex flex-col justify-center items-center">
            <FaRegTrashAlt
              onClick={() => {
                cartDispatch({ type: "REMOVE_FROM_CART", product });
              }}
              className="text-2xl hover:text-red-500 text-primary cursor-pointer hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
