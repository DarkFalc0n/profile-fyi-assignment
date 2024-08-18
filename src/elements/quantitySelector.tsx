import { useCart } from "@/hooks/useCart";
import { Product } from "@/hooks/useProducts";
import { FCProps } from "@/types";

const QuantitySelector: FCProps<{
  product: Product;
}> = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const productInCart = cartState.products.filter(
    (p) => p.id === product.id
  )[0];
  return (
    <div className="w-full justify-center flex gap-4 mt-2">
      <button
        className="rounded-full w-10 h-10 p-1 text-xl hover:bg-slate-800 text-primary hover:text-white border-stone-800 border-2"
        onClick={() => {
          cartDispatch({
            type: "UPDATE_QUANTITY",
            product: productInCart,
            quantity: productInCart.quantity - 1,
          });
        }}
      >
        -
      </button>
      <input
        className="w-10 text-center items-center appearance-none"
        value={productInCart?.quantity}
        onChange={(e) => {
          cartDispatch({
            type: "UPDATE_QUANTITY",
            product: productInCart,
            quantity: parseInt(e.target.value),
          });
        }}
      />
      <button
        className="rounded-full w-10 h-10 p-1 text-xl hover:bg-slate-800 text-primary hover:text-white border-stone-800 border-2"
        onClick={() => {
          cartDispatch({
            type: "UPDATE_QUANTITY",
            product: productInCart,
            quantity: productInCart.quantity + 1,
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
