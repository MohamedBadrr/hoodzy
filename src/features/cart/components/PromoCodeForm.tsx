import { Tag } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function PromoCodeForm() {
  return (
    <form className="mt-5 flex gap-3">
      <label className="relative flex min-w-0 flex-1 items-center">
        <span className="sr-only">Promo code</span>
        <Tag className="absolute left-4 size-4 text-black/40" />
        <input
          type="text"
          placeholder="Add promo code"
          className="h-12 w-full rounded-full bg-[#F0F0F0] pl-11 pr-4 text-sm outline-none placeholder:text-black/40"
        />
      </label>
      <Button type="submit" className="h-10 px-7 py-0">
        Apply
      </Button>
    </form>
  );
}
