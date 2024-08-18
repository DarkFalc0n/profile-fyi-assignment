"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCart } from "@/hooks/useCart";
import { FCProps } from "@/types";
import { Product } from "@/hooks/useProducts";

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
          action: <ToastAction altText="Cart">Go to Cart</ToastAction>,
        });
      }}
      className="mt-2 bg-white hover:bg-cta-regular px-2 py-2 rounded-md hover:text-white text-regular border-cta-regular border-2 duration-200 font-medium"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
