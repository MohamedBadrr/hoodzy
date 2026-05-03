import { useState } from "react";
import { useParams } from "react-router";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";
import ProductGallery from "../features/singleProduct/components/ProductGallery";
import ProductInfo from "../features/singleProduct/components/ProductInfo";
import ProductTabs from "../features/singleProduct/components/ProductTabs";

const mockProducts = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    price: 29.99,
    rating: 4.5,
    category: "T-Shirts",
    description:
      "A timeless classic black t-shirt made from 100% organic cotton. Features a relaxed fit and crew neckline that pairs perfectly with any outfit.",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    rating: 4.2,
    category: "Jeans",
    description:
      "Modern slim fit jeans crafted from premium stretch denim. These jeans offer the perfect balance of comfort and style with a tapered leg.",
  },
  {
    id: 3,
    name: "Oversized Hoodie",
    price: 49.99,
    rating: 4.8,
    category: "Hoodies",
    description:
      "Ultra-comfortable oversized hoodie made from a soft cotton-polyester blend. Features a kangaroo pocket and adjustable drawstring hood.",
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 129.99,
    rating: 4.7,
    category: "Jackets",
    description:
      "Premium faux leather jacket with a classic biker silhouette. Lined interior for extra warmth and multiple zip pockets for functionality.",
  },
  {
    id: 5,
    name: "Striped Polo Shirt",
    price: 34.99,
    rating: 4.0,
    category: "T-Shirts",
    description:
      "A classic striped polo shirt made from breathable piqué cotton. Perfect for both casual and semi-formal occasions.",
  },
  {
    id: 6,
    name: "Cargo Pants",
    price: 54.99,
    rating: 4.3,
    category: "Jeans",
    description:
      "Versatile cargo pants with multiple utility pockets. Made from durable cotton twill with a relaxed straight leg fit.",
  },
  {
    id: 7,
    name: "Zip-Up Hoodie",
    price: 44.99,
    rating: 4.6,
    category: "Hoodies",
    description:
      "Everyday zip-up hoodie with a soft fleece interior. Features split kangaroo pockets and ribbed cuffs for a clean finish.",
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 89.99,
    rating: 4.4,
    category: "Jackets",
    description:
      "Classic denim jacket in a medium wash. Made from 100% cotton denim with button closure and chest pockets.",
  },
  {
    id: 9,
    name: "Graphic Tee",
    price: 24.99,
    rating: 4.1,
    category: "T-Shirts",
    description:
      "Eye-catching graphic tee with a bold modern print. Made from soft ring-spun cotton for all-day comfort.",
  },
  {
    id: 10,
    name: "Jogger Pants",
    price: 39.99,
    rating: 4.5,
    category: "Jeans",
    description:
      "Comfortable jogger pants with an elastic waistband and tapered ankle cuffs. Perfect for both workouts and casual wear.",
  },
  {
    id: 11,
    name: "Pullover Sweater",
    price: 64.99,
    rating: 4.3,
    category: "Hoodies",
    description:
      "Cozy pullover sweater knitted from a premium wool blend. Features a ribbed crew neck and relaxed fit for layering.",
  },
  {
    id: 12,
    name: "Bomber Jacket",
    price: 99.99,
    rating: 4.6,
    category: "Jackets",
    description:
      "Modern bomber jacket with a sleek satin finish. Ribbed collar, cuffs, and hem with a zip-front closure.",
  },
];

const sizes = ["Small", "Medium", "Large", "X-Large"];
const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#1e3a5f" },
  { name: "Gray", value: "#808080" },
];

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("Black");

  const product =
    mockProducts.find((p) => p.id === Number(id)) || mockProducts[0];

  return (
    <div>
      <div className="mx-4 my-5 lg:mx-25 lg:my-10">
        <BreadcrumbTrail
          className="mb-8"
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.name },
          ]}
        />

        <div className="flex gap-10 flex-col lg:flex-row">
          <ProductGallery />

          <ProductInfo
            product={product}
            colors={colors}
            sizes={sizes}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            onColorChange={setSelectedColor}
            onSizeChange={setSelectedSize}
            onQuantityChange={setQuantity}
            onAddToCart={() =>
              alert(
                `Added ${quantity}x "${product.name}" (${selectedSize}, ${selectedColor}) to cart`,
              )
            }
          />
        </div>

        <ProductTabs />
      </div>
    </div>
  );
};

export default SingleProduct;
