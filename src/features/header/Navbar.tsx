import { useState } from "react";
import {
  CircleUserRound,
  LogOut,
  Menu,
  Search,
  ShoppingCartIcon,
} from "lucide-react";
import UpperHeader from "./UpperHeader";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { useAuthStore } from "../../store/authStore";
import { links } from "../../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <UpperHeader />
      <header className="border-b border-black/10 bg-white w-full">
        <div className="mx-auto flex max-w-310 items-center justify-between gap-4 px-4 py-5 sm:px-8 lg:px-10 xl:px-0">
          <div className="flex items-center gap-4">
            <Drawer
              open={isMenuOpen}
              onOpenChange={setIsMenuOpen}
              direction="left"
            >
              <DrawerTrigger asChild>
                <button
                  type="button"
                  className="inline-flex size-6 items-center justify-center lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu size={24} />
                </button>
              </DrawerTrigger>

              <DrawerContent className="w-[82vw] max-w-80 rounded-r-[20px] border-r border-black/10 bg-white px-4 pb-6 pt-2 lg:hidden">
                <DrawerHeader className="px-0 text-left">
                  <DrawerTitle className="font-inter text-2xl font-bold text-black">
                    SHOP.CO
                  </DrawerTitle>
                  <DrawerDescription>
                    Browse categories and search products.
                  </DrawerDescription>
                </DrawerHeader>

                <nav className="mt-4 flex flex-col gap-1">
                  {links.map((link) => (
                    <DrawerClose key={link.link} asChild>
                      <Link
                        to={link.link}
                        className="rounded-lg px-2 py-3 text-base font-medium text-black transition-colors hover:bg-[#f0f0f0]"
                      >
                        {link.title}
                      </Link>
                    </DrawerClose>
                  ))}
                </nav>

                <div className="mt-5">
                  <Input
                    className="h-12 bg-[#F0F0F0] text-gray-500"
                    placeholder="Search for products.."
                    icon={<Search className="text-gray-500" size={19} />}
                  />
                </div>
              </DrawerContent>
            </Drawer>

            <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
              <h1 className="font-inter text-2xl font-bold sm:text-3xl">
                SHOP.CO
              </h1>
            </Link>
          </div>

          <nav className="mt-2 hidden items-center justify-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.link}
                className="cursor-pointer text-base transition-all duration-300 hover:scale-105 hover:underline"
                to={link.link}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="mt-2 hidden flex-1 lg:block">
            <Input
              className="h-12 bg-[#F0F0F0] text-gray-500"
              placeholder="Search for products.."
              icon={<Search className="text-gray-500" size={19} />}
            />
          </div>

          <div className="mt-2 flex items-center justify-center gap-3.5">
            <button
              type="button"
              className="lg:hidden"
              aria-label="Search products"
            >
              <Search size={24} />
            </button>
            <Link to="/cart" aria-label="Shopping cart">
              <ShoppingCartIcon
                size={24}
                className="cursor-pointer transition-all duration-200 hover:scale-115"
              />
            </Link>
            {isAuthenticated ? (
              <button
                type="button"
                onClick={handleLogout}
                className="cursor-pointer inline-flex size-6 items-center justify-center transition-all duration-200 hover:scale-115"
                aria-label="Logout"
                title="Logout"
              >
                <LogOut size={24} />
              </button>
            ) : (
              <Link to="/login" aria-label="User account">
                <CircleUserRound className="cursor-pointer transition-all duration-200 hover:scale-115" />
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
