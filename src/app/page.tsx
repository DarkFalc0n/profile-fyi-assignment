import SearchBar from "@/components/searchBar";
import ProductCard from "@/components/productCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSortNumericDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col max-h-full justify-between px-20 py-12 bg-background">
      <SearchBar />
      <div className="flex gap-4 py-6 h-full">
        <div className="min-h-60 bg-white rounded-xl w-64 p-4 h-full">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Low to High</SelectItem>
              <SelectItem value="dark">Price: High to Low</SelectItem>
              <SelectItem value="system">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 gap-6 p-4 grow bg-white rounded-xl h-full">
          <ProductCard title={"Hello"} price={22.23} image="lol" />
          <ProductCard title={"Hello"} price={22} image="lol" />
          <ProductCard title={"Hello"} price={22} image="lol" />
          <ProductCard title={"Hello"} price={22} image="lol" />
          <ProductCard title={"Hello"} price={22.23} image="lol" />
          <ProductCard title={"Hello"} price={22} image="lol" />
          <ProductCard title={"Hello"} price={22} image="lol" />
          <ProductCard title={"Hello"} price={22} image="lol" />
        </div>
      </div>
    </main>
  );
}
