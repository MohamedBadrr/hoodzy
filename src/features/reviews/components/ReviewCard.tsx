import { BadgeCheck, Star } from "lucide-react";
import type { Review } from "../data/reviews";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="h-full rounded-[16px] border border-black/10 bg-white p-6">
      <div className="flex items-center gap-1 text-yellow-400">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} className="size-4 fill-yellow-400" />
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <h3 className="text-base font-bold text-black">{review.name}</h3>
        {review.verified && (
          <BadgeCheck className="size-4 fill-green-500 text-white" aria-label="Verified customer" />
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-black/60">"{review.quote}"</p>
    </article>
  );
}
