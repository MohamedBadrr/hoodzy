import Hero from "../features/home/components/Hero";
import DressStyleBrowser from "../features/home/components/DressStyleBrowser";
import ProductsRecommended from "../features/home/components/ProductsRecommended";
import { newArrivalProducts } from "../constants/products";
import HappyCustomers from "../features/reviews/components/HappyCustomers";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsRecommended newArrivalProducts={newArrivalProducts} />
      <ProductsRecommended
        newArrivalProducts={newArrivalProducts}
        title="TOP SELLING"
      />
      <DressStyleBrowser />
      <HappyCustomers />
    </div>
  );
};

export default Home;
