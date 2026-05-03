import { Button } from "../../../components/ui/button";
import HeroNumbers from "./HeroNumbers";
import heroImage from "../../../assets/images/HeroIMage.png";
import star from "../../../assets/images/star.png";
import Brands from "./Brands";
const Hero = () => {
  return (
    <>
      <div className="bg-bg w-full flex-col items-center justify-center lg:flex-row ps-4 pe-4 lg:ps-25 lg:pe-10 flex gap-10  ">
        <div className=" flex-1 gap-8 flex-col flex">
          <p className="w-full font-inter font-bold pt-10 lg:pt-25 leading-15 text-[46px] md:text-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className=" text-gray-600 font-light">
            Browse through our diverse range of miticlously crafted garments.
            designed
            <br className="hidden lg:block" /> to bring out to your
            individuality and cater to your sense of style.
          </p>
          <Button className="w-full lg:w-fit">Shop Now</Button>
          <HeroNumbers />
        </div>
        <div className="relative flex flex-1 justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Models wearing SHOP.CO clothing"
            className="w-full max-w-155 object-contain"
          />
          <img
            src={star}
            alt=""
            aria-hidden="true"
            className="absolute right-[3%] top-[7%] h-11 w-11 sm:right-[7%] sm:top-[8%] sm:h-15 sm:w-15 md:h-18 md:w-18 lg:right-[11%] lg:top-[13%] xl:h-24 xl:w-24"
          />
          <img
            src={star}
            alt=""
            aria-hidden="true"
            className="absolute left-[3%] top-[42%] h-7 w-7 sm:left-[8%] sm:h-9 sm:w-9 md:h-11 md:w-11 lg:left-[2%] lg:top-[43%] xl:h-14 xl:w-14"
          />
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Hero;
