import jeans from "../../../assets/images/jeans.png";
import shirt from "../../../assets/images/shirt.png";
import tShirt from "../../../assets/images/t-shirt.png";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
};

export const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    quantity: 1,
    image: tShirt,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    price: 180,
    size: "Medium",
    color: "Red",
    quantity: 1,
    image: shirt,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    quantity: 1,
    image: jeans,
  },
];
