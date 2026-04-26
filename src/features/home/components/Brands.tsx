import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";

import cilven from "../../../assets/images/cilven.png";
import gucci from "../../../assets/images/gucci.png";
import parada from "../../../assets/images/parada.png";
import verse from "../../../assets/images/verse.png";
import zara from "../../../assets/images/zara.png";

const brands = [
  { name: "verse", logo: verse },
  { name: "gucci", logo: gucci },
  { name: "parada", logo: parada },
  { name: "zara", logo: zara },
  { name: "calvin klein", logo: cilven },
];

export default function Brands() {
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full overflow-hidden bg-black py-6">
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
        <CarouselContent className="items-center">
          {repeatedBrands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/5"
            >
              <div className="flex h-14 items-center justify-center px-6">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain md:h-10"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
