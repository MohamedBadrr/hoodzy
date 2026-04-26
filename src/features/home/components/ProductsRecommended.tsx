import { Link } from "react-router";
import { Button } from "../../../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import ProductCard from "../../products/components/ProductCard";
import type { Product } from "../../products/data/products";

type ProductsRecommendedProps = {
  title?: string;
  newArrivalProducts: Product[];
  buttonText?: string;
};

export default function ProductsRecommended({
  title = "New Arrivals",
  newArrivalProducts,
  buttonText = "View All",
}: ProductsRecommendedProps) {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-25">
      <div className="mx-auto max-w-310 border-b border-black/10 pb-10">
        <h2 className="font-inter text-center text-3xl font-bold leading-none text-black sm:text-4xl mt-5 mb-3">
          {title}
        </h2>

        <Carousel
          className="mt-9 lg:hidden"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-ml-4">
            {newArrivalProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[86%] pl-4 md:basis-[46%]"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-9 hidden gap-x-5 gap-y-8 lg:grid lg:grid-cols-4">
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-11 min-w-38 w-full md:w-fit rounded-full border-black/10 bg-white px-10 py-0 text-sm text-black hover:bg-black hover:text-white"
          >
            <Link to="/products">{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
