"use client";

import { FCProps } from "@/types";
import { useState } from "react";

const SearchBar: FCProps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="px-4 py-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta-regular"
      />
    </div>
  );
};

export default SearchBar;
