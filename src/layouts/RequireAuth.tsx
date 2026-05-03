import { Navigate, Outlet } from "react-router";

const RequireAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default RequireAuth;
