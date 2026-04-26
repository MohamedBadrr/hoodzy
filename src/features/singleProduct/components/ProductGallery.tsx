type ProductGalleryProps = {
  imageCount?: number;
};

export default function ProductGallery({
  imageCount = 3,
}: ProductGalleryProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-1 gap-4">
      <div className="flex  flex-row lg:flex-col gap-3">
        {Array.from({ length: imageCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl border-2 border-transparent bg-[#F0F0F0] transition-all hover:border-black"
          >
            <span className="text-[10px] text-gray-400">Img {index + 1}</span>
          </button>
        ))}
      </div>
      <div className="flex h-125 flex-1 items-center justify-center rounded-2xl bg-[#F0F0F0]">
        <span className="text-gray-400">Product Image</span>
      </div>
    </div>
  );
}
