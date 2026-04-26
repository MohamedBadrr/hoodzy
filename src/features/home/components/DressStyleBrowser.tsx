import { cn } from "../../../lib/utils";
import { dressStyles } from "../data/dressStyles";

export default function DressStyleBrowser() {
  return (
    <section className="bg-white px-4 py-10 sm:px-8 lg:px-25 lg:py-16">
      <div className="mx-auto max-w-310 rounded-[20px] bg-[#f0f0f0] px-4 py-8 sm:px-10 lg:rounded-[40px] lg:px-14 lg:py-14">
        <h2 className="font-inter mx-auto max-w-155 text-center text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="mt-6 grid gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-3">
          {dressStyles.map((style) => (
            <div
              key={style.title}
              className={cn(
                "relative h-47.5 overflow-hidden rounded-[8px] bg-white sm:h-47.5 lg:h-72.5",
                style.className,
              )}
            >
              <img
                src={style.image}
                alt={`${style.title} style`}
                className={cn("absolute inset-0 h-full w-full ")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
