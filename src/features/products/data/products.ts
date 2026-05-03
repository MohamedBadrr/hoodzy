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
  sizes?: string[];
  images?: {
    name: string;
    src: string;
  }[];
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
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
   ],
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
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
    sizes: ["28", "30", "32", "34", "36"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
   ],
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: shirt,
    category: "Shirts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
   ],
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4,
    image: tShirt,
    category: "T-shirts",
    sizes: ["Small", "Medium", "Large", "X-Large"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
   ],
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3,
    image: jeans,
    category: "Shorts",
    sizes: ["28", "30", "32", "34", "36"],
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
    images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
   ],
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: shirt,
    category: "Shirts",
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
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
        images: [
      {
        name:"image1",
        src:blackShirt
      },
      {
        name:"image2",
        src:shirt
      },
      {
        name:"image3",
        src:shirt
      },
   ],
  },
];
