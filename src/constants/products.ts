import blackShirt from "../assets/images/black-shirt.png";
import jeans from "../assets/images/jeans.png";
import shirt from "../assets/images/shirt.png";
import tShirt from "../assets/images/t-shirt.png";
import type { Product } from "../features/products/data/products";

export const defaultProductSizes = ["Small", "Medium", "Large", "X-Large"];
export const denimProductSizes = ["28", "30", "32", "34", "36"];

export const productColors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy", value: "#1e3a5f" },
  { name: "Gray", value: "#808080" },
];

export const catalogProducts: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: 242,
    discount: 20,
    rating: 3.5,
    image: tShirt,
    category: "T-shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Gradient Graphic T-shirt", src: tShirt },
      { name: "Black T-shirt variation", src: blackShirt },
      { name: "Classic shirt variation", src: shirt },
    ],
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    originalPrice: 242,
    discount: 20,
    rating: 4.5,
    image: shirt,
    category: "T-shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Polo with Tipping Details", src: shirt },
      { name: "Black polo variation", src: blackShirt },
      { name: "Graphic tee variation", src: tShirt },
    ],
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5,
    image: blackShirt,
    category: "T-shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Black Striped T-shirt", src: blackShirt },
      { name: "Graphic tee variation", src: tShirt },
      { name: "Classic shirt variation", src: shirt },
    ],
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: jeans,
    category: "Jeans",
    sizes: denimProductSizes,
    images: [
      { name: "Skinny Fit Jeans", src: jeans },
      { name: "Jeans front view", src: jeans },
      { name: "Jeans detail view", src: jeans },
    ],
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: shirt,
    category: "Shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Checkered Shirt", src: shirt },
      { name: "Black shirt variation", src: blackShirt },
      { name: "Graphic tee variation", src: tShirt },
    ],
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: tShirt,
    category: "T-shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Sleeve Striped T-shirt", src: tShirt },
      { name: "Black T-shirt variation", src: blackShirt },
      { name: "Classic shirt variation", src: shirt },
    ],
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5,
    image: shirt,
    category: "Shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Vertical Striped Shirt", src: shirt },
      { name: "Black shirt variation", src: blackShirt },
      { name: "Graphic tee variation", src: tShirt },
    ],
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4,
    image: tShirt,
    category: "T-shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Courage Graphic T-shirt", src: tShirt },
      { name: "Black T-shirt variation", src: blackShirt },
      { name: "Classic shirt variation", src: shirt },
    ],
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3,
    image: jeans,
    category: "Shorts",
    sizes: denimProductSizes,
    images: [
      { name: "Loose Fit Bermuda Shorts", src: jeans },
      { name: "Denim shorts front view", src: jeans },
      { name: "Denim shorts detail view", src: jeans },
    ],
  },
];

export const newArrivalProducts: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: blackShirt,
    category: "T-Shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "T-shirt with Tape Details", src: blackShirt },
      { name: "Graphic tee variation", src: tShirt },
      { name: "Classic shirt variation", src: shirt },
    ],
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: jeans,
    category: "Jeans",
    sizes: denimProductSizes,
    images: [
      { name: "Skinny Fit Jeans", src: jeans },
      { name: "Jeans front view", src: jeans },
      { name: "Jeans detail view", src: jeans },
    ],
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: shirt,
    category: "Shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Checkered Shirt", src: shirt },
      { name: "Black shirt variation", src: blackShirt },
      { name: "Graphic tee variation", src: tShirt },
    ],
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: tShirt,
    category: "T-Shirts",
    sizes: defaultProductSizes,
    images: [
      { name: "Sleeve Striped T-shirt", src: tShirt },
      { name: "Black T-shirt variation", src: blackShirt },
      { name: "Classic shirt variation", src: shirt },
    ],
  },
];

export const mockProducts = [
  {
    id: 1,
    description:
      "A standout graphic t-shirt made with soft cotton and a clean everyday fit.",
  },
  {
    id: 2,
    description:
      "A polished polo-style top with tipping details for smart casual outfits.",
  },
  {
    id: 3,
    description:
      "A black striped t-shirt with a comfortable feel and easy layering shape.",
  },
  {
    id: 4,
    description:
      "Skinny fit jeans made from durable stretch denim with a sharp tapered leg.",
  },
  {
    id: 5,
    description:
      "A checkered shirt with a relaxed structure, breathable fabric, and timeless pattern.",
  },
  {
    id: 6,
    description:
      "A sleeve striped t-shirt with a clean casual profile and soft daily comfort.",
  },
  {
    id: 7,
    description:
      "A vertical striped shirt with a crisp look that works for casual and semi-formal outfits.",
  },
  {
    id: 8,
    description:
      "A bold graphic t-shirt built for easy styling and all-day comfort.",
  },
  {
    id: 9,
    description:
      "Loose fit denim shorts with a relaxed shape for warm-weather casual wear.",
  },
];
