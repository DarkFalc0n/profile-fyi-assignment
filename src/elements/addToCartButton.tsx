"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCart } from "@/hooks/useCart";
import { FCProps } from "@/types";
import { Product } from "@/hooks/useProducts";
import Link from "next/link";

const AddToCartButton: FCProps<{ product: Product }> = ({ product }) => {
  const { toast } = useToast();
  const { cartDispatch } = useCart();

  return (
    <button
      onClick={() => {
        cartDispatch({
          type: "ADD_TO_CART",
          product,
        });
        toast({
          title: "Added to cart",
          description: product.title,
          action: (
            <ToastAction altText="Cart">
              <Link
                className="w-full h-full flex flex-col justify-center"
                href={"/cart"}
              >
                Go to Cart
              </Link>
            </ToastAction>
          ),
        });
      }}
      className="mt-2 bg-white hover:bg-stone-800 px-2 py-2 rounded-full hover:text-white text-regular border-stone-800 border-2 duration-200 font-medium"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
