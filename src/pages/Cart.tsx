import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../features/header/Navbar";
import { Button } from "../components/ui/button";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";
import CartItemsList from "../features/cart/components/CartItemsList";
import OrderSummary from "../features/cart/components/OrderSummary";
import {
  initialCartItems,
  type CartItem,
} from "../features/cart/data/cartItems";

const discountRate = 0.2;
const deliveryFee = 15;

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = Math.round(subtotal * discountRate);
  const total = subtotal - discount + deliveryFee;

  return (
    <div>
      <Navbar />
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
              subtotal={subtotal}
              discount={discount}
              deliveryFee={deliveryFee}
              total={total}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
