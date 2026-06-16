import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, BadgeCheck, Building2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const TITLE = "Personalised Corporate & Branded Business Gifts UK — Maker·Mark";
const DESCRIPTION = "Premium branded and personalised corporate gifts, hand-finished in the UK. Logo engraving on glassware, decanters, awards, mugs and hampers — from single bespoke pieces to bulk orders.";

export const Route = createFileRoute("/corporate-gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/corporate-gifts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/corporate-gifts" }],
  }),
  component: CorporateGiftsPage,
});

const seoSections = [
  {
    heading: "Branded corporate gifts, made in the UK",
    body: [
      "Our personalised corporate gifts cover everything from logo-engraved crystal decanters, whisky glasses and tumblers to engraved awards, wooden wine boxes, leather notebooks, branded mugs, water bottles and luxury gift hampers. Each piece is hand-finished in our UK studio using single-pass laser engraving on glass, metal, leather and wood, so your brand mark stays crisp on items recipients are genuinely proud to keep on their desk or take home.",
      "Because every order is produced in-house, we control quality from the first proof through to dispatch. That means consistent finishes across hundreds of units, a digital proof for every job before production starts and the flexibility to mix products inside a single branded gift set.",
    ],
  },
  {
    heading: "From single bespoke pieces to bulk corporate orders",
    body: [
      "There is no minimum order. We work with start-ups ordering a one-off engraved gift for a departing director, agencies producing 50 client thank-yous and enterprise teams shipping 5,000+ branded items for a national rollout. Tiered pricing kicks in as quantities grow and quotes are always itemised, so you can see exactly what you are paying for.",
      "Need split-dispatch to home addresses for a remote team? Staged drops across multiple offices? Branded outer packaging with a personalised message card inside? Tell us how the gift needs to land and we will build the logistics around it.",
    ],
  },
  {
    heading: "Dedicated account management from brief to delivery",
    body: [
      "Every corporate enquiry is handled by a dedicated account manager from initial brief through to delivery. One point of contact, same-day quotes on most enquiries and clear timelines you can plan around — so you spend less time chasing updates and more time on the campaign itself.",
    ],
  },
  {
    heading: "Trusted for client gifts, employee rewards and events",
    body: [
      "UK businesses use Maker·Mark for client gifting, new-business pitches, employee onboarding packs, long-service awards, sales incentives, retirement gifts, conference giveaways, speaker thank-yous, influencer drops and end-of-year Christmas hampers. Whether the brief is a quiet executive piece or a high-energy branded campaign, we help you choose products that suit the audience, the occasion and the budget.",
      "Ready to start? Request a quote with your quantity, deadline and budget per unit and our corporate desk will come back with product options, mock-ups and tiered pricing — usually the same working day.",
    ],
  },
];

const previousClients = [
  "Northwind Studios",
  "Halcyon & Co.",
  "Meridian Group",
  "Brightline Agency",
  "Atlas Ventures",
  "Kestrel Partners",
  "Oakhouse Hotels",
  "Lumen Tech",
  "Fairgrove Estates",
  "Beacon & Bell",
  "Saltaire Wines",
  "Ironclad Legal",
];

function CorporateGiftsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Title + SEO intro */}
        <section className="relative overflow-hidden border-b border-ink/5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 20% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 90% 30%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
              <Sparkles className="size-3.5" /> Business & Corporate Gifts
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Personalised Corporate Gifts
            </h1>
            <div className="mt-6 space-y-4 text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl">
              <p>Premium branded and personalised corporate gifts designed to leave a lasting impression. From client gifting to large-scale campaigns, Maker·Mark helps businesses deliver thoughtful, high-quality branded gifts without the usual hassle — with full in-house production and an experienced UK team behind every order, we maintain complete control over quality, consistency and turnaround.</p>
              <p>Whether you need a small run of executive thank-yous or a large-volume order for a conference, onboarding pack or end-of-year campaign, we make the process simple, reliable and right on time. Explore a selection of popular corporate gifts below, or request a quote for any product across our full range — everything on our website can be tailored for your business with logo engraving, branded packaging and bespoke presentation.</p>
            </div>
          </div>
        </section>

        {/* Product grid placeholders */}
        <section className="max-w-[1400px] mx-auto px-6 py-12 md:py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Shop Personalised Corporate Gifts
            </h2>
            <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Products coming soon
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-ink/10 bg-card overflow-hidden hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div
                  className="aspect-square w-full"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--muted) 80%, transparent), color-mix(in oklab, var(--primary) 6%, transparent))",
                  }}
                />
                <div className="p-4">
                  <div className="h-3 w-3/4 rounded bg-ink/10" />
                  <div className="mt-2 h-3 w-1/3 rounded bg-ink/10" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous clients */}
        <section className="border-t border-ink/5 bg-muted/30">
          <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <BadgeCheck className="size-3.5" /> Previous Clients
              </span>
              <h2 className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Trusted by UK brands, agencies and growing teams
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                A small selection of the businesses we've produced branded and personalised gifts for — from one-off executive pieces to nationwide rollouts.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {previousClients.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-ink/10 bg-card px-4 py-4"
                >
                  <Building2 className="size-4 text-primary/70 shrink-0" />
                  <span className="text-sm font-medium tracking-tight truncate">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request a quote */}
        <section id="quote" className="border-t border-ink/5">
          <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20 grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <Sparkles className="size-3.5" /> Request a Quote
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Tell us about your project
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                Share a few details and our corporate desk will come back — usually the same working day — with product suggestions, mock-ups and tiered pricing.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                <li>• Same-day quotes on most enquiries</li>
                <li>• No minimum order quantity</li>
                <li>• Digital proof before anything is engraved</li>
                <li>• UK-based studio and account manager</li>
              </ul>
            </div>

            <QuoteForm />
          </div>
        </section>

        {/* Bottom SEO content */}
        <section className="border-t border-ink/5 bg-muted/30">
          <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
            <div className="space-y-12 max-w-3xl">
              {seoSections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] md:text-base text-foreground/75 leading-relaxed">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder — wire to backend later
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Quote request sent", {
        description: "Our corporate desk will be in touch shortly.",
      });
    }, 600);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="md:col-span-3 rounded-2xl border border-ink/10 bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" required maxLength={120} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required maxLength={255} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" maxLength={30} />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="product">Product / category</Label>
          <Input id="product" name="product" placeholder="e.g. engraved tumblers" maxLength={120} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" name="quantity" type="number" min={1} placeholder="e.g. 50" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <Input id="deadline" name="deadline" type="date" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget per unit (optional)</Label>
        <Input id="budget" name="budget" placeholder="e.g. £15–£25" maxLength={60} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={1500}
          rows={5}
          placeholder="Tell us about the occasion, branding, packaging and delivery requirements."
        />
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Request a quote"}
      </Button>
    </form>
  );
}
