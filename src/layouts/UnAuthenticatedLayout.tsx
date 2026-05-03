import { Navigate, Outlet } from "react-router";
import Navbar from "../features/header/Navbar";

const UnAuthenticatedLayout = () => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" />;
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default UnAuthenticatedLayout;
