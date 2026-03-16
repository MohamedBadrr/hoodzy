"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

export function Brands() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000 , jump:false , })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full bg-red-500"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>dasdaf</div>
             
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
