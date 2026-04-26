import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Products />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/new",
    element: <Home />,
  },
  {
    path: "/brands",
    element: <Home />,
  },
]);
