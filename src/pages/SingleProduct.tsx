import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";
import {
  catalogProducts,
  defaultProductSizes,
  mockProducts,
  productColors,
} from "../constants/products";
import ProductGallery from "../features/singleProduct/components/ProductGallery";
import ProductInfo from "../features/singleProduct/components/ProductInfo";
import ProductTabs from "../features/singleProduct/components/ProductTabs";
import { useCartStore } from "../store/cartStore";

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("Black");
  const addItem = useCartStore((state) => state.addItem);

  const product =
    catalogProducts.find((p) => p.id === Number(id)) ?? catalogProducts[0];
  const productSizes = product.sizes ?? defaultProductSizes;
  const activeSelectedSize = productSizes.includes(selectedSize)
    ? selectedSize
    : (productSizes[0] ?? "Medium");
  const productDetails = {
    ...product,
    description:
      mockProducts.find((p) => p.id === product.id)?.description ??
      `A premium ${product.category.toLowerCase()} piece designed for everyday comfort and easy styling.`,
  };

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: activeSelectedSize,
      color: selectedColor,
      quantity,
      image: product.image,
    });

    toast.success("Added to cart");
  };

  return (
    <div className="min-h-screen pb-25">
      <div className="mx-4 my-5 lg:mx-25 lg:my-10">
        <BreadcrumbTrail
          className="mb-8"
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.name },
          ]}
        />

        <div className="flex flex-col gap-10 lg:flex-row">
          <ProductGallery
            baseImage={product.image}
            baseImageAlt={product.name}
            productImages={product.images || []}
          />

          <ProductInfo
            product={productDetails}
            colors={productColors}
            sizes={productSizes}
            selectedColor={selectedColor}
            selectedSize={activeSelectedSize}
            quantity={quantity}
            onColorChange={setSelectedColor}
            onSizeChange={setSelectedSize}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>

        <ProductTabs />
      </div>
    </div>
  );
};

export default SingleProduct;
