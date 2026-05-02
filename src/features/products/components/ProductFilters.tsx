import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/button";

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];

export default function ProductFilters() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Filters</h2>
        <SlidersHorizontal className="size-5 text-black/40" />
      </div>

      <div className="border-t border-black/10 pt-5">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="flex w-full items-center justify-between py-2 text-left text-sm text-black/60 transition-colors hover:text-black"
          >
            {category}
            <ChevronRight className="size-4" />
          </button>
        ))}
      </div>

      <div className="border-t border-black/10 pt-5">
        <h3 className="text-base font-bold text-black">Price</h3>
        <div className="mt-5">
          <div className="relative h-1 rounded-full bg-black">
            <span className="absolute left-0 top-1/2 size-4 -translate-y-1/2 rounded-full bg-black" />
            <span className="absolute right-0 top-1/2 size-4 -translate-y-1/2 rounded-full bg-black" />
          </div>
          <div className="mt-3 flex justify-between text-xs font-medium text-black">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-5">
        <h3 className="text-base font-bold text-black">Colors</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className="size-9 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
              aria-label={`Filter by ${color}`}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-black/10 pt-5">
        <h3 className="text-base font-bold text-black">Size</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className="rounded-full bg-[#F0F0F0] px-5 py-2.5 text-sm text-black/60 transition-colors hover:bg-black hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-black/10 pt-5">
        <h3 className="text-base font-bold text-black">Dress Style</h3>
        <div className="mt-3">
          {dressStyles.map((style) => (
            <button
              key={style}
              type="button"
              className="flex w-full items-center justify-between py-2 text-left text-sm text-black/60 transition-colors hover:text-black"
            >
              {style}
              <ChevronRight className="size-4" />
            </button>
          ))}
        </div>
      </div>

      <Button className="h-12 w-full py-0">Apply Filter</Button>
    </div>
  );
}
