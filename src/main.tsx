import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { Toaster } from "./components/ui/sonner.tsx";
import { useAuthStore } from "./store/authStore.ts";

useAuthStore.getState().initialize();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster visibleToasts={10} />
    <RouterProvider router={router} />
  </StrictMode>,
);
