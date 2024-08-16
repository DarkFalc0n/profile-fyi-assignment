"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCart } from "@/hooks/useCart";

const AddToCartButton = () => {
  const { toast } = useToast();
  const [cartItems, cartAction] = useCart();

  return (
    <button
      onClick={() => {
        cartAction({
          type: "ADD_TO_CART",
          product: {
            id: "1",
            title: "Hello",
            price: 10,
            rating: {
              average: 4,
              count: 100,
            },
          },
        });
        toast({
          title: "Added to cart",
          description: "Men's Basic Tee",
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
