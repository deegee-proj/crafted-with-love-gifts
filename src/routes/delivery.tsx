import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Truck,
  PackageCheck,
  Clock,
  Sparkles,
  Gift,
  Zap,
  MapPin,
  AlertCircle,
} from "lucide-react";

const TITLE = "Delivery Information — Maker·Mark";
const DESCRIPTION =
  "Production and delivery times, UK shipping options and pricing for personalised gifts hand-finished by Maker·Mark.";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/delivery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/delivery" }],
  }),
  component: DeliveryPage,
});

const OPTIONS = [
  {
    icon: Gift,
    name: "Free UK Delivery",
    best: "Orders over £50",
    eta: "Delivery option shown at checkout",
    price: "Free",
    accent: "from-primary/15 to-primary/0",
  },
  {
    icon: Truck,
    name: "Tracked 48",
    best: "Planned gifting & best value",
    eta: "Usually 2 working days after dispatch",
    price: "From £2.78",
    accent: "from-accent/15 to-accent/0",
  },
  {
    icon: PackageCheck,
    name: "Tracked 24",
    best: "Faster arrival after production",
    eta: "Usually 1 working day after dispatch",
    price: "From £3.34",
    accent: "from-primary/15 to-primary/0",
  },
  {
    icon: Sparkles,
    name: "Tracked Premium",
    best: "Added tracking & peace of mind",
    eta: "Tracked service after dispatch",
    price: "From £6.84",
    accent: "from-accent/15 to-accent/0",
  },
  {
    icon: Zap,
    name: "Next Day Express",
    best: "Urgent gifts & qualifying orders",
    eta: "Guaranteed next day after production",
    price: "From £8.76",
    accent: "from-primary/20 to-primary/0",
    featured: true,
  },
];

function DeliveryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ink/5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(55% 55% at 15% 15%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(45% 45% at 85% 25%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <Truck className="size-3.5" /> Delivery information
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Made to order, dispatched with care.
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                Personalised gifts are often bought for the moments that matter most, so we
                produce and dispatch every order as quickly as we can — without cutting corners
                on the bit that makes it special.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-ink/10 bg-card/70 backdrop-blur p-5 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-primary" />
                  <div className="font-display text-lg font-semibold">Your order timeframe</div>
                </div>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                  Most personalised products are produced within{" "}
                  <span className="font-semibold text-foreground">24–48 hours</span>, then your
                  chosen delivery service begins after dispatch.
                </p>
                <div className="mt-4 rounded-xl bg-background/70 border border-ink/5 px-4 py-3 text-center font-display text-base">
                  Production time <span className="text-primary">+</span> Delivery time
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro detail */}
        <section className="max-w-[1400px] mx-auto px-6 py-14 md:py-20 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: "Hand-finished first",
              body: "Most personalised products are produced within 24–48 hours before dispatch. Once produced, you choose from the delivery options at checkout.",
            },
            {
              icon: Clock,
              title: "Times start after dispatch",
              body: "Delivery times begin after production and dispatch — not from the moment your order is placed.",
            },
            {
              icon: AlertCircle,
              title: "Peak season notice",
              body: "Around Christmas, Valentine's, Mother's Day and Father's Day production may run longer. Order early during peak periods.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-ink/10 bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <c.icon className="size-5 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </section>

        {/* Delivery options */}
        <section className="max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Choose at checkout
              </span>
              <h2 className="mt-2 font-display text-2xl md:text-4xl font-semibold tracking-tight">
                Delivery options
              </h2>
            </div>
            <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase text-muted-foreground">
              UK shipping
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {OPTIONS.map((o) => (
              <article
                key={o.name}
                className={`relative rounded-2xl border p-6 overflow-hidden transition-all ${
                  o.featured
                    ? "border-primary/40 bg-card shadow-[var(--shadow-soft)] lg:col-span-1"
                    : "border-ink/10 bg-card hover:border-primary/30"
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${o.accent} opacity-100`}
                />
                {o.featured && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-[0.22em] uppercase font-semibold text-primary">
                    Express
                  </span>
                )}
                <o.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {o.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/70">{o.best}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground font-semibold">
                      Estimated arrival
                    </dt>
                    <dd className="mt-1 text-foreground/85">{o.eta}</dd>
                  </div>
                  <div className="pt-3 border-t border-ink/5 flex items-baseline justify-between">
                    <dt className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground font-semibold">
                      Price
                    </dt>
                    <dd className="font-display text-lg font-semibold">{o.price}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* Production time */}
        <section className="border-y border-ink/5 bg-card/40">
          <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Production time
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                The careful bit comes first.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Most personalised products are produced within 24–48 hours. Some items take
                longer depending on the design, level of personalisation, order volume,
                seasonal demand or whether additional checks are required.
              </p>
              <p>
                During busy gifting seasons production times may extend. We recommend ordering
                as early as possible to allow enough time for personalisation, production and
                delivery.
              </p>
              <div className="rounded-xl border border-ink/10 bg-background p-5">
                <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground font-semibold">
                  Worked example
                </div>
                <p className="mt-2 text-sm">
                  If your product takes 24–48 hours to produce and you select{" "}
                  <span className="font-semibold">Tracked 24</span>, the Tracked 24 timeframe
                  begins once your order has been produced and dispatched.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free + Express */}
        <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-ink/10 bg-card p-7 md:p-9">
            <Gift className="size-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
              Free UK delivery
            </h3>
            <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
              We offer free UK delivery on orders over £50. The available free delivery option
              will be shown at checkout once your order qualifies.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-card p-7 md:p-9 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 80% 20%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
              }}
            />
            <Zap className="size-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
              Next Day Express
            </h3>
            <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
              Available on qualifying orders only and must be selected at checkout where
              available. Eligible orders must be placed{" "}
              <span className="font-semibold text-foreground">before 12 midday</span>. Your
              order is produced first, then dispatched on a guaranteed next-working-day
              service.
            </p>
          </div>
        </section>

        {/* Important notes */}
        <section className="max-w-[1400px] mx-auto px-6 pb-20 md:pb-28">
          <div className="rounded-3xl border border-ink/10 bg-ink text-cream p-8 md:p-12 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Please note
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Important delivery notes
              </h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl bg-cream/5 border border-cream/10 p-5">
                <AlertCircle className="size-5 text-primary" />
                <h4 className="mt-3 font-display text-lg font-semibold">Estimates, not guarantees</h4>
                <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                  Times are a guide and may be affected by busy seasons, bank holidays, Royal
                  Mail delays, adverse weather or circumstances outside our control.
                </p>
              </div>
              <div className="rounded-xl bg-cream/5 border border-cream/10 p-5">
                <MapPin className="size-5 text-primary" />
                <h4 className="mt-3 font-display text-lg font-semibold">Remote postcodes</h4>
                <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                  Some areas may take longer — including parts of the Scottish Highlands,
                  Scottish Islands, Northern Ireland, Channel Islands, Isle of Man and Isles of
                  Scilly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Questions about a specific order? Our studio team is happy to help.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Continue shopping
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
