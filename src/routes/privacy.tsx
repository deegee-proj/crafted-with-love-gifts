import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ShieldCheck, Mail } from "lucide-react";

const TITLE = "Privacy Policy — Maker·Mark";
const DESCRIPTION =
  "How Maker·Mark collects, uses and protects your personal data when you visit our website or place an order.";
const UPDATED = "May 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use your information" },
  { id: "lawful-basis", label: "Lawful basis" },
  { id: "sharing", label: "Sharing your information" },
  { id: "international", label: "International transfers" },
  { id: "retention", label: "How long we keep data" },
  { id: "rights", label: "Your rights" },
  { id: "cookies", label: "Cookies & tracking" },
  { id: "marketing", label: "Marketing" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

function PrivacyPage() {
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
                "radial-gradient(55% 55% at 85% 18%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%), radial-gradient(45% 45% at 15% 30%, color-mix(in oklab, var(--accent) 20%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
              <ShieldCheck className="size-3.5" /> Privacy
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
              Your trust matters to us. This policy explains what personal information we collect
              when you visit our website or place an order, how we use it, who we share it with,
              and the rights you have over it.
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
            <Block id="who-we-are" n={1} title="Who we are">
              <p>
                Maker·Mark Studios Ltd ("Maker·Mark", "we", "us", "our") is the data controller
                for personal information collected through this website. We're a company
                registered in England and Wales, based in Birmingham. You can reach us by email
                at{" "}
                <a className="text-primary hover:underline" href="mailto:hello@makermarkgifts.co.uk">
                  hello@makermarkgifts.co.uk
                </a>
                .
              </p>
            </Block>

            <Block id="what-we-collect" n={2} title="Information we collect">
              <p>
                We collect information you give us directly, information collected automatically
                when you use the site, and information from trusted third parties.
              </p>
              <ul className="grid gap-3">
                {[
                  {
                    title: "Information you provide",
                    body: "Name, email, billing and delivery addresses, phone number, order details and the personalisation content you submit (text, images, dates).",
                  },
                  {
                    title: "Information collected automatically",
                    body: "Device type, browser, IP address, pages visited, referring URLs, and approximate location — typically via cookies and similar technologies.",
                  },
                  {
                    title: "From third parties",
                    body: "Payment confirmations from our payment providers, fraud and risk signals, and analytics aggregated from our advertising partners.",
                  },
                ].map((c) => (
                  <li
                    key={c.title}
                    className="rounded-xl border border-ink/10 bg-card p-5"
                  >
                    <div className="font-display font-semibold">{c.title}</div>
                    <p className="mt-2 text-sm text-foreground/75">{c.body}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/65">
                We do not store full payment card details — these are handled directly by our
                PCI-compliant payment providers.
              </p>
            </Block>

            <Block id="how-we-use" n={3} title="How we use your information">
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfil your orders, including production and dispatch.</li>
                <li>Communicate with you about your order, returns or enquiries.</li>
                <li>Provide customer support and resolve issues.</li>
                <li>Improve our website, products and customer experience.</li>
                <li>
                  Send marketing communications where you've asked us to or where the law
                  allows.
                </li>
                <li>Prevent fraud and meet our legal and regulatory obligations.</li>
              </ul>
            </Block>

            <Block id="lawful-basis" n={4} title="Lawful basis">
              <p>
                Under UK GDPR we rely on the following lawful bases:{" "}
                <strong>contract</strong> (to fulfil your order),{" "}
                <strong>legitimate interests</strong> (to run, secure and improve our business),{" "}
                <strong>legal obligation</strong> (e.g. tax records), and{" "}
                <strong>consent</strong> (for non-essential cookies and marketing).
              </p>
            </Block>

            <Block id="sharing" n={5} title="Sharing your information">
              <p>We share information only with trusted partners who help us operate, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment providers to take payment securely.</li>
                <li>Couriers and delivery partners to ship your order.</li>
                <li>Hosting, email and analytics providers that power our site.</li>
                <li>Professional advisers such as accountants and lawyers, where needed.</li>
                <li>
                  Authorities, regulators or law enforcement where we are legally required to do
                  so.
                </li>
              </ul>
              <p>We never sell your personal information.</p>
            </Block>

            <Block id="international" n={6} title="International transfers">
              <p>
                Some of our service providers are based outside the UK. Where personal data is
                transferred internationally we rely on safeguards recognised under UK GDPR — such
                as adequacy decisions or Standard Contractual Clauses — to keep your information
                protected.
              </p>
            </Block>

            <Block id="retention" n={7} title="How long we keep your data">
              <p>
                We keep personal information only for as long as we need it for the purposes
                described in this policy, or to meet legal, accounting or reporting requirements.
                Order and tax records are typically kept for 6 years; marketing data is kept
                until you unsubscribe.
              </p>
            </Block>

            <Block id="rights" n={8} title="Your rights">
              <p>You have the right to:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Access the personal information we hold about you",
                  "Ask us to correct inaccurate information",
                  "Ask us to delete your information (where applicable)",
                  "Restrict or object to certain processing",
                  "Receive your data in a portable format",
                  "Withdraw consent at any time",
                ].map((r) => (
                  <li
                    key={r}
                    className="rounded-xl border border-ink/10 bg-card p-4 text-sm text-foreground/80"
                  >
                    {r}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/65">
                To exercise any of these rights, please email{" "}
                <a className="text-primary hover:underline" href="mailto:hello@makermarkgifts.co.uk">
                  hello@makermarkgifts.co.uk
                </a>
                . You also have the right to complain to the Information Commissioner's Office
                (ICO) at ico.org.uk.
              </p>
            </Block>

            <Block id="cookies" n={9} title="Cookies & tracking">
              <p>
                We use cookies and similar technologies to make the site work, remember your
                preferences, measure performance and — with your consent — show relevant
                advertising. You can manage your preferences through the cookie banner or your
                browser settings. Blocking certain cookies may affect how the site behaves.
              </p>
            </Block>

            <Block id="marketing" n={10} title="Marketing">
              <p>
                We may send you marketing emails about new products, offers and gifting
                inspiration where you have opted in or where the law allows us to do so. You can
                unsubscribe at any time using the link in any marketing email or by contacting
                us.
              </p>
            </Block>

            <Block id="security" n={11} title="Security">
              <p>
                We use appropriate technical and organisational measures to protect your
                information, including encryption in transit, access controls, and trusted
                infrastructure providers. No system is completely secure, so we encourage you to
                use a strong, unique password for any account you create with us.
              </p>
            </Block>

            <Block id="children" n={12} title="Children">
              <p>
                Our website is not directed at children under 16 and we do not knowingly collect
                their personal information. If you believe a child has provided us with data,
                please contact us so we can remove it.
              </p>
            </Block>

            <Block id="changes" n={13} title="Changes to this policy">
              <p>
                We may update this policy from time to time. When we make material changes we'll
                update the "last updated" date at the top of the page and, where appropriate,
                let you know directly.
              </p>
            </Block>

            <Block id="contact" n={14} title="Contact">
              <p>
                Questions about this policy or how we handle your personal data? We're always
                happy to help.
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
