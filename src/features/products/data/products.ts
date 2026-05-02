import blackShirt from "../../../assets/images/black-shirt.png";
import jeans from "../../../assets/images/jeans.png";
import shirt from "../../../assets/images/shirt.png";
import tShirt from "../../../assets/images/t-shirt.png";

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  category: string;
};

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
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    originalPrice: 242,
    discount: 20,
    rating: 4.5,
    image: blackShirt,
    category: "T-shirts",
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
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: shirt,
    category: "Shirts",
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
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4,
    image: tShirt,
    category: "T-shirts",
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3,
    image: jeans,
    category: "Shorts",
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
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: shirt,
    category: "Shirts",
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
  },
];
