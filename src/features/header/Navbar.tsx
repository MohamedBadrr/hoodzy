import { useState } from "react";
import {
  CircleUserRound,
  Menu,
  Search,
  ShoppingCartIcon,
  X,
} from "lucide-react";
import UpperHeader from "./UpperHeader";
import { Input } from "../../components/ui/input";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      link: "/shop",
      title: "Shop",
    },
    {
      link: "/sale",
      title: "On Sale",
    },
    {
      link: "/new",
      title: "New Arrivals",
    },
    {
      link: "/brands",
      title: "Brands",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <UpperHeader />
      <header className="border-b border-black/10 bg-white w-full">
        <div className="mx-auto flex max-w-310 items-center justify-between gap-4 px-4 py-5 sm:px-8 lg:px-10 xl:px-0">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex size-6 items-center justify-center lg:hidden"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

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
            <button type="button" aria-label="User account">
              <CircleUserRound className="cursor-pointer transition-all duration-200 hover:scale-115" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-black/10 px-4 pb-5 sm:px-8 lg:hidden">
            <nav className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.link}
                  to={link.link}
                  className="rounded-lg px-2 py-3 text-base font-medium transition-colors hover:bg-[#f0f0f0]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <Input
              className="h-12 bg-[#F0F0F0] text-gray-500"
              placeholder="Search for products.."
              icon={<Search className="text-gray-500" size={19} />}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
