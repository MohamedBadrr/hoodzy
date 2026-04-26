import { Star } from "lucide-react";
import { cn } from "../../../lib/utils";

type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

export default function StarRating({
  rating,
  max = 5,
  className,
  starClassName,
  labelClassName,
  showLabel = true,
}: StarRatingProps) {
  const starSizeClassName = cn("size-3.5", starClassName);

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={`${rating} out of ${max}`}
    >
      {Array.from({ length: max }).map((_, index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1);

        return (
          <span
            key={index}
            className={cn("relative inline-flex shrink-0", starSizeClassName)}
          >
            <Star className={cn(starSizeClassName, "fill-gray-200 text-gray-200")} />
            {fill > 0 && (
              <span
                className="absolute inset-y-0 left-0 overflow-hidden text-yellow-400"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  className={cn(
                    starSizeClassName,
                    "max-w-none fill-yellow-400 text-yellow-400"
                  )}
                />
              </span>
            )}
          </span>
        );
      })}
      {showLabel && (
        <span className={cn("ml-1 text-xs text-black/60", labelClassName)}>
          {rating}/5
        </span>
      )}
    </div>
  );
}
