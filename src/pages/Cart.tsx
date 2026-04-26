import { useState } from "react";
import { Link } from "react-router";
import { Trash2, Minus, Plus, ChevronRight, Tag } from "lucide-react";
import Navbar from "../features/header/Navbar";
import { Button } from "../components/ui/button";

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  { id: 1, name: "Classic Black T-Shirt", price: 29.99, size: "M", color: "Black", quantity: 2 },
  { id: 3, name: "Oversized Hoodie", price: 49.99, size: "L", color: "Gray", quantity: 1 },
  { id: 4, name: "Leather Jacket", price: 129.99, size: "M", color: "Black", quantity: 1 },
  { id: 10, name: "Jogger Pants", price: 39.99, size: "L", color: "Navy", quantity: 1 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div>
      <Navbar />
      <div className="mx-25 my-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-black">Cart</span>
        </div>

        <h1 className="font-inter font-bold text-4xl mb-8">YOUR CART</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-10">
            {/* Cart Items */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="border border-gray-200 rounded-2xl divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-5 p-5">
                    {/* Image placeholder */}
                    <div className="w-28 h-28 bg-[#F0F0F0] rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-gray-400 text-xs">Image</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-base">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Size: {item.size} &nbsp;|&nbsp; Color: {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer p-1"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-xl">${(item.price * item.quantity).toFixed(2)}</span>
                        <div className="flex items-center gap-4 bg-[#F0F0F0] rounded-full px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="cursor-pointer hover:opacity-70 transition-opacity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-medium w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="cursor-pointer hover:opacity-70 transition-opacity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-96 shrink-0">
              <div className="border border-gray-200 rounded-2xl p-6">
                <h2 className="font-semibold text-xl mb-6">Order Summary</h2>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-black">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-black">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-green-600">Free shipping on orders over $100!</p>
                  )}

                  <hr className="border-gray-200" />

                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="flex gap-3 mt-6">
                  <div className="flex-1 flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-3">
                    <Tag size={16} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="bg-transparent outline-none text-sm flex-1"
                    />
                  </div>
                  <Button className="!px-8">Apply</Button>
                </div>

                <Button
                  className="w-full mt-6"
                  onClick={() => alert("Checkout functionality coming soon!")}
                >
                  Go to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
