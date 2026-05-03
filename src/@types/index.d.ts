 type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  category: string;
};

interface User {
  id: string | number;
  name: string;
  email: string;
  [key: string]: unknown;
}
