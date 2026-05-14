import { Truck, ShieldCheck, Sparkles, Star, Lock, RotateCcw } from "lucide-react";

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
    sub: "From 500+ happy customers",
  },
  {
    icon: RotateCcw,
    title: "Easy resolutions",
    sub: "Friendly studio support",
  },
  {
    icon: Lock,
    title: "Secure checkout",
    sub: "PCI-compliant payments",
  },
];

const PAYMENTS = [
  "Visa",
  "Mastercard",
  "American Express",
  "Maestro",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Klarna",
  "Clearpay",
];

export function TrustBar() {
  return (
    <section
      aria-label="Why shop with Maker·Mark"
      className="border-y border-ink/10 bg-card"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-14">
        {/* Trust badges */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
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
            <div className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
              Pay your way
            </div>
            <div className="mt-1 font-display text-base font-semibold">
              Secure UK checkout
            </div>
          </div>
          <ul
            aria-label="Accepted payment methods"
            className="flex flex-wrap items-center gap-2.5"
          >
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="inline-flex items-center rounded-md border border-ink/10 bg-background px-3 py-2 text-xs font-semibold text-foreground/80"
              >
                {p === "PayPal" ? (
                  <>
                    <span className="text-[#003087]">Pay</span>
                    <span className="text-[#0070E0]">Pal</span>
                  </>
                ) : (
                  p
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
