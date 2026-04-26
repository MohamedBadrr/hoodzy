import { Button } from "../../../components/ui/button";
import StarRating from "../../products/components/StarRating";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";
import SizeSelector from "./SizeSelector";

type ProductInfoProduct = {
  name: string;
  price: number;
  rating: number;
  description: string;
};

type ProductColor = {
  name: string;
  value: string;
};

type ProductInfoProps = {
  product: ProductInfoProduct;
  colors: ProductColor[];
  sizes: string[];
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
};

export default function ProductInfo({
  product,
  colors,
  sizes,
  selectedColor,
  selectedSize,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
  onAddToCart,
}: ProductInfoProps) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <h1 className="font-inter text-3xl font-bold">{product.name}</h1>

      <StarRating
        rating={product.rating}
        className="gap-1.5"
        starClassName="size-4.5"
        labelClassName="text-sm text-gray-500"
      />

      <span className="text-3xl font-extrabold">${product.price}</span>

      <p className="text-base leading-relaxed text-gray-600">
        {product.description}
      </p>

      <hr className="border-gray-200" />

      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={onColorChange}
      />

      <hr className="border-gray-200" />

      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={onSizeChange}
      />

      <hr className="border-gray-200" />

      <div className="flex items-center gap-5">
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
        <Button className="flex-1" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
