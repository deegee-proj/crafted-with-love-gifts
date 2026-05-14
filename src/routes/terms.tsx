import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollText, Mail } from "lucide-react";

const TITLE = "Terms & Conditions — Maker·Mark";
const DESCRIPTION =
  "The terms and conditions that apply when you use the Maker·Mark website and place orders for personalised gifts.";
const UPDATED = "May 2026";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  { id: "about-us", label: "About us" },
  { id: "using-site", label: "Using our website" },
  { id: "account", label: "Your account" },
  { id: "orders", label: "Orders & contract" },
  { id: "pricing", label: "Pricing & payment" },
  { id: "personalisation", label: "Personalisation" },
  { id: "delivery", label: "Delivery" },
  { id: "returns", label: "Returns & cancellation" },
  { id: "ip", label: "Intellectual property" },
  { id: "user-content", label: "Your content" },
  { id: "liability", label: "Liability" },
  { id: "events", label: "Events outside our control" },
  { id: "changes", label: "Changes to these terms" },
  { id: "law", label: "Governing law" },
  { id: "contact", label: "Contact" },
];

function TermsPage() {
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
                "radial-gradient(55% 55% at 12% 18%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%), radial-gradient(45% 45% at 88% 28%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
              <ScrollText className="size-3.5" /> Legal
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Terms & Conditions
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
              These terms set out the agreement between you and Maker·Mark Studios Ltd when you
              browse our website or place an order. Please read them carefully — by using the
              site or placing an order you agree to be bound by them.
            </p>
            <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Last updated · {UPDATED}
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl border border-ink/10 bg-card p-6">
              <div className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                On this page
              </div>
              <ol className="mt-4 space-y-2 text-sm">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 text-foreground/75 hover:text-primary transition-colors"
                    >
                      <span className="text-foreground/40 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-8 space-y-12 text-[15px] text-foreground/80 leading-relaxed">
            <Block id="about-us" n={1} title="About us">
              <p>
                Maker·Mark Studios Ltd ("Maker·Mark", "we", "us", "our") is a company registered
                in England and Wales, operating from Birmingham. We design, produce and sell
                personalised gifts directly to consumers and trade customers through our website.
              </p>
            </Block>

            <Block id="using-site" n={2} title="Using our website">
              <p>
                You may use our website for personal, non-commercial purposes only, subject to
                these terms. You agree not to misuse the site, attempt to gain unauthorised
                access, introduce malicious code, or use automated systems to scrape content.
              </p>
              <p>
                We may suspend or restrict access to all or part of the site at any time without
                notice for maintenance, security or operational reasons.
              </p>
            </Block>

            <Block id="account" n={3} title="Your account">
              <p>
                If you create an account with us, you are responsible for keeping your login
                details confidential and for all activity that takes place under your account.
                Please tell us immediately if you suspect any unauthorised use.
              </p>
            </Block>

            <Block id="orders" n={4} title="Orders & contract">
              <p>
                Placing an order is an offer to buy. A contract is only formed once we send a
                dispatch confirmation email. Until that point we may decline or cancel an order —
                for example if a product is unavailable, the price was incorrect, we are unable
                to verify payment, or the personalisation submitted is unsuitable.
              </p>
              <p>
                If we cancel an order before dispatch, any payment taken will be refunded in
                full.
              </p>
            </Block>

            <Block id="pricing" n={5} title="Pricing & payment">
              <p>
                Prices are shown in pounds sterling (GBP) and include VAT where applicable.
                Delivery charges are shown separately at checkout. We take reasonable care to
                ensure prices are accurate, but if we discover an error we will contact you
                before processing the order.
              </p>
              <p>
                Payment is taken at the point of order via the providers shown at checkout. By
                submitting payment details you confirm you are authorised to use the chosen
                payment method.
              </p>
            </Block>

            <Block id="personalisation" n={6} title="Personalisation">
              <p>
                You are responsible for the accuracy of any personalisation you submit,
                including names, dates, spellings, wording, images and colour choices. Please
                review your order carefully before checkout.
              </p>
              <p>
                We reserve the right to refuse any personalisation we consider unlawful,
                offensive, defamatory, infringing third-party rights, or otherwise unsuitable.
                Where we refuse to produce an item we will refund you in full.
              </p>
            </Block>

            <Block id="delivery" n={7} title="Delivery">
              <p>
                Delivery options, costs and estimated timeframes are shown at checkout and on
                our delivery information page. Production and delivery times are estimates and
                are not guaranteed unless explicitly stated.
              </p>
              <p>
                Risk passes to you on delivery to the address provided at checkout. Please make
                sure delivery details are accurate — we cannot accept responsibility for orders
                lost due to incorrect addresses.
              </p>
            </Block>

            <Block id="returns" n={8} title="Returns & cancellation">
              <p>
                Because our products are personalised or made to order, your statutory right to
                cancel under the Consumer Contracts Regulations does not apply once production
                has started, except where the item is faulty, damaged, incorrect or not as
                described.
              </p>
              <p>
                Full details, including how to report a fault and timeframes for refunds, are
                set out in our returns policy. This does not affect your statutory rights.
              </p>
            </Block>

            <Block id="ip" n={9} title="Intellectual property">
              <p>
                All content on this website — including designs, photography, illustrations,
                text, logos, and the Maker·Mark name and brand — is owned by or licensed to
                Maker·Mark Studios Ltd and is protected by UK and international intellectual
                property laws. You may not copy, reproduce, republish or commercially exploit
                any content without our prior written consent.
              </p>
            </Block>

            <Block id="user-content" n={10} title="Your content">
              <p>
                When you upload images, text or other content for personalisation, you confirm
                that you own it or have permission to use it, and you grant us a non-exclusive
                licence to use it solely for the purpose of producing and dispatching your
                order.
              </p>
              <p>
                You are responsible for ensuring that your content does not infringe the rights
                of any third party. We may refuse content that we reasonably believe infringes
                copyright, trademark or other rights.
              </p>
            </Block>

            <Block id="liability" n={11} title="Liability">
              <p>
                Nothing in these terms limits our liability for death or personal injury caused
                by our negligence, fraud, or any other liability that cannot be excluded by law.
              </p>
              <p>
                Subject to that, our total liability for any claim arising out of an order is
                limited to the price paid for the relevant goods. We are not liable for any
                indirect, consequential or business losses.
              </p>
            </Block>

            <Block id="events" n={12} title="Events outside our control">
              <p>
                We are not responsible for delays or failure to perform caused by events outside
                our reasonable control, including courier delays, adverse weather, strikes,
                power or network failures, supplier shortages or government action. Where such
                an event affects your order we will contact you and do our best to put things
                right.
              </p>
            </Block>

            <Block id="changes" n={13} title="Changes to these terms">
              <p>
                We may update these terms from time to time. The version that applies to your
                order is the one published on the website at the time you placed it.
              </p>
            </Block>

            <Block id="law" n={14} title="Governing law">
              <p>
                These terms are governed by the laws of England and Wales. Any dispute arising
                in connection with them will be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
            </Block>

            <Block id="contact" n={15} title="Contact">
              <p>
                Questions about these terms? Please email us — we're happy to help.
              </p>
              <a
                href="mailto:hello@makermarkgifts.co.uk"
                className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-card px-5 py-4 hover:border-primary/40 transition-colors"
              >
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    Email us
                  </span>
                  <span className="font-display text-base font-semibold">
                    hello@makermarkgifts.co.uk
                  </span>
                </span>
              </a>
            </Block>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Block({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-sm tabular-nums text-primary font-semibold">
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
