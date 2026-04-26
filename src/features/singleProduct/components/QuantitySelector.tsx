import { Minus, Plus } from "lucide-react";
import { cn } from "../../../lib/utils";

type QuantitySelectorProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  className?: string;
  iconSize?: number;
};

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  className,
  iconSize = 18,
}: QuantitySelectorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-5 rounded-full bg-[#F0F0F0] px-5 py-3",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        className="cursor-pointer transition-opacity hover:opacity-70"
        aria-label="Decrease quantity"
      >
        <Minus size={iconSize} />
      </button>
      <span className="w-6 text-center font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => onQuantityChange(quantity + 1)}
        className="cursor-pointer transition-opacity hover:opacity-70"
        aria-label="Increase quantity"
      >
        <Plus size={iconSize} />
      </button>
    </div>
  );
}
