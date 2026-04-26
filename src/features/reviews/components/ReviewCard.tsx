import { BadgeCheck, MoreHorizontal } from "lucide-react";
import StarRating from "../../products/components/StarRating";
import type { Review } from "../data/reviews";
import { cn } from "../../../lib/utils";

type ReviewCardProps = {
  review: Review;
  className?: string;
  showActions?: boolean;
  showDate?: boolean;
};

export default function ReviewCard({
  review,
  className,
  showActions = false,
  showDate = false,
}: ReviewCardProps) {
  return (
    <article className={cn("h-full rounded-[16px] border border-black/10 bg-white p-6", className)}>
      <div className="flex items-start justify-between gap-4">
        <StarRating rating={review.rating} starClassName="size-4" showLabel={false} />
        {showActions && (
          <button
            type="button"
            className="text-black/40 transition-colors hover:text-black"
            aria-label={`More actions for ${review.name}'s review`}
          >
            <MoreHorizontal className="size-5" />
          </button>
        )}
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <h3 className="text-base font-bold text-black">{review.name}</h3>
        {review.verified && (
          <BadgeCheck className="size-4 fill-green-500 text-white" aria-label="Verified customer" />
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-black/60">"{review.quote}"</p>
      {showDate && review.date && (
        <p className="mt-6 text-sm text-black/60">{review.date}</p>
      )}
    </article>
  );
}
