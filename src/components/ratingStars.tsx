import { FCProps } from "@/types";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const normalisedStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating - i >= 0.7) {
      stars.push(<FaStar key={i} color="#FF9100" />);
    } else if (rating - i > 0.2 && rating - i < 0.7) {
      stars.push(<FaStarHalf key={i} color="#FF9100" />);
    }
  }
  return stars;
};

const RatingStars: FCProps<{ rating: number }> = ({ rating }) => {
  return (
    <div className="py-2 flex">
      <div className="font-regular mr-2 text-sm">{rating}</div>
      {normalisedStars(rating)}
      <div className="font-light ml-2 text-sm text-slate-500">(126)</div>
    </div>
  );
};

export default RatingStars;
