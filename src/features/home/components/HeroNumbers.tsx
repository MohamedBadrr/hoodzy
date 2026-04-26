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
      increment: number,
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
    <div className="flex items-center justify-center flex-row gap-4 lg:gap-8 px-12.75 lg:px-0 flex-wrap">
      <div>
        <p className="font-bold text-[24px] lg:text-[40px] text-black max-sm:text-center">
          {brands}+
        </p>
        <p className="text-gray-500 text-[12px] lg:text-base text-light">
          International Brands
        </p>
      </div>
      <div className="w-px bg-gray-300 self-stretch"></div>
      <div>
        <p className="font-bold text-[24px] lg:text-[40px] text-black max-sm:text-center">
          {products.toLocaleString()}+
        </p>
        <p className="text-gray-500 text-[12px] lg:text-base text-light">
          High-Quality Products
        </p>
      </div>
      <div className="w-px bg-gray-300 self-stretch"></div>
      <div>
        <p className="font-bold text-[24px] lg:text-[40px] text-black max-sm:text-center">
          {customers.toLocaleString()}+
        </p>
        <p className="text-gray-500 text-light">Happy customer</p>
      </div>
    </div>
  );
};

export default HeroNumbers;
