import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

const saleMessages = [
  "Now we are having a sale 20% on all products",
  "Now we are having a sale 20% on all products",
  "Now we are having a sale 20% on all products",
  "Now we are having a sale 20% on all products",
];

export default function Sale() {
  const repeatedBrands = [...saleMessages, ...saleMessages, ...saleMessages];

  return (
    <section className="w-full overflow-hidden bg-red-500 ">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          AutoScroll({
            stopOnMouseEnter: true,
            stopOnInteraction: false,
            speed: 1.2,
          }),
        ]}
      >
        <CarouselContent className="items-center bg-red-500">
          {repeatedBrands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/1 md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
            >
              <div className="flex  items-center justify-start ">
                <p className="text-white">{brand}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
