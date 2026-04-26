import { useState } from "react";
import { useParams, Link } from "react-router";
import { Star, Minus, Plus, ChevronRight } from "lucide-react";
import Navbar from "../features/header/Navbar";
import { Button } from "../components/ui/button";

const mockProducts = [
  { id: 1, name: "Classic Black T-Shirt", price: 29.99, rating: 4.5, category: "T-Shirts", description: "A timeless classic black t-shirt made from 100% organic cotton. Features a relaxed fit and crew neckline that pairs perfectly with any outfit." },
  { id: 2, name: "Slim Fit Jeans", price: 59.99, rating: 4.2, category: "Jeans", description: "Modern slim fit jeans crafted from premium stretch denim. These jeans offer the perfect balance of comfort and style with a tapered leg." },
  { id: 3, name: "Oversized Hoodie", price: 49.99, rating: 4.8, category: "Hoodies", description: "Ultra-comfortable oversized hoodie made from a soft cotton-polyester blend. Features a kangaroo pocket and adjustable drawstring hood." },
  { id: 4, name: "Leather Jacket", price: 129.99, rating: 4.7, category: "Jackets", description: "Premium faux leather jacket with a classic biker silhouette. Lined interior for extra warmth and multiple zip pockets for functionality." },
  { id: 5, name: "Striped Polo Shirt", price: 34.99, rating: 4.0, category: "T-Shirts", description: "A classic striped polo shirt made from breathable piqué cotton. Perfect for both casual and semi-formal occasions." },
  { id: 6, name: "Cargo Pants", price: 54.99, rating: 4.3, category: "Jeans", description: "Versatile cargo pants with multiple utility pockets. Made from durable cotton twill with a relaxed straight leg fit." },
  { id: 7, name: "Zip-Up Hoodie", price: 44.99, rating: 4.6, category: "Hoodies", description: "Everyday zip-up hoodie with a soft fleece interior. Features split kangaroo pockets and ribbed cuffs for a clean finish." },
  { id: 8, name: "Denim Jacket", price: 89.99, rating: 4.4, category: "Jackets", description: "Classic denim jacket in a medium wash. Made from 100% cotton denim with button closure and chest pockets." },
  { id: 9, name: "Graphic Tee", price: 24.99, rating: 4.1, category: "T-Shirts", description: "Eye-catching graphic tee with a bold modern print. Made from soft ring-spun cotton for all-day comfort." },
  { id: 10, name: "Jogger Pants", price: 39.99, rating: 4.5, category: "Jeans", description: "Comfortable jogger pants with an elastic waistband and tapered ankle cuffs. Perfect for both workouts and casual wear." },
  { id: 11, name: "Pullover Sweater", price: 64.99, rating: 4.3, category: "Hoodies", description: "Cozy pullover sweater knitted from a premium wool blend. Features a ribbed crew neck and relaxed fit for layering." },
  { id: 12, name: "Bomber Jacket", price: 99.99, rating: 4.6, category: "Jackets", description: "Modern bomber jacket with a sleek satin finish. Ribbed collar, cuffs, and hem with a zip-front closure." },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#1e3a5f" },
  { name: "Gray", value: "#808080" },
];

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

  const product = mockProducts.find((p) => p.id === Number(id)) || mockProducts[0];

  return (
    <div>
      <Navbar />
      <div className="mx-25 my-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-black transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-black">{product.name}</span>
        </div>

        <div className="flex gap-12">
          {/* Image Gallery */}
          <div className="flex gap-4 flex-1">
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-[#F0F0F0] rounded-xl flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-black transition-all"
                >
                  <span className="text-gray-400 text-[10px]">Img {i}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#F0F0F0] rounded-2xl flex-1 h-[500px] flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="font-inter font-bold text-3xl">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-sm text-gray-500">{product.rating}/5</span>
            </div>

            {/* Price */}
            <span className="font-bold text-3xl">${product.price}</span>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <hr className="border-gray-200" />

            {/* Color Selector */}
            <div>
              <h3 className="text-sm text-gray-500 mb-3">Select Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer ${
                      selectedColor === color.name
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Size Selector */}
            <div>
              <h3 className="text-sm text-gray-500 mb-3">Choose Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-[#F0F0F0] text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5 bg-[#F0F0F0] rounded-full px-5 py-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <Minus size={18} />
                </button>
                <span className="font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <Plus size={18} />
                </button>
              </div>
              <Button
                className="flex-1"
                onClick={() => alert(`Added ${quantity}x "${product.name}" (${selectedSize}, ${selectedColor}) to cart`)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
