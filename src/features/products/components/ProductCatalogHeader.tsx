import ProductFiltersDrawer from "./ProductFiltersDrawer";

type ProductCatalogHeaderProps = {
  title: string;
  total: number;
};

export default function ProductCatalogHeader({
  title,
  total,
}: ProductCatalogHeaderProps) {
  const visibleCount = Math.min(10, total);

  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-black sm:text-3xl">{title}</h1>
      </div>

      <div className="flex items-center gap-3 text-sm text-black/60">
        <span className="hidden sm:inline">
          Showing {visibleCount === 0 ? 0 : 1}-{visibleCount} of {total} Products
        </span>
        <span className="hidden md:inline">
          Sort by: <span className="font-medium text-black">Most Popular</span>
        </span>
        <ProductFiltersDrawer />
      </div>
    </div>
  );
}
