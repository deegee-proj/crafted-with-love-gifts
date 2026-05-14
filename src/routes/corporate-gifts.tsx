import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Briefcase,
  Layers,
  Boxes,
  PenLine,
  Award,
  Wine,
  Coffee,
  Notebook,
  Gift,
  Truck,
  ShieldCheck,
  Sparkles,
  Users,
  CalendarClock,
  Mail,
  ArrowRight,
  Check,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import corpHero from "@/assets/corp-hero.jpg";
import corpGlassware from "@/assets/corp-glassware.jpg";
import corpAwards from "@/assets/corp-awards.jpg";
import corpWineboxes from "@/assets/corp-wineboxes.jpg";
import corpFrames from "@/assets/corp-frames.jpg";
import corpDrinkware from "@/assets/corp-drinkware.jpg";
import corpPromo from "@/assets/corp-promo.jpg";
import corpProcess from "@/assets/corp-process.jpg";

const TITLE = "Corporate Gifts UK | Branded & Personalised Business Gifts — Maker·Mark";
const DESCRIPTION =
  "Personalised corporate gifts and branded merchandise hand-finished in the UK. Logo engraving on glassware, decanters, awards, notebooks and hampers. Bulk pricing, dedicated account manager, fast UK dispatch.";

export const Route = createFileRoute("/corporate-gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "corporate gifts UK, personalised corporate gifts, branded corporate gifts, logo engraving, employee gifts, client gifts, bulk gifts, branded merchandise, business gifts, corporate hampers, engraved awards",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/corporate-gifts" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
    ],
    links: [{ rel: "canonical", href: "/corporate-gifts" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Maker·Mark Corporate Gifting",
          description: DESCRIPTION,
          provider: { "@type": "Organization", name: "Maker·Mark" },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          serviceType: "Corporate gifting & branded merchandise",
        }),
      },
    ],
  }),
  component: CorporatePage,
});

const SERVICES = [
  {
    icon: PenLine,
    title: "Logo engraving",
    body: "Sharp, single-pass laser engraving on glass, metal, leather and wood. We work from your vector logo and proof every job before production.",
  },
  {
    icon: Boxes,
    title: "Branded packaging",
    body: "Co-branded gift boxes, bands, tissue, swing tags and printed cards — your brand from outside in.",
  },
  {
    icon: Layers,
    title: "Bulk pricing",
    body: "Tiered discounts from 25 units, with deeper rates for 100, 250 and 500+. Quoted per project, never opaque.",
  },
  {
    icon: Truck,
    title: "Split UK delivery",
    body: "Send a single shipment to HQ or split to hundreds of home addresses with our managed dispatch service.",
  },
  {
    icon: CalendarClock,
    title: "Dedicated production slots",
    body: "Book a slot for conferences, awards nights or Christmas — guaranteed completion dates with sign-off proofs.",
  },
  {
    icon: ShieldCheck,
    title: "Account-managed",
    body: "One named contact from quote to delivery. No tickets, no chatbots, no chasing.",
  },
];

const RANGES = [
  { icon: Wine, title: "Logo engraved glassware", body: "Tumblers, hi-balls, flutes and crystal decanters etched with your brand.", img: corpGlassware, count: "120+ pieces" },
  { icon: Award, title: "Awards & trophies", body: "Year-end, sales, long-service and partner awards in crystal and glass.", img: corpAwards, count: "60+ designs" },
  { icon: Gift, title: "Engraved wine boxes", body: "Solid oak presentation boxes with bottle, stopper and corkscrew.", img: corpWineboxes, count: "Single & double" },
  { icon: PenLine, title: "Logo engraved photo frames", body: "Wooden, glass and metal frames engraved with your brand mark.", img: corpFrames, count: "30+ styles" },
  { icon: Coffee, title: "Promotional mugs & bottles", body: "Ceramic mugs, enamel, insulated bottles and travel cups.", img: corpDrinkware, count: "80+ pieces" },
  { icon: Boxes, title: "Promotional gifts", body: "Pens, keyrings, bottle openers, totes and branded giveaways.", img: corpPromo, count: "Custom builds" },
];

const INDUSTRIES = [
  "Law & professional services",
  "Finance & banking",
  "Tech & SaaS",
  "Property & real estate",
  "Hospitality & venues",
  "Healthcare & pharma",
  "Charity & not-for-profit",
  "Marketing & creative agencies",
];

const STEPS = [
  { n: "01", title: "Tell us your brief", body: "Quantity, budget per unit, timeline, recipients and logo files. Two minutes via the form below." },
  { n: "02", title: "Get a tailored quote", body: "We send product options, mock-ups and tiered pricing — usually within one working day." },
  { n: "03", title: "Approve & we make", body: "Sign off the digital proof and we hand-finish in our Birmingham studio." },
  { n: "04", title: "We dispatch", body: "Single shipment, split delivery to home addresses, or staged drops — your call." },
];

const FAQS = [
  {
    q: "What's the minimum order quantity?",
    a: "Our corporate pricing kicks in from 25 units, with deeper tiers at 100, 250 and 500+. We can sometimes accommodate smaller runs of 10–24 — just ask.",
  },
  {
    q: "How long do corporate orders take?",
    a: "Typical turnaround is 2–3 weeks from approved proof for runs up to 250 units. Larger orders or peak periods (Christmas, awards season) need 4–6 weeks. Express slots are available.",
  },
  {
    q: "Do you do branded packaging?",
    a: "Yes — co-branded boxes, bands, tissue paper, swing tags and personalised message cards. We can mock the full unboxing for sign-off before production.",
  },
  {
    q: "Can you ship to multiple home addresses?",
    a: "Yes. Our managed split-dispatch service sends each gift directly to recipients across the UK — ideal for remote teams, client gifting and onboarding.",
  },
  {
    q: "What file format do you need for our logo?",
    a: "A vector file (.ai, .eps, .pdf or .svg) gives the cleanest engraving. If you only have a high-resolution PNG, send it over and we'll advise.",
  },
  {
    q: "Do you offer samples?",
    a: "Yes — we can send a paid sample of any product, with the cost credited against your full order.",
  },
];

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  company: z.string().trim().min(1, "Please add your company").max(150),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  quantity: z.string().trim().min(1, "Approximate quantity helps us quote").max(20),
  occasion: z.string().trim().max(100).optional(),
  deadline: z.string().trim().max(60).optional(),
  message: z.string().trim().min(10, "A few more details helps us help you").max(2000),
});

function CorporatePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ink/5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                "radial-gradient(60% 60% at 12% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 92% 30%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <Briefcase className="size-3.5" /> Corporate gifting
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
                Branded gifts your clients will actually keep.
              </h1>
              <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                Logo-engraved glassware, decanters, awards and beautifully packaged hampers —
                hand-finished in our Birmingham studio with bulk pricing, branded packaging and a
                dedicated account manager. From 25 units up to 5,000+.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2">
                  <a href="#enquiry">
                    Request a quote <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:hello@makermarkgifts.co.uk?subject=Corporate%20gifting%20enquiry">
                    Email the corporate desk
                  </a>
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
                {[
                  "From 25 units",
                  "Hand-finished in the UK",
                  "Quotes within 1 working day",
                  "Branded packaging",
                ].map((p) => (
                  <li key={p} className="inline-flex items-center gap-2">
                    <Check className="size-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10 shadow-[var(--shadow-soft)]">
                  <img
                    src={corpHero}
                    alt="Branded corporate gift box with engraved decanter, leather notebook and engraved pen"
                    width={1600}
                    height={1200}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-background/85 backdrop-blur p-4 border border-ink/10">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-semibold">
                      Christmas
                    </div>
                    <p className="mt-1 text-xs text-foreground/80 leading-snug">
                      Christmas slots fill fast — book before October to guarantee delivery.
                    </p>
                  </div>
                </div>
                <div className="hidden md:grid absolute -left-6 -bottom-6 grid-cols-2 gap-3 w-[280px] rounded-2xl border border-ink/10 bg-card/95 backdrop-blur p-4 shadow-[var(--shadow-soft)]">
                  <Stat n="25+" label="Min. order" />
                  <Stat n="Express" label="Turnaround available" />
                </div>
              </div>
              <div className="md:hidden mt-5 grid grid-cols-2 gap-3">
                <Stat n="25+" label="Minimum order" />
                <Stat n="Express" label="Turnaround available" />
                <Stat n="1000+" label="Happy customers" />
                <Stat n="UK" label="Made & dispatched" />
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Who it's for
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Built for teams that take gifting seriously.
              </h2>
            </div>
            <p className="lg:col-span-5 text-foreground/70 leading-relaxed">
              Whether you're thanking 30 clients or onboarding 500 new hires, we make the kind of
              gift people leave on their desk — not in the drawer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, title: "Employee gifting", body: "Onboarding, milestones, long-service and team-wide moments." },
              { icon: Briefcase, title: "Client gifting", body: "Thank-yous, renewals, executive briefcase pieces." },
              { icon: CalendarClock, title: "Events & conferences", body: "Speaker gifts, delegate bags, awards-night pieces." },
              { icon: Sparkles, title: "Marketing & launches", body: "Press kits, influencer drops, brand activations." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-ink/10 bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <c.icon className="size-5 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-card border-y border-ink/10">
          <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                What's included
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                A full-service corporate studio.
              </h2>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-ink/10 bg-background p-6"
                >
                  <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Range */}
        <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Product range
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                What we engrave & brand.
              </h2>
            </div>
            <Link
              to="/personalised-gifts"
              className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-2"
            >
              See full range <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RANGES.map((r) => (
              <a
                key={r.title}
                href="#enquiry"
                className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-card aspect-[4/5] flex flex-col justify-end transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/0" />
                <div className="relative z-10 p-6 text-cream">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    <r.icon className="size-3.5" /> {r.count}
                  </span>
                  <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold leading-tight max-w-[18ch]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/85 leading-relaxed">{r.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold border-b border-cream/60 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
                    Get a quote <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Process image strip */}
        <section className="bg-card border-y border-ink/10">
          <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-ink/10 shadow-[var(--shadow-soft)]">
                <img
                  src={corpProcess}
                  alt="A craftsman laser-engraving a logo onto a crystal tumbler in our UK workshop"
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Logo engraving service
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Your logo, hand-engraved in our UK workshop.
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Send us your vector logo and we'll laser-engrave it onto crystal, glass, metal,
                leather and wood. Every job is digitally proofed and signed off before production
                — so the finish you approve is the finish your recipients open.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Single-pass laser precision",
                  "Digital mock-up for sign-off",
                  "Free vectorisation if needed",
                  "Multi-position engraving",
                ].map((p) => (
                  <li key={p} className="inline-flex items-center gap-2 text-foreground/80">
                    <Check className="size-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2">
                  <a href="#enquiry">Request a sample <ArrowRight className="size-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-ink text-cream">
          <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                How it works
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                From brief to dispatch in four steps.
              </h2>
            </div>
            <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6"
                >
                  <div className="font-display text-3xl font-semibold text-primary">{s.n}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-cream/75 leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Industries */}
        <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Industries we serve
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Trusted by UK teams across every sector.
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                From boutique law firms in the City to fast-growing tech teams across the
                country, we help brands give better.
              </p>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {INDUSTRIES.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-ink/10 bg-card px-4 py-3 text-sm font-medium"
                >
                  <Check className="size-4 text-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Enquiry form */}
        <EnquirySection />

        {/* FAQ */}
        <section className="border-t border-ink/10">
          <div className="max-w-[1100px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <HelpCircle className="size-3.5" /> Corporate FAQs
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Quick answers for buyers.
              </h2>
              <p className="mt-4 text-sm text-foreground/70">
                Can't see your question? Email{" "}
                <a className="text-primary hover:underline" href="mailto:hello@makermarkgifts.co.uk">
                  hello@makermarkgifts.co.uk
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <FAQList />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl bg-background/70 border border-ink/10 p-4 text-center">
      <div className="font-display text-3xl md:text-4xl font-semibold text-primary">{n}</div>
      <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-foreground/65">
        {label}
      </div>
    </div>
  );
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 py-5 text-left group"
            >
              <span className="font-display text-base md:text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                {f.q}
              </span>
              <ChevronDown
                className={`size-5 mt-1 shrink-0 text-foreground/50 transition-transform ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-[15px] text-foreground/75 leading-relaxed pr-10">
                  {f.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function EnquirySection() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      quantity: fd.get("quantity"),
      occasion: fd.get("occasion") || undefined,
      deadline: fd.get("deadline") || undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0]?.toString();
        if (k && !next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const body = [
      `Name: ${d.name}`,
      `Company: ${d.company}`,
      `Email: ${d.email}`,
      d.phone ? `Phone: ${d.phone}` : null,
      `Approx. quantity: ${d.quantity}`,
      d.occasion ? `Occasion: ${d.occasion}` : null,
      d.deadline ? `Deadline: ${d.deadline}` : null,
      "",
      d.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:hello@makermarkgifts.co.uk?subject=${encodeURIComponent(
      `[Corporate enquiry] ${d.company}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="enquiry" className="bg-card border-y border-ink/10 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
            Request a quote
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Tell us about your project.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Send us your brief — quantity, budget per unit, timeline and recipients. We come back
            with product options, mock-ups and tiered pricing, usually within one working day.
          </p>
          <a
            href="mailto:hello@makermarkgifts.co.uk?subject=Corporate%20gifting%20enquiry"
            className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-background px-5 py-4 hover:border-primary/40 transition-colors"
          >
            <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                Or email the desk
              </span>
              <span className="font-display text-base font-semibold">
                hello@makermarkgifts.co.uk
              </span>
            </span>
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-ink/10 bg-background p-6 md:p-10">
            {sent ? (
              <div className="py-10 text-center">
                <span className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  Your enquiry is ready to send
                </h3>
                <p className="mt-3 text-foreground/70 max-w-md mx-auto">
                  We've opened your email app with everything pre-filled. Hit send and we'll come
                  back within one working day.
                </p>
                <Button onClick={() => setSent(false)} variant="outline" className="mt-6">
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" id="name" error={errors.name}>
                    <Input id="name" name="name" maxLength={100} autoComplete="name" required />
                  </Field>
                  <Field label="Company" id="company" error={errors.company}>
                    <Input id="company" name="company" maxLength={150} required />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Work email" id="email" error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={255}
                      autoComplete="email"
                      required
                    />
                  </Field>
                  <Field label="Phone" id="phone" hint="Optional" error={errors.phone}>
                    <Input id="phone" name="phone" maxLength={30} autoComplete="tel" />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-3 gap-5">
                  <Field label="Approx. quantity" id="quantity" error={errors.quantity}>
                    <Input id="quantity" name="quantity" maxLength={20} placeholder="e.g. 150" required />
                  </Field>
                  <Field label="Occasion" id="occasion" hint="Optional" error={errors.occasion}>
                    <Input
                      id="occasion"
                      name="occasion"
                      maxLength={100}
                      placeholder="Christmas, conference…"
                    />
                  </Field>
                  <Field label="Deadline" id="deadline" hint="Optional" error={errors.deadline}>
                    <Input
                      id="deadline"
                      name="deadline"
                      maxLength={60}
                      placeholder="e.g. mid-Nov"
                    />
                  </Field>
                </div>
                <Field
                  label="Project brief"
                  id="message"
                  hint="Recipients, budget per unit, branding requirements, anything we should know."
                  error={errors.message}
                >
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={2000}
                    placeholder="Tell us about your project…"
                    required
                  />
                </Field>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-foreground/60 max-w-sm">
                    By sending this enquiry you agree to be contacted about your project. We
                    never share your details.
                  </p>
                  <Button type="submit" size="lg" className="gap-2">
                    <Send className="size-4" /> Send enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  hint,
  error,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      {children}
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-foreground/55">{hint}</p>
      ) : null}
    </div>
  );
}
