import { Truck, Sparkles, Star, Lock } from "lucide-react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcApplePay,
  FaGooglePay,
} from "react-icons/fa6";
import { SiKlarna, SiAfterpay } from "react-icons/si";
import type { IconType } from "react-icons";

const BADGES = [
  {
    icon: Truck,
    title: "Free UK delivery",
    sub: "On orders over £50",
  },
  {
    icon: Sparkles,
    title: "Hand-finished in the UK",
    sub: "Made-to-order in Birmingham",
  },
  {
    icon: Star,
    title: "Rated Excellent",
    sub: "From 1000+ happy customers",
  },
  {
    icon: Lock,
    title: "Secure checkout",
    sub: "All major debit and credit cards accepted",
  },
];

const PAYMENTS: { name: string; Icon: IconType; color: string }[] = [
  { name: "Visa", Icon: FaCcVisa, color: "#1A1F71" },
  { name: "Mastercard", Icon: FaCcMastercard, color: "#EB001B" },
  { name: "American Express", Icon: FaCcAmex, color: "#2E77BC" },
  { name: "PayPal", Icon: FaCcPaypal, color: "#003087" },
  { name: "Apple Pay", Icon: FaCcApplePay, color: "#000000" },
  { name: "Google Pay", Icon: FaGooglePay, color: "#5F6368" },
  { name: "Klarna", Icon: SiKlarna, color: "#FFA8CD" },
  { name: "Clearpay", Icon: SiAfterpay, color: "#B2FCE4" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Why shop with Maker·Mark"
      className="border-y border-ink/10 bg-card"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-14">
        {/* Trust badges */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {BADGES.map((b) => (
            <li
              key={b.title}
              className="flex items-start gap-3 rounded-xl border border-ink/5 bg-background/60 p-4"
            >
              <span className="inline-flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary shrink-0">
                <b.icon className="size-4.5" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-sm font-semibold leading-tight">
                  {b.title}
                </div>
                <div className="text-xs text-foreground/65 mt-0.5">{b.sub}</div>
              </div>
            </li>
          ))}
        </ul>

        {/* Payments */}
        <div className="mt-10 pt-8 border-t border-ink/10">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-[11px] tracking-[0.24em] uppercase text-primary font-semibold">
              Secure Checkout
            </span>
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
              Accepted Payment Methods
            </h3>
            <p className="text-xs md:text-sm text-foreground/60 max-w-md">
              Pay your way — all major debit and credit cards, wallets and buy-now-pay-later options.
            </p>
          </div>
          <ul
            aria-label="Accepted payment methods"
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {PAYMENTS.map((p) => (
              <li
                key={p.name}
                title={p.name}
                aria-label={p.name}
                className="group inline-flex items-center justify-center rounded-xl border border-ink/10 bg-background h-14 w-20 shadow-[0_1px_0_rgba(0,0,0,0.02),0_4px_12px_-6px_rgba(0,0,0,0.12)] hover:shadow-[0_2px_0_rgba(0,0,0,0.03),0_10px_24px_-10px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <p.Icon
                  aria-hidden
                  className="h-7 w-auto transition-transform duration-200 group-hover:scale-105"
                  style={{ color: p.color }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
