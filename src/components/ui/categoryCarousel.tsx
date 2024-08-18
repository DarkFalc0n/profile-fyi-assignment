import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import CategoryButton from "@/elements/categoryButton";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";

const CategoryCarousel = () => {
  const { productsState, productsDispatch } = useProducts();
  const categories = productsState.products.reduce(function (
    acc: string[],
    product
  ) {
    const category = product.category;
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  },
  []);

  const [appliedCategory, setAppliedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (appliedCategory) {
      productsDispatch({
        type: "FILTER",
        category: appliedCategory,
      });
    } else {
      productsDispatch({
        type: "REMOVE_FILTER",
      });
    }
  }, [appliedCategory]);

  return (
    <Carousel className="mb-4">
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem className="pl-6 basis-1/4" key={category}>
            <CategoryButton
              text={category}
              category={appliedCategory}
              setCategory={setAppliedCategory}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategoryCarousel;
