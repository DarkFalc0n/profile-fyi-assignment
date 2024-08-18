"use client";
import CartItem from "@/components/cartItem";
import { useCart } from "@/hooks/useCart";
import { IoTrashBinOutline } from "react-icons/io5";

const CartPage = () => {
  const { cartState, cartDispatch } = useCart();
  return (
    <div className="w-full md:px-20 px-4 py-12 flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4 md:pr-6">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl mb-6">Your Cart</h1>
          <button
            onClick={() => cartDispatch({ type: "CLEAR_CART" })}
            className="text-primary px-4 h-12 rounded-full hover:border-red-500 hover:bg-red-500 hover:text-white duration-200 border-stone-800 border-2 flex flex-col justify-center"
          >
            <div className="flex gap-2">
              <IoTrashBinOutline size={24} />
              Clear Cart
            </div>
          </button>
        </div>
        {cartState.products.length > 0 ? (
          cartState.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center mt-12 w-[70vw] text-lg text-stone-500">
            Your cart is empty.
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold text-3xl">Summary</h1>
      </div>
    </div>
  );
};

export default CartPage;
