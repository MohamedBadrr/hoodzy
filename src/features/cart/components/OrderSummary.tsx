import { Button } from "../../../components/ui/button";
import PromoCodeForm from "./PromoCodeForm";
import { toast } from "sonner";
import { useCartStore } from "../../../store/cartStore";

type OrderSummaryProps = {
  subtotal: number;
  discount: number;
  promoDiscount: number;
  deliveryFee: number;
  total: number;
};

export default function OrderSummary({
  subtotal,
  discount,
  promoDiscount,
  deliveryFee,
  total,
}: OrderSummaryProps) {
  const { clearCart } = useCartStore();
  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
  };
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
        {promoDiscount > 0 && (
          <div className="flex justify-between text-black/60">
            <span>Promo Code</span>
            <span className="font-bold text-red-500">-${promoDiscount}</span>
          </div>
        )}
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

      <Button className="mt-5 h-14 w-full gap-3 py-0" onClick={handleCheckout}>
        Go to Checkout
      </Button>
    </aside>
  );
}
