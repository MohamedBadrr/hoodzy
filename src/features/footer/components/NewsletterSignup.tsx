import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <section className="my-10 lg:my-0 absolute left-1/2 top-0 w-[calc(100%-2rem)] max-w-310 -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-black px-5 py-7 text-white sm:w-[calc(100%-4rem)] sm:px-8 sm:py-8 md:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-16 lg:py-9">
      <h2 className="font-inter text-[28px] font-bold leading-[1.12] text-balance sm:text-3xl md:max-w-[620px] lg:max-w-140 lg:text-4xl">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <form className="mt-6 flex w-full flex-col gap-3 sm:mt-7 md:max-w-[420px] lg:mt-0 lg:w-87.5">
        <label className="relative block">
          <span className="sr-only">Email address</span>
          <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-black/40" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-11 w-full rounded-full bg-white pl-11 pr-4 text-sm text-black outline-none placeholder:text-black/40 focus:ring-3 focus:ring-white/30 sm:h-12"
          />
        </label>
        <button
          type="submit"
          className="h-11 rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:h-12"
        >
          Subscribe to Newsletter
        </button>
      </form>
    </section>
  );
}
