import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

type ProductImage = {
  name: string;
  src?: string;
};

type ProductGalleryProps = {
  productImages?: ProductImage[];
  imageCount?: number;
  baseImage?: string;
  baseImageAlt?: string;
};

export default function ProductGallery({
  productImages = [],
  imageCount = 3,
  baseImage,
  baseImageAlt = "Product image",
}: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const productImageKey = productImages
    .map((image) => `${image.name}:${image.src ?? ""}`)
    .join("|");

  const galleryItems: ProductImage[] =
    productImages.length > 0
      ? productImages
      : Array.from({ length: imageCount }, (_, index) => ({
          name: `Image ${index + 1}`,
        }));

  const selectedImage =
    selectedImageIndex === null ? null : galleryItems[selectedImageIndex];
  const fullImageSrc = selectedImage?.src ?? baseImage;
  const fullImageAlt = selectedImage?.name ?? baseImageAlt;
  const hasFullImage =
    Boolean(fullImageSrc) &&
    (selectedImageIndex === null || !failedImages[selectedImageIndex]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedImageIndex(null);
    setFailedImages({});
  }, [baseImage, productImageKey]);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="flex flex-1 flex-col-reverse gap-4 md:flex-row">
      <div className="flex flex-row gap-3 lg:flex-col">
        {galleryItems.map((image, index) => {
          const hasImage = Boolean(image.src) && !failedImages[index];

          return (
            <button
              key={`${image.name}-${index}`}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              className={cn(
                "flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 bg-[#F0F0F0] transition-all hover:border-black",
                selectedImageIndex === index
                  ? "border-black"
                  : "border-transparent",
              )}
              aria-label={`Show ${image.name}`}
            >
              {hasImage ? (
                <img
                  src={image.src}
                  alt={image.name}
                  onError={() => handleImageError(index)}
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <span className="text-[10px] text-gray-400">
                  Img {index + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex h-125 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-[#F0F0F0]">
        {hasFullImage ? (
          <img
            src={fullImageSrc}
            alt={fullImageAlt}
            onError={() => {
              if (selectedImageIndex !== null) {
                handleImageError(selectedImageIndex);
              }
            }}
            className="h-full w-full object-contain p-8"
          />
        ) : (
          <span className="text-gray-400">Product Image</span>
        )}
      </div>
    </div>
  );
}
