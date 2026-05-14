import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  RotateCcw,
  ShieldCheck,
  PackageX,
  PackageCheck,
  AlertCircle,
  Wallet,
  Image as ImageIcon,
  Mail,
  ScrollText,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const TITLE = "Returns & Refunds — Maker·Mark";
const DESCRIPTION =
  "Our returns and refunds policy for personalised, made-to-order and non-personalised gifts. How to report damaged, faulty or incorrect orders.";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/returns" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/returns" }],
  }),
  component: ReturnsPage,
});

const CANNOT_RETURN = [
  "Personalised or custom-made items, unless faulty, damaged or incorrect",
  "Items produced using incorrect information supplied by the customer",
  "Items that have been used, damaged after delivery, or returned incomplete",
  "Refused deliveries or orders returned due to incorrect address details",
  "Items returned without contacting us first",
];

function Section({
  id,
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary">
          <Icon className="size-4.5" />
        </span>
        <div>
          {eyebrow && (
            <div className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}

function ReturnsPage() {
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
                "radial-gradient(55% 55% at 85% 15%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(45% 45% at 15% 30%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <RotateCcw className="size-3.5" /> Returns & refunds
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Made for you, with care at every step.
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                We want you to be happy with your order and we take care to ensure every item is
                produced and dispatched to a high standard. Because many of our products are
                personalised or made to order, please read this policy carefully before placing
                your order.
              </p>
              <p className="mt-3 text-sm text-foreground/60">
                This does not affect your statutory rights.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-ink/10 bg-card/70 backdrop-blur p-5 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-primary" />
                  <div className="font-display text-lg font-semibold">In short</div>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-foreground/75">
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                    Damaged, faulty or incorrect? We'll put it right.
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="size-4 text-foreground/40 mt-0.5 shrink-0" />
                    Personalised items can't be returned for change of mind.
                  </li>
                  <li className="flex gap-2">
                    <Mail className="size-4 text-primary mt-0.5 shrink-0" />
                    Always contact us first before returning anything.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20 space-y-16">
          <Section
            id="personalised"
            eyebrow="Made to order"
            title="Personalised & made-to-order items"
            icon={ScrollText}
          >
            <p>
              Personalised items cannot be returned or refunded unless they arrive damaged,
              faulty, incorrect, or not as described.
            </p>
            <p>
              Please check all personalisation details carefully before placing your order —
              including names, dates, spellings, wording, images, colour choices and any other
              custom details.
            </p>
            <div className="rounded-xl border border-ink/10 bg-card p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 text-primary mt-0.5" />
                <p className="text-sm text-foreground/75">
                  We cannot accept responsibility for errors submitted by the customer during
                  checkout, including incorrect wording, spelling mistakes, wrong dates,
                  poor-quality images, or inaccurate delivery details.
                </p>
              </div>
            </div>
          </Section>

          <Section
            id="damaged"
            eyebrow="We'll put it right"
            title="Damaged, faulty or incorrect orders"
            icon={ShieldCheck}
          >
            <p>
              If your order arrives damaged, faulty, incorrect, or there's an issue with the
              quantity received, please contact us as soon as possible after delivery.
            </p>
            <p>
              We may ask for further information and clear photographs so we can review the issue
              quickly. Where an item is confirmed to be damaged, faulty, incorrect, or not as
              described, we'll offer an appropriate resolution — a replacement, correction, or
              refund depending on the circumstances.
            </p>
          </Section>

          <Section
            id="non-personalised"
            eyebrow="Standard items"
            title="Non-personalised items"
            icon={PackageCheck}
          >
            <p>
              For eligible non-personalised items, returns may be accepted where the item is
              unused, in its original condition, and returned with all packaging and components.
            </p>
            <p>
              Please contact us before returning any item — returns cannot be accepted without
              prior approval.
            </p>
            <p>
              Unless the item is faulty, damaged or incorrect, the cost of return postage is the
              customer's responsibility. We recommend using a tracked or recorded delivery
              service, as we cannot be held responsible for returned items that are lost in
              transit.
            </p>
          </Section>

          <Section
            id="cannot-return"
            eyebrow="Please note"
            title="Items we cannot accept for return"
            icon={PackageX}
          >
            <ul className="grid sm:grid-cols-2 gap-3">
              {CANNOT_RETURN.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-ink/10 bg-card p-4 text-sm text-foreground/80"
                >
                  <XCircle className="size-4 text-foreground/40 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="refunds" eyebrow="Timings" title="Refunds" icon={Wallet}>
            <p>
              Where a refund is approved, please allow up to{" "}
              <span className="font-semibold text-foreground">14 days</span> for it to be
              processed. Once issued, it may take a further{" "}
              <span className="font-semibold text-foreground">2–5 working days</span> to appear in
              your account, depending on your bank or payment provider.
            </p>
            <p>
              Refunds for gift orders can only be issued to the original purchaser using the
              original payment method.
            </p>
          </Section>

          <Section
            id="images"
            eyebrow="Good to know"
            title="Product images & colours"
            icon={ImageIcon}
          >
            <p>
              Product images are provided for illustration purposes only. Colours may appear
              slightly different depending on your screen settings, device display, lighting, or
              the materials used in the final product.
            </p>
          </Section>

          <Section
            id="repeated"
            eyebrow="Fair use"
            title="Repeated claims"
            icon={AlertCircle}
          >
            <p>
              We reserve the right to review repeated refund, replacement or damage claims. Where
              claims appear excessive, unreasonable, or not made in good faith, we may refuse a
              refund or replacement and may decline future orders.
            </p>
          </Section>

          {/* Contact */}
          <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-ink/10 p-8 md:p-12"
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), color-mix(in oklab, var(--accent) 10%, transparent))",
              }}
            />
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                  How to contact us
                </span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  We're always on hand to help.
                </h2>
                <p className="mt-4 text-foreground/75 leading-relaxed">
                  For any return, refund, fault or damage query, please email us before returning
                  any item. Include your order number and a brief description of the issue — we
                  may request additional details or photographs to help resolve your query
                  quickly.
                </p>
              </div>
              <div className="md:col-span-5">
                <a
                  href="mailto:hello@makermarkgifts.co.uk"
                  className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <span className="inline-flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Email us
                    </div>
                    <div className="font-display text-lg font-semibold">
                      hello@makermarkgifts.co.uk
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
