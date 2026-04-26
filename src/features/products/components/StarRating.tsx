import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  max?: number;
};

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of ${max}`}>
      {Array.from({ length: max }).map((_, index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1);

        return (
          <span key={index} className="relative inline-flex size-3.5">
            <Star className="size-3.5 fill-gray-200 text-gray-200" />
            {fill > 0 && (
              <span
                className="absolute inset-0 overflow-hidden text-yellow-400"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
              </span>
            )}
          </span>
        );
      })}
      <span className="ml-1 text-xs text-black/60">{rating}/5</span>
    </div>
  );
}
