import CartItemCard from "./CartItemCard";
import type { CartItem } from "../../../store/cartStore";

type CartItemsListProps = {
  items: CartItem[];
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export default function CartItemsList({
  items,
  onQuantityChange,
  onRemove,
}: CartItemsListProps) {
  return (
    <div className="rounded-[20px] w-full lg:w-1/2  h-fit border border-black/10 px-5 py-5">
      <div className="divide-y divide-black/10">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
