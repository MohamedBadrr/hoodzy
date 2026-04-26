import { Trash2 } from "lucide-react";
import QuantitySelector from "../../singleProduct/components/QuantitySelector";
import type { CartItem } from "../data/cartItems";

type CartItemCardProps = {
  item: CartItem;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

export default function CartItemCard({
  item,
  onQuantityChange,
  onRemove,
}: CartItemCardProps) {
  return (
    <article className="flex gap-4 py-5 first:pt-0 last:pb-0">
      <div className="flex size-31 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F0F0F0] sm:size-28">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-black">
              {item.name}
            </h3>
            <p className="mt-1 text-xs text-black">
              Size: <span className="text-black/60">{item.size}</span>
            </p>
            <p className="text-xs text-black">
              Color: <span className="text-black/60">{item.color}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="shrink-0 cursor-pointer text-red-500 transition-colors hover:text-red-700"
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <span className="text-2xl font-bold text-black">${item.price}</span>
          <QuantitySelector
            quantity={item.quantity}
            onQuantityChange={(quantity) => onQuantityChange(item.id, quantity)}
            className="gap-4 px-4 py-2"
            iconSize={16}
          />
        </div>
      </div>
    </article>
  );
}
