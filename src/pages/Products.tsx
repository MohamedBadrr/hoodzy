import { useState } from "react";
import { Link } from "react-router";
import { SlidersHorizontal, Star } from "lucide-react";
import Navbar from "../features/header/Navbar";
import { Button } from "../components/ui/button";

const mockProducts = [
  { id: 1, name: "Classic Black T-Shirt", price: 29.99, rating: 4.5, category: "T-Shirts", image: "" },
  { id: 2, name: "Slim Fit Jeans", price: 59.99, rating: 4.2, category: "Jeans", image: "" },
  { id: 3, name: "Oversized Hoodie", price: 49.99, rating: 4.8, category: "Hoodies", image: "" },
  { id: 4, name: "Leather Jacket", price: 129.99, rating: 4.7, category: "Jackets", image: "" },
  { id: 5, name: "Striped Polo Shirt", price: 34.99, rating: 4.0, category: "T-Shirts", image: "" },
  { id: 6, name: "Cargo Pants", price: 54.99, rating: 4.3, category: "Jeans", image: "" },
  { id: 7, name: "Zip-Up Hoodie", price: 44.99, rating: 4.6, category: "Hoodies", image: "" },
  { id: 8, name: "Denim Jacket", price: 89.99, rating: 4.4, category: "Jackets", image: "" },
  { id: 9, name: "Graphic Tee", price: 24.99, rating: 4.1, category: "T-Shirts", image: "" },
  { id: 10, name: "Jogger Pants", price: 39.99, rating: 4.5, category: "Jeans", image: "" },
  { id: 11, name: "Pullover Sweater", price: 64.99, rating: 4.3, category: "Hoodies", image: "" },
  { id: 12, name: "Bomber Jacket", price: 99.99, rating: 4.6, category: "Jackets", image: "" },
];

const categories = ["All", "T-Shirts", "Jeans", "Hoodies", "Jackets"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? mockProducts
      : mockProducts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="mx-25 my-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-inter font-bold text-4xl">Our Products</h1>
          <div className="flex items-center gap-2 text-gray-500">
            <SlidersHorizontal size={20} />
            <span className="text-sm">
              Showing {filteredProducts.length} of {mockProducts.length} products
            </span>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <div className="w-64 shrink-0">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-black text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <hr className="my-6 border-gray-200" />

              <h3 className="font-semibold text-lg mb-4">Price Range</h3>
              <div className="flex flex-col gap-2">
                {["Under $30", "$30 - $60", "$60 - $100", "Over $100"].map((range) => (
                  <label key={range} className="flex items-center gap-3 cursor-pointer px-4 py-1.5">
                    <input type="checkbox" className="w-4 h-4 accent-black" />
                    <span className="text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Image placeholder */}
                  <div className="bg-[#F0F0F0] h-64 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-base group-hover:underline">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-xl">${product.price}</span>
                      <Button
                        className="!px-6 !py-3 text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Added "${product.name}" to cart`);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
