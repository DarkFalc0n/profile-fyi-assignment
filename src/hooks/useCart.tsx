"use client";
import { createContext, useContext, useReducer } from "react";
import { Product } from "./useProducts";
import { FCProps } from "@/types";

//Product in cart
interface ICartProduct extends Product {
  quantity: number;
}

//Cart data available to app
interface ICartState {
  products: ICartProduct[];
  loading: boolean;
}

//Action performed on cart
type ICartActionType =
  | "ADD_TO_CART"
  | "REMOVE_FROM_CART"
  | "UPDATE_QUANTITY"
  | "CLEAR_CART"
  | "SET_LOADING_DONE";
interface ICartAction {
  type: ICartActionType;
  product: Product;
  quantity?: number;
}

const reducer = (state: ICartState, action: ICartAction): ICartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.products.find((product) => product.id === action.product.id)) {
        return {
          ...state,
          products: [...state.products, { ...action.product, quantity: 1 }],
        };
      }
      return state;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.product.id) {
            return { ...product, quantity: action.quantity! };
          }
          return product;
        }),
      };
    case "CLEAR_CART":
      return {
        ...state,
        products: [] as ICartProduct[],
      };
    case "SET_LOADING_DONE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const CartItemsContext = createContext<ICartState>({
  products: [],
  loading: true,
});
const CartActionsContext = createContext<React.Dispatch<ICartAction>>(() => {});

export const CartProvider: FCProps = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
  });

  return (
    <CartItemsContext.Provider value={state}>
      <CartActionsContext.Provider value={dispatch}>
        {children}
      </CartActionsContext.Provider>
    </CartItemsContext.Provider>
  );
};

export const useCart = () => {
  const [stateContext, dispatchContext] = [
    useContext(CartItemsContext),
    useContext(CartActionsContext),
  ];
  if (stateContext === undefined || dispatchContext === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return [stateContext, dispatchContext] as const;
};
