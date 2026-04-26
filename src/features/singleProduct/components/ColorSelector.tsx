type ProductColor = {
  name: string;
  value: string;
};

type ColorSelectorProps = {
  colors: ProductColor[];
  selectedColor: string;
  onColorChange: (color: string) => void;
};

export default function ColorSelector({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm text-gray-500">Select Color</h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onColorChange(color.name)}
            className={`h-9 w-9 cursor-pointer rounded-full border-2 transition-all ${
              selectedColor === color.name
                ? "scale-110 border-black"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color.value }}
            title={color.name}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
}
