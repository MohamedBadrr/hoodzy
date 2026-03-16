import { CircleUserRound, Search, ShoppingCartIcon } from "lucide-react";
import UpperHeader from "./UpperHeader";
import { Input } from "../../components/ui/input";
import { Link } from "react-router";

const Navbar = () => {
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
    <div>
      <UpperHeader />
      <div className=" my-6 mx-25 items-center flex justify-start ">
        <div className="w-full flex items-center justify-between gap-10 py-3.25 ">
          <Link to={"/"}>
            <h1 className=" text-3xl font-inter font-bold">SHOP.CO</h1>
          </Link>
          {/* links */}
          <div className="gap-6 flex items-center justify-center mt-2">
            {links.map((link) => (
              <Link
                className="text-base cursor-pointer hover:scale-105 hover:underline transition-all duration-300 "
                to={link.link}
              >
                {link.title}
              </Link>
            ))}
          </div>
          {/* search  */}
          <div className="mt-2 flex-1 ">
            <Input
              className="h-12 bg-[#F0F0F0] text-gray-500"
              placeholder="Search for products.."
              icon={<Search className="text-gray-500" size={19} />}
            />
          </div>
          {/* icons */}
          <div className="flex items-center justify-center gap-3.5 mt-2 ">
            <ShoppingCartIcon
              size={24}
              className="cursor-pointer transition-all duration-200 hover:scale-115"
            />
            <CircleUserRound className="cursor-pointer transition-all duration-200 hover:scale-115 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
