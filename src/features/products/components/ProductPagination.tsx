import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProductPagination() {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
      <button
        type="button"
        className="flex h-9 items-center gap-2 rounded-lg border border-black/10 px-3 text-sm font-medium text-black"
      >
        <ArrowLeft className="size-4" />
        Previous
      </button>

      <div className="hidden items-center gap-1 text-sm text-black/50 sm:flex">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            type="button"
            className={`size-9 rounded-lg ${
              page === 1 ? "bg-[#F0F0F0] text-black" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <span className="px-2">...</span>
        <button type="button" className="size-9 rounded-lg">
          8
        </button>
        <button type="button" className="size-9 rounded-lg">
          9
        </button>
        <button type="button" className="size-9 rounded-lg">
          10
        </button>
      </div>

      <button
        type="button"
        className="flex h-9 items-center gap-2 rounded-lg border border-black/10 px-3 text-sm font-medium text-black"
      >
        Next
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
