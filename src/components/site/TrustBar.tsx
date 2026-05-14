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
        <div className="mt-10 pt-8 border-t border-ink/10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="md:w-56 shrink-0">
            <div className="font-display text-base font-semibold">
              Accepted Payment Methods
            </div>
          </div>
          <ul
            aria-label="Accepted payment methods"
            className="flex flex-wrap items-center gap-2.5"
          >
            {PAYMENTS.map((p) => (
              <li
                key={p.name}
                title={p.name}
                aria-label={p.name}
                className="inline-flex items-center justify-center rounded-md border border-ink/10 bg-background h-9 w-14"
              >
                <p.Icon
                  aria-hidden
                  className="h-5 w-auto"
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
