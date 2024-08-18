"use client";

import SearchBar from "@/components/searchBar";
import ProductCard from "@/components/productCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { productsState, productsDispatch } = useProducts();
  const handleSort = (value: any) => {
    productsDispatch({ type: "SORT_PRODUCTS", sort: value });
  };
  return (
    <main className="flex flex-col max-h-full justify-between px-20 py-12">
      <h1 className="text-2xl font-heading w-full text-center">
        STAY TRUE TO YOU
      </h1>
      <p className="text-center mt-2 mb-8 text-lg text-stone-500">
        Find everthing you need to feel your best.
      </p>
      <SearchBar />
      <div className="flex gap-4 py-6 h-full">
        <div className="min-h-60 bg-white rounded-xl w-64 p-4 h-full">
          <Select onValueChange={(value) => handleSort(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PRICE_ASC">Low to High</SelectItem>
              <SelectItem value="PRICE_DESC">Price: High to Low</SelectItem>
              <SelectItem value="RATING">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-3 gap-6 p-4 grow bg-white rounded-xl h-full">
          {productsState.loading ? (
            <div>Loading...</div>
          ) : (
            productsState.displayProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
