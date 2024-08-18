"use client";

import { useProducts } from "@/hooks/useProducts";
import { FCProps } from "@/types";
import { IoIosSearch } from "react-icons/io";

const SearchBar: FCProps = () => {
  const { productsDispatch } = useProducts();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    productsDispatch({
      type: "SEARCH",
      search: event.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center w-full">
      <IoIosSearch className="text-primary text-2xl mr-4" />
      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleSearch}
        className="px-4 py-2 border w-full border-gray-300 rounded-md focus:outline-none bg-background"
      />
    </div>
  );
};

export default SearchBar;
