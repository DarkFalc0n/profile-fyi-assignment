"use client";
import { FCProps } from "@/types";
import RatingStars from "./ratingStars";
import AddToCartButton from "@/elements/addToCartButton";
import { useState } from "react";

export interface ProductCardProps {
  title: string;
  price: number;
  image?: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: FCProps<ProductCardProps> = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      className="shadow h-96 rounded-xl overflow-hidden bg-white duration-200"
    >
      <div className="w-full h-56 bg-slate-200"></div>
      <div className="h-40 px-4 flex flex-col justify-start">
        <RatingStars rating={props.rating.rate} count={props.rating.count} />
        <div className="line-clamp-1 font-medium text-slate-900">
          {props.title}
        </div>
        <div className="block text-2xl font-semibold text-slate-900">
          $ {props.price}
        </div>
        <AddToCartButton product={props} />
      </div>
    </div>
  );
};

export default ProductCard;
