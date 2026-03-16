import { useEffect, useState } from "react";

const HeroNumbers = () => {
  const [brands, setBrands] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const animateValue = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      endValue: number,
      duration: number,
      increment: number
    ) => {
      let startValue = 0;
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          setter(endValue);
          clearInterval(timer);
        } else {
          setter(startValue);
        }
      }, duration);

      return timer;
    };
    const brandsTimer = animateValue(setBrands, 200, 40, 10);
    const productsTimer = animateValue(setProducts, 2000, 40, 100);
    const customersTimer = animateValue(setCustomers, 30000, 40, 1000);

    return () => {
      clearInterval(brandsTimer);
      clearInterval(productsTimer);
      clearInterval(customersTimer);
    };
  }, []);
  return (
    <div className="flex flex-row gap-8 flex-wrap">
      <div>
        <p className="font-bold text-[40px] text-black">{brands}+</p>
        <p className="text-gray-500 text-light">International Brands</p>
      </div>
      <div className="w-px bg-gray-300 self-stretch"></div>
      <div>
        <p className="font-bold text-[40px] text-black">
          {products.toLocaleString()}+
        </p>
        <p className="text-gray-500 text-light">High-Quality Products</p>
      </div>
      <div className="w-px bg-gray-300 self-stretch"></div>
      <div>
        <p className="font-bold text-[40px] text-black">
          {customers.toLocaleString()}+
        </p>
        <p className="text-gray-500 text-light">Happy customer</p>
      </div>
    </div>
  );
};

export default HeroNumbers;
