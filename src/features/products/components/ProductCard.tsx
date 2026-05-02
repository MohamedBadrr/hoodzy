import { Link } from "react-router";
import type { Product } from "../data/products";
import StarRating from "./StarRating";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="group block">
      <article>
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[8px] bg-[#f0eeee]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-3 space-y-1.5">
          <h3 className="truncate text-sm font-bold leading-tight text-black group-hover:underline">
            {product.name}
          </h3>
          <StarRating rating={product.rating} />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xl font-bold leading-none">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl font-bold leading-none text-black/30 line-through">
                ${product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span className="rounded-full bg-red-100 px-3 py-1 text-[10px] font-medium text-red-500">
                -{product.discount}%
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
