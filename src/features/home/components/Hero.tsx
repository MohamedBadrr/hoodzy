import { Button } from "../../../components/ui/button";
import HeroNumbers from "./HeroNumbers";
import heroImage from "../../../assets/images/HeroIMage.png";
import star from "../../../assets/images/star.png";
import Brands from "./Brands";
const Hero = () => {
  return (
    <>
      <div className="bg-bg w-full ps-25 pe-10 flex gap-10  justify-start items-start">
        <div className="flex-1 gap-8 flex-col flex">
          <p className="font-inter font-bold pt-25 leading-15 text-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className=" text-gray-600 font-light">
            Browse through our diverse range of miticlously crafted garments.
            designed
            <br /> to bring out to your individuality and cater to your sense of
            style.
          </p>
          <Button className="w-fit">Shop Now</Button>
          {/* numbers */}
          <HeroNumbers />
        </div>
        <div className="flex-1 relative">
          <img src={heroImage} />
          <div className="absolute top-20 right-20">
            <img src={star} />
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
