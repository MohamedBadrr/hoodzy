type SizeSelectorProps = {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
};

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm text-gray-500">Choose Size</h3>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onSizeChange(size)}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-[#F0F0F0] text-gray-700 hover:bg-gray-200"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
