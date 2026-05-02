import { SlidersHorizontal } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import ProductFilters from "./ProductFilters";

export default function ProductFiltersDrawer() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-[#F0F0F0] lg:hidden"
          aria-label="Open product filters"
        >
          <SlidersHorizontal className="size-4" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh] rounded-t-[24px] bg-white px-4 pb-6">
        <DrawerHeader className="px-0 text-left">
          <DrawerTitle className="text-xl font-bold text-black">Filters</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto pb-3">
          <ProductFilters />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
