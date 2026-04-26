import Navbar from "../features/header/Navbar";
import Hero from "../features/home/components/Hero";
import NewArrivals from "../features/home/components/NewArrivals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewArrivals />
    </div>
  );
};

export default Home;
