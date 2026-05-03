import { SlidersHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useSearchParams } from "react-router";
import { useState } from "react";
import { Slider } from "../../../components/ui/slider";

const MIN_PRICE = 50;
const MAX_PRICE = 500;

export default function ProductFilters() {
  const Categories = ["T-shirts", "Jeans", "Shirts", "Shorts"];
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category"),
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || MIN_PRICE,
    Number(searchParams.get("maxPrice")) || MAX_PRICE,
  ]);

  const handleResetFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Filters</h2>
        <SlidersHorizontal className="size-5 text-black/40" />
      </div>

      <div className="border-t border-black/10 pt-5">
        {Categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set("category", category);
              setSearchParams(params);
              setSelectedCategory(category);
            }}
            className={`flex cursor-pointer w-full items-center justify-between py-2 text-left text-sm text-black/60 transition-colors hover:text-black ${selectedCategory === category ? "text-black! font-bold" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="border-t border-black/10 pt-5">
        <h3 className="text-base font-bold text-black">Price</h3>
        <div className="mt-5">
          <Slider
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={5}
            value={priceRange}
            onValueChange={(value) => {
              if (value.length === 2) {
                setPriceRange([value[0], value[1]]);
                const params = new URLSearchParams(searchParams);
                params.set("minPrice", String(value[0]));
                params.set("maxPrice", String(value[1]));
                setSearchParams(params);
              }
            }}
          />
          <div className="mt-3 flex justify-between text-xs font-medium text-black">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      <Button className="h-12 w-full py-0" onClick={handleResetFilters}>
        Reset Filters
      </Button>
    </div>
  );
}
