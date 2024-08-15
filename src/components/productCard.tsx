import { FCProps } from "@/types";
import RatingStars from "./ratingStars";
import AddToCartButton from "@/ui/addToCartButton";

export interface ProductCardProps {
  title: string;
  price: number;
  image?: string;
}

const ProductCard: FCProps<ProductCardProps> = (props) => {
  return (
    <div className="shadow w-64 h-96 rounded-xl overflow-hidden bg-white">
      <div className="w-full h-56 bg-slate-200"></div>
      <div className="h-40 px-4 flex flex-col justify-start">
        <RatingStars rating={4.3} />
        <div className="block text-lg font-medium text-slate-900">
          {props.title}
        </div>
        <div className="block text-2xl font-semibold text-slate-900">
          $ {props.price}
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
