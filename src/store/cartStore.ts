import { create } from "zustand";
import { persist } from "zustand/middleware";

const DISCOUNT_RATE = 0.2;
const DELIVERY_FEE = 15;

export type CartItem = {
  id: string;
  productId: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
};

export type AddCartItemInput = Omit<CartItem, "id" | "quantity"> & {
  quantity?: number;
};

type CartTotals = {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: AddCartItemInput) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotals: () => CartTotals;
};

const createCartItemId = (item: AddCartItemInput) =>
  `${item.productId}-${item.size.toLowerCase()}-${item.color.toLowerCase()}`;

export const calculateCartTotals = (items: CartItem[]): CartTotals => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = Math.round(subtotal * DISCOUNT_RATE);
  const total = subtotal - discount + DELIVERY_FEE;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    subtotal,
    discount,
    deliveryFee: DELIVERY_FEE,
    total,
    itemCount,
  };
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const id = createCartItemId(item);
        const quantity = Math.max(1, item.quantity ?? 1);
        const existingItem = get().items.find((cartItem) => cartItem.id === id);

        if (existingItem) {
          set({
            items: get().items.map((cartItem) =>
              cartItem.id === id
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem,
            ),
          });
          return;
        }

        set({
          items: [
            ...get().items,
            {
              ...item,
              id,
              quantity,
            },
          ],
        });
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        const nextQuantity = Math.max(1, quantity);

        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity: nextQuantity } : item,
          ),
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
      getTotals: () => calculateCartTotals(get().items),
    }),
    {
      name: "cart",
    },
  ),
);
