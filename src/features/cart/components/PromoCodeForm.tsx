import { Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../../../components/ui/button";
import { PROMO_CODE, useCartStore } from "../../../store/cartStore";

export default function PromoCodeForm() {
  const [code, setCode] = useState("");
  const promoCode = useCartStore((state) => state.promoCode);
  const applyPromoCode = useCartStore((state) => state.applyPromoCode);
  const removePromoCode = useCartStore((state) => state.removePromoCode);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (applyPromoCode(code)) {
      toast.success("Promo code applied");
      setCode("");
      return;
    }

    toast.error("Invalid promo code");
  };

  const handleRemovePromoCode = () => {
    removePromoCode();
    toast.success("Promo code removed");
  };

  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <label className="relative flex min-w-0 flex-1 items-center">
        <span className="sr-only">Promo code</span>
        <Tag className="absolute left-4 size-4 text-black/40" />
        <input
          type="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder={PROMO_CODE}
          disabled={Boolean(promoCode)}
          className="h-12 w-full rounded-full bg-[#F0F0F0] pl-11 pr-4 text-sm outline-none placeholder:text-black/40"
        />
      </label>
      {promoCode ? (
        <Button
          type="button"
          variant="outline"
          className="h-10 px-7 py-0"
          onClick={handleRemovePromoCode}
        >
          Remove
        </Button>
      ) : (
        <Button
          type="submit"
          disabled={!code.trim()}
          className="h-10 px-7 py-0"
        >
          Apply
        </Button>
      )}
    </form>
  );
}
