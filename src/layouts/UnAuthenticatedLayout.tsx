import { Navigate, Outlet, ScrollRestoration } from "react-router";
import Navbar from "../features/header/Navbar";
import SiteFooter from "../features/footer/components/SiteFooter";

const UnAuthenticatedLayout = () => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" />;
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  );
};

export default UnAuthenticatedLayout;
