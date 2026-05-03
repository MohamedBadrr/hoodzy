import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UnAuthenticatedLayout from "./layouts/UnAuthenticatedLayout";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import RequireAuth from "./layouts/RequireAuth";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Products />,
      },
      {
        path: "/sale",
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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/new",
        element: <Products />,
      },
      {
        path: "/brands",
        element: <Products />,
      },
    ],
  },
  {
    element: <UnAuthenticatedLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AuthenticatedLayout />,
        children: [
          {
            element: <Cart />,
            path: "/cart",
          },
        ],
      },
    ],
  },
]);
