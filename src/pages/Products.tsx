import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";
import ProductCatalogHeader from "../features/products/components/ProductCatalogHeader";
import ProductFilters from "../features/products/components/ProductFilters";
import ProductGrid from "../features/products/components/ProductGrid";
import ProductPagination from "../features/products/components/ProductPagination";
import { catalogProducts } from "../constants/products";
import { routeLabels } from "../constants";

const Products = () => {
  const { pathname } = useLocation();
  const pageLabel = routeLabels[pathname] ?? "Products";
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search")?.trim() ?? "";
  const category = searchParams.get("category");
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 500;
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const filteredProducts = useMemo(() => {
    const normalizedCategory = category?.toLowerCase();

    return catalogProducts.filter((product) => {
      const matchesSearch =
        !normalizedSearchTerm ||
        [product.name, product.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearchTerm);

      const matchesCategory =
        !normalizedCategory ||
        product.category.toLowerCase() === normalizedCategory;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [normalizedSearchTerm, category, minPrice, maxPrice]);
  const title = searchTerm ? `Search results for "${searchTerm}"` : pageLabel;

  return (
    <div>
      <main className="mx-auto max-w-310 px-4 py-6 sm:px-8 lg:px-0">
        <BreadcrumbTrail
          className="mb-5"
          items={[{ label: "Home", to: "/" }, { label: pageLabel }]}
        />

        <div className="grid gap-6 lg:grid-cols-[295px_1fr]">
          <aside className="hidden h-fit rounded-[20px] border border-black/10 p-6 lg:block">
            <ProductFilters />
          </aside>

          <section>
            <ProductCatalogHeader
              title={title}
              total={filteredProducts.length}
            />
            {filteredProducts.length > 0 ? (
              <>
                <ProductGrid products={filteredProducts} />
                <ProductPagination />
              </>
            ) : (
              <div className="rounded-[20px] border border-black/10 px-6 py-16 text-center">
                <h2 className="text-xl font-bold text-black">
                  No products found
                </h2>
                <p className="mt-2 text-sm text-black/60">
                  Try searching for another product name or category.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Products;
