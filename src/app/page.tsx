import SearchBar from "@/components/searchBar";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <main className="flex flex-col max-h-full justify-between px-20 py-12 bg-background">
      <SearchBar />
      <div className="flex gap-4 py-6 h-full">
        <div className="min-h-60 bg-white rounded-xl w-64 grow h-full">
          <h1>Filter</h1>
        </div>
        <div className="grid grid-cols-4 gap-8 px-8 py-8 bg-white rounded-xl h-full">
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
