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
import CategoryCarousel from "@/components/categoryCarousel";
import { LuSettings2 } from "react-icons/lu";

export default function Home() {
  const { productsState, productsDispatch } = useProducts();
  const handleSort = (value: any) => {
    productsDispatch({ type: "SORT_PRODUCTS", sort: value });
  };
  return (
    <main className="flex flex-col max-h-full justify-between md:px-20 px-6 py-12 items-center">
      <h1 className="text-3xl font-heading w-full text-center">
        STAY TRUE TO YOU
      </h1>
      <p className="text-center mt-2 mb-24 w-[70vw] text-lg text-stone-500">
        Discover products that reflect your unique style and personality.
        Whether you're looking for the latest trends or timeless classics,
        we&apos;ve got you covered. Shop with confidence, knowing every choice
        helps you stay true to who you are.
      </p>
      <CategoryCarousel />
      <div className="flex w-full gap-6">
        <SearchBar />
        <div className="flex flex-col justify-end">
          <Select onValueChange={(value) => handleSort(value)}>
            <SelectTrigger className="w-[180px]">
              <LuSettings2 size={20} className="text-primary" />
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PRICE_ASC">Low to High</SelectItem>
              <SelectItem value="PRICE_DESC">Price: High to Low</SelectItem>
              <SelectItem value="RATING">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-4 py-6 h-full">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:p-4 grow h-full">
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
