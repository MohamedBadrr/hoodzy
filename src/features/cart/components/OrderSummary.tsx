import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import PromoCodeForm from "./PromoCodeForm";

type OrderSummaryProps = {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
};

export default function OrderSummary({
  subtotal,
  discount,
  deliveryFee,
  total,
}: OrderSummaryProps) {
  return (
    <aside className="rounded-[20px] w-full lg:w-1/2 border border-black/10 p-6">
      <h2 className="text-xl font-bold text-black">Order Summary</h2>

      <div className="mt-6 space-y-5">
        <div className="flex justify-between text-black/60">
          <span>Subtotal</span>
          <span className="font-bold text-black">${subtotal}</span>
        </div>
        <div className="flex justify-between text-black/60">
          <span>Discount (-20%)</span>
          <span className="font-bold text-red-500">-${discount}</span>
        </div>
        <div className="flex justify-between text-black/60">
          <span>Delivery Fee</span>
          <span className="font-bold text-black">${deliveryFee}</span>
        </div>

        <hr className="border-black/10" />

        <div className="flex justify-between text-black">
          <span>Total</span>
          <span className="text-2xl font-bold">${total}</span>
        </div>
      </div>

      <PromoCodeForm />

      <Button
        className="mt-5 h-14 w-full gap-3 py-0"
        onClick={() => alert("Checkout functionality coming soon!")}
      >
        Go to Checkout
        <ArrowRight className="size-4" />
      </Button>
    </aside>
  );
}
