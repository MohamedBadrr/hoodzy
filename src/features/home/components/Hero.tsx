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
        <div className="flex-1 relative">
          <img src={heroImage} />
          <div className="absolute  top-5 md:top-20  right-0 md:right-20">
            <img className="max-sm:w-3/4 max-sm:h-3/4" src={star} />
          </div>{" "}
          <div className="absolute top-[40%] left-0">
            <img className="w-1/2 h-1/2" src={star} />
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Hero;
