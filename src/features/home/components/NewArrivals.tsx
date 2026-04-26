import { Link } from "react-router";
import { Button } from "../../../components/ui/button";
import ProductCard from "../../products/components/ProductCard";
import { newArrivalProducts } from "../../products/data/products";

export default function NewArrivals() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-25">
      <div className="mx-auto max-w-[1240px] border-b border-black/10 pb-10">
        <h2 className="font-inter text-center text-3xl font-bold leading-none text-black sm:text-4xl mt-5 mb-3">
          NEW ARRIVALS
        </h2>

        <div className="mt-9 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-4">
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-11 min-w-38 rounded-full border-black/10 bg-white px-10 py-0 text-sm text-black hover:bg-black hover:text-white"
          >
            <Link to="/products">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
