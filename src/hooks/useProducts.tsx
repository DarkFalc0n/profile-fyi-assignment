"use client";
import { FCProps } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

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
  loading: boolean;
}

const initialProductState: IProductState = {
  products: [],
  loading: true,
};

const ProductsContext = createContext<IProductState>(initialProductState);

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

export const ProductsProvider: FCProps = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(
          data.map((product: any) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            rating: product.rating,
            category: product.category,
            image: product.image,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): IProductState => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
