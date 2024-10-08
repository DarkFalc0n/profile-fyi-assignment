"use client";
import { FCProps } from "@/types";
import RatingStars from "./ratingStars";
import AddToCartButton from "@/elements/addToCartButton";
import { useState } from "react";
import { Product } from "@/hooks/useProducts";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import QuantitySelector from "@/elements/quantitySelector";

const ProductCard: FCProps<Product> = (props) => {
  const [hovered, setHovered] = useState(false);
  const { cartState } = useCart();
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[25rem] overflow-hidden bg-white duration-200"
    >
      <div className="w-full h-56 relative">
        {props.image && (
          <Image
            src={props.image}
            alt={props.title}
            objectFit="contain"
            fill
            className="p-4 duration-200"
            style={{ scale: hovered ? 1.1 : 1 }}
          />
        )}
      </div>
      <div className="h-40 px-4 flex flex-col justify-start">
        <RatingStars rating={props.rating.rate} count={props.rating.count} />
        <div className="line-clamp-1 font-medium text-slate-900">
          {props.title}
        </div>
        <div className="block text-2xl font-semibold text-slate-900">
          $ {props.price}
        </div>
        {cartState.products.map((p) => p.id).includes(props.id) ? (
          <div className="flex justify-center gap-8 mt-2 bg-stone-200 px-4 py-2">
            <div className="flex flex-col text-xl justify-center font-bold">
              In Cart
            </div>
            <QuantitySelector product={props as Product} />
          </div>
        ) : (
          <AddToCartButton product={props as Product} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
