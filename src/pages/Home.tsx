import Navbar from "../features/header/Navbar";
import Hero from "../features/home/components/Hero";
import DressStyleBrowser from "../features/home/components/DressStyleBrowser";
import ProductsRecommended from "../features/home/components/ProductsRecommended";
import { newArrivalProducts } from "../features/products/data/products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsRecommended newArrivalProducts={newArrivalProducts} />
      <ProductsRecommended
        newArrivalProducts={newArrivalProducts}
        title="TOP SELLING"
      />
      <DressStyleBrowser />
    </div>
  );
};

export default Home;
