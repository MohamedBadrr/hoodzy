import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import ReviewCard from "./ReviewCard";
import { customerReviews } from "../data/reviews";

export default function HappyCustomers() {
  return (
    <section className="overflow-hidden mb-18 bg-white px-4 pb-10 pt-6 sm:px-8 lg:px-25 lg:pb-12">
      <Carousel
        className="mx-auto max-w-310"
        opts={{
          align: "start",
        }}
      >
        <div className="relative flex items-start justify-between gap-4">
          <h2 className="font-inter max-w-65 text-3xl font-bold leading-tight text-black sm:max-w-none lg:text-4xl">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="mt-1 flex shrink-0 items-center gap-3">
            <CarouselPrevious className="static size-8 translate-0 border-0 bg-transparent p-0 text-black shadow-none hover:bg-transparent disabled:opacity-30" />
            <CarouselNext className="static size-8 translate-0 border-0 bg-transparent p-0 text-black shadow-none hover:bg-transparent disabled:opacity-30" />
          </div>
        </div>

        <CarouselContent className="-ml-4 pt-6">
          {customerReviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="basis-[92%] pl-4 md:basis-[48%] lg:basis-[32%]"
            >
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
