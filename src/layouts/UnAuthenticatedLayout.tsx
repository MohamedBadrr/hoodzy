import { Navigate, Outlet } from "react-router";

const UnAuthenticatedLayout = () => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" />;
  return <Outlet />;
};

export default UnAuthenticatedLayout;
