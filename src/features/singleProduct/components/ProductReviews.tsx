import ReviewCard from "../../reviews/components/ReviewCard";
import type { Review } from "../../reviews/data/reviews";
import WriteReviewDialog from "./WriteReviewDialog";

type ProductReviewsProps = {
  reviews: Review[];
  totalReviews?: number;
};

export default function ProductReviews({
  reviews,
  totalReviews = reviews.length,
}: ProductReviewsProps) {
  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-black">
          All Reviews{" "}
          <span className="text-base font-normal text-black/40">
            ({totalReviews})
          </span>
        </h2>

        <div className="flex items-center gap-3">
          <WriteReviewDialog />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            showActions
            showDate
            className="min-h-48"
          />
        ))}
      </div>
    </>
  );
}
