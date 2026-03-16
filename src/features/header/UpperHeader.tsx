import { X } from "lucide-react";
const UpperHeader = () => {
  return (
    <div className="bg-black min-h-9.5 flex items-center justify-center">
      <div className="flex gap-5 items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-white text-sm">
            Sign up and get 20% off to your first order.
          </p>
          <p className="text-white text-sm underline cursor-pointer hover:scale-105">
            Sign Up Now
          </p>
        </div>
        <X className="" size={15} />
      </div>
    </div>
  );
};

export default UpperHeader;
