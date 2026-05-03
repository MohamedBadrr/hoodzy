import { useMemo } from "react";
import { Link } from "react-router";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";
import { Button } from "../components/ui/button";
import CartItemsList from "../features/cart/components/CartItemsList";
import OrderSummary from "../features/cart/components/OrderSummary";
import { calculateCartTotals, useCartStore } from "../store/cartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);
  const promoCode = useCartStore((state) => state.promoCode);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totals = useMemo(
    () => calculateCartTotals(cartItems, promoCode),
    [cartItems, promoCode],
  );

  return (
    <div className="min-h-screen  pb-25">
      <main className="mx-auto max-w-310 px-4 py-8 sm:px-8 lg:px-0">
        <BreadcrumbTrail
          className="mb-6"
          items={[{ label: "Home", to: "/" }, { label: "Cart" }]}
        />

        <h1 className="font-inter mb-6 text-4xl font-bold text-black">
          YOUR CART
        </h1>

        {cartItems.length === 0 ? (
          <div className="py-20 text-center">
            <p className="mb-6 text-lg text-gray-500">Your cart is empty</p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-10 lg:flex-row">
            <CartItemsList
              items={cartItems}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
            <OrderSummary
              subtotal={totals.subtotal}
              discount={totals.discount}
              promoDiscount={totals.promoDiscount}
              deliveryFee={totals.deliveryFee}
              total={totals.total}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
