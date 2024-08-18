"use client";
import { FCProps } from "@/types";
import { createContext, useContext, useEffect, useReducer } from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  image?: string;
}

interface IProductState {
  products: Product[];
  displayProducts: Product[];
  loading: boolean;
}

const initialProductState: IProductState = {
  products: [],
  displayProducts: [],
  loading: true,
};

type IProductAction =
  | {
      type: "SET_PRODUCTS";
      products: Product[];
    }
  | { type: "SORT_PRODUCTS"; sort: "PRICE_ASC" | "PRICE_DESC" | "RATING" }
  | { type: "FILTER"; category: string }
  | { type: "SEARCH"; search: string };

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

const reducer = (
  state: IProductState,
  action: IProductAction
): IProductState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
        displayProducts: action.products,
        loading: false,
      };
    case "SORT_PRODUCTS":
      return {
        ...state,
        displayProducts: state.products.slice().sort((a, b) => {
          switch (action.sort) {
            case "PRICE_ASC":
              return a.price - b.price;
            case "PRICE_DESC":
              return b.price - a.price;
            case "RATING":
              return b.rating.rate - a.rating.rate;
          }
        }),
      };
    case "FILTER":
      return {
        ...state,
        displayProducts: state.products.filter(
          (product) => product.category === action.category
        ),
      };
    case "SEARCH":
      return {
        ...state,
        displayProducts: state.products.filter((product) =>
          product.title.toLowerCase().includes(action.search.toLowerCase())
        ),
      };
  }
};

//TODO: move this to components seperately
const ProductsContext = createContext<IProductState>(initialProductState);
const ProductsActionContext = createContext<React.Dispatch<IProductAction>>(
  () => {}
);
export const ProductsProvider: FCProps = ({ children }) => {
  const [productsState, productsAction] = useReducer(
    reducer,
    initialProductState
  );

  useEffect(() => {
    fetchProducts().then((data) => {
      productsAction({ type: "SET_PRODUCTS", products: data });
    });
  }, []);

  return (
    <ProductsContext.Provider value={productsState}>
      <ProductsActionContext.Provider value={productsAction}>
        {children}
      </ProductsActionContext.Provider>
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const productsState = useContext(ProductsContext);
  const productsDispatch = useContext(ProductsActionContext);
  if (!productsState || !productsDispatch) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return { productsState, productsDispatch };
};
