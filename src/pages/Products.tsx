import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";
import ProductCatalogHeader from "../features/products/components/ProductCatalogHeader";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductGrid from "../features/products/components/ProductGrid";
import ProductPagination from "../features/products/components/ProductPagination";
import { catalogProducts } from "../features/products/data/products";

const Products = () => {
  return (
    <div>
      <main className="mx-auto max-w-310 px-4 py-6 sm:px-8 lg:px-0">
        <BreadcrumbTrail
          className="mb-5"
          items={[{ label: "Home", to: "/" }, { label: "Casual" }]}
        />

        <div className="grid gap-6 lg:grid-cols-[295px_1fr]">
          <aside className="hidden h-fit rounded-[20px] border border-black/10 p-6 lg:block">
            <ProductFilters />
          </aside>

          <section>
            <ProductCatalogHeader
              title="Casual"
              total={catalogProducts.length * 11}
            />
            <ProductGrid products={catalogProducts} />
            <ProductPagination />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Products;
