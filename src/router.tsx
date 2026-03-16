import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Home />,
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
