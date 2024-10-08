"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Product } from "./useProducts";
import { FCProps } from "@/types";

//Product in cart
export interface ICartProduct extends Product {
  quantity: number;
}

//Cart data available to app
interface ICartState {
  products: ICartProduct[];
  loading: boolean;
}

//Action performed on cart
type ICartActionType = "ADD_TO_CART" | "REMOVE_FROM_CART" | "UPDATE_QUANTITY";

type ICartAction =
  | {
      type: ICartActionType;
      product: Product;
      quantity?: number;
    }
  | { type: "CLEAR_CART" }
  | { type: "SET_LOADING_DONE" };

//reducer to update cart state
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
      if (action.quantity === 0) {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.product.id
          ),
        };
      }
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

//Context to provide cart state and actions
const CartItemsContext = createContext<ICartState>({
  products: [],
  loading: true,
});
const CartActionsContext = createContext<React.Dispatch<ICartAction>>(() => {});

//Cart context provider
export const CartProvider: FCProps = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
  });

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      dispatch({ type: "SET_LOADING_DONE" });
      dispatch({ type: "CLEAR_CART" });
      const cartItems = JSON.parse(cart) as ICartProduct[];
      cartItems.forEach((product) => {
        dispatch({ type: "ADD_TO_CART", product });
        dispatch({
          type: "UPDATE_QUANTITY",
          product,
          quantity: product.quantity,
        });
      });
    } else {
      dispatch({ type: "SET_LOADING_DONE" });
    }
  }, []);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem("cart", JSON.stringify(state.products));
    }
  }, [state.products]);

  return (
    <CartItemsContext.Provider value={state}>
      <CartActionsContext.Provider value={dispatch}>
        {children}
      </CartActionsContext.Provider>
    </CartItemsContext.Provider>
  );
};

//Custom hook to access cart state and actions
export const useCart = () => {
  const [cartState, cartDispatch] = [
    useContext(CartItemsContext),
    useContext(CartActionsContext),
  ];
  if (cartState === undefined || cartDispatch === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return { cartState, cartDispatch } as const;
};
