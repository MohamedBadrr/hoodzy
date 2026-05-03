import { Outlet } from "react-router";

const AuthenticatedLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      {/* <SiteFooter /> */}
    </div>
  );
};

export default AuthenticatedLayout;
