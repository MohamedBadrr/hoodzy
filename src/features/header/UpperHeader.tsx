import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
const UpperHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="bg-black min-h-9.5 flex items-center justify-center w-full ">
      <div className="flex gap-5 items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-white text-sm text-center">
            Sign up and get 20% off to your first order.
          </p>
          <Link to="/register">
            <p className="text-white text-sm underline text-center cursor-pointer hover:scale-105">
              Sign Up Now
            </p>
          </Link>
        </div>
        <X
          onClick={() => {
            setIsVisible(false);
          }}
          className="text-white cursor-pointer hover:scale-105"
          size={15}
        />
      </div>
    </div>
  );
};

export default UpperHeader;
