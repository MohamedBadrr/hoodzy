import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import NewsletterSignup from "./NewsletterSignup";
import { footerLinkGroups } from "../data/footerLinks";
import pay from "../../../assets/images/pay.png";
import paypal from "../../../assets/images/paypal.png";
import gpay from "../../../assets/images/gpay.png";
import visa from "../../../assets/images/visa.png";
import goPay from "../../../assets/images/goPay.png";

const socialLinks = [
  { label: "Twitter", icon: Twitter },
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "Github", icon: Github },
];

const payments = [
  { label: "VISA", icon: visa },
  { label: "Mastercard", icon: pay },
  { label: "PayPal", icon: paypal },
  { label: "Apple Pay", icon: goPay },
  { label: "G Pay", icon: gpay },
];

export default function SiteFooter() {
  return (
    <footer className="mt-32 px-4 pb-8 pt-0 sm:mt-28 sm:px-8 md:mt-24 lg:mt-26 lg:px-25">
      <NewsletterSignup />
      <div className="mx-auto max-w-310  ">
        <div className="pt-10 lg:hidden">
          <h2 className="font-inter text-3xl font-bold text-black">SHOP.CO</h2>
          <p className="mt-4 max-w-90 text-sm leading-relaxed text-black/60">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full border border-black/20 bg-white text-black transition-colors hover:bg-black hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid  grid-cols-2 gap-x-5 gap-y-8 pb-10 pt-9 sm:gap-x-10 lg:grid-cols-5 lg:gap-8 lg:pt-12">
          <div className="hidden lg:block">
            <h2 className="font-inter text-3xl font-bold text-black">
              SHOP.CO
            </h2>
            <p className="mt-4 max-w-65 text-sm leading-relaxed text-black/60">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-full border border-black/20 bg-white text-black transition-colors hover:bg-black hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <nav key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-black">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-black/60 transition-colors hover:text-black"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-black/10 py-5 text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <p className="text-sm text-black/60">
            Shop.co &copy; 2000-2023, All Rights Reserved
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 lg:mt-0">
            {payments.map((payment) => (
              <img
                key={payment.label}
                src={payment.icon}
                alt={payment.label}
                className="h-5 w-auto sm:h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
