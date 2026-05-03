import { Outlet } from "react-router";
import Navbar from "../features/header/Navbar";
import SiteFooter from "../features/footer/components/SiteFooter";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
