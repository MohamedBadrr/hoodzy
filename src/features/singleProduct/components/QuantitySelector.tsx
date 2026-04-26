import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

export default function QuantitySelector({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-5 rounded-full bg-[#F0F0F0] px-5 py-3">
      <button
        type="button"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        className="cursor-pointer transition-opacity hover:opacity-70"
        aria-label="Decrease quantity"
      >
        <Minus size={18} />
      </button>
      <span className="w-6 text-center font-medium">{quantity}</span>
      <button
        type="button"
        onClick={() => onQuantityChange(quantity + 1)}
        className="cursor-pointer transition-opacity hover:opacity-70"
        aria-label="Increase quantity"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
