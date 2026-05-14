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
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  HelpCircle,
  Truck,
  RotateCcw,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

const TITLE = "Contact Us — Maker·Mark";
const DESCRIPTION =
  "Get in touch with the Maker·Mark studio team. Email hello@makermarkgifts.co.uk for help with orders, personalisation, delivery, returns and trade enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const SUBJECTS = [
  "Order enquiry",
  "Personalisation help",
  "Delivery question",
  "Return or refund",
  "Damaged or faulty item",
  "Trade / wholesale",
  "Press & partnerships",
  "Something else",
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please add your name")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255, "Email must be under 255 characters"),
  orderNumber: z
    .string()
    .trim()
    .max(50, "Order number must be under 50 characters")
    .optional(),
  subject: z.string().trim().min(1, "Please choose a subject"),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few more details (10+ characters)")
    .max(2000, "Message must be under 2000 characters"),
});

const HELP_LINKS = [
  { icon: Truck, label: "Delivery information", href: "/delivery" },
  { icon: RotateCcw, label: "Returns & refunds", href: "/returns" },
  { icon: Sparkles, label: "Personalisation guide", href: "#" },
  { icon: HelpCircle, label: "FAQs", href: "#" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      orderNumber: fd.get("orderNumber") || undefined,
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    // Compose mailto with the validated, encoded payload
    const { name, email, orderNumber, subject, message } = parsed.data;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      orderNumber ? `Order number: ${orderNumber}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:hello@makermarkgifts.co.uk?subject=${encodeURIComponent(
      `[${subject}] ${name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

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
                "radial-gradient(55% 55% at 12% 18%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(45% 45% at 88% 28%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <MessageCircle className="size-3.5" /> Contact us
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                We'd love to hear from you.
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                Whether you need a hand with personalisation, want to chase an order, or have a
                bigger gifting project in mind — our studio team is here to help. Most messages
                are answered within one working day.
              </p>
            </div>
            <div className="lg:col-span-4">
              <a
                href="mailto:hello@makermarkgifts.co.uk"
                className="group block rounded-2xl border border-ink/10 bg-card/70 backdrop-blur p-5 shadow-[var(--shadow-soft)] hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                      Email the studio
                    </div>
                    <div className="font-display text-lg font-semibold">
                      hello@makermarkgifts.co.uk
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-foreground/60">
                  Please include your order number where possible.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="max-w-[1200px] mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-ink/10 bg-card p-6 md:p-10 shadow-[var(--shadow-soft)]">
              {sent ? (
                <div className="py-10 text-center">
                  <span className="inline-flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-7" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl md:text-3xl font-semibold">
                    Your email is ready to send
                  </h2>
                  <p className="mt-3 text-foreground/70 max-w-md mx-auto">
                    We've opened your email app with the message pre-filled. Hit send and we'll
                    get back to you as soon as we can.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={() => setSent(false)} variant="outline">
                      Send another message
                    </Button>
                    <Button asChild>
                      <Link to="/">Back to home</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                    Send a message
                  </span>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    Tell us how we can help.
                  </h2>
                  <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Your name" htmlFor="name" error={errors.name}>
                        <Input
                          id="name"
                          name="name"
                          maxLength={100}
                          autoComplete="name"
                          placeholder="Alex Morgan"
                          required
                        />
                      </Field>
                      <Field label="Email" htmlFor="email" error={errors.email}>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          maxLength={255}
                          autoComplete="email"
                          placeholder="you@example.com"
                          required
                        />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Order number"
                        htmlFor="orderNumber"
                        hint="Optional — helps us help you faster"
                        error={errors.orderNumber}
                      >
                        <Input
                          id="orderNumber"
                          name="orderNumber"
                          maxLength={50}
                          placeholder="e.g. MM-10248"
                        />
                      </Field>
                      <Field label="Subject" htmlFor="subject" error={errors.subject}>
                        <select
                          id="subject"
                          name="subject"
                          required
                          defaultValue=""
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="" disabled>
                            Choose a subject…
                          </option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field
                      label="Message"
                      htmlFor="message"
                      hint="Please share any details, dates or personalisation we should know about."
                      error={errors.message}
                    >
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        maxLength={2000}
                        placeholder="How can we help?"
                        required
                      />
                    </Field>

                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <p className="text-xs text-foreground/60 max-w-sm">
                        By sending this message you agree to be contacted about your enquiry. We
                        never share your details.
                      </p>
                      <Button type="submit" size="lg" className="gap-2">
                        <Send className="size-4" /> Send message
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-ink/10 bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <div className="font-display text-lg font-semibold">Email</div>
              </div>
              <a
                href="mailto:hello@makermarkgifts.co.uk"
                className="mt-3 block font-display text-xl text-primary hover:underline"
              >
                hello@makermarkgifts.co.uk
              </a>
              <p className="mt-2 text-sm text-foreground/70">
                The fastest way to reach us. Please include your order number where possible.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="font-display text-lg font-semibold">Studio hours</div>
              </div>
              <ul className="mt-4 text-sm text-foreground/75 space-y-2">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-foreground">9:00 – 17:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-foreground">10:00 – 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground/60">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-foreground/60">
                Most enquiries are answered within one working day. Replies may be slower during
                peak gifting seasons.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div className="font-display text-lg font-semibold">Studio</div>
              </div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                Maker·Mark Studios Ltd
                <br />
                Birmingham city centre, UK
              </p>
              <p className="mt-2 text-xs text-foreground/60">
                Visits by appointment only — please email ahead.
              </p>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-card p-6">
              <div className="text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                Quick help
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">Maybe we've answered it</h3>
              <ul className="mt-4 grid gap-2">
                {HELP_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href as string}
                      className="group flex items-center gap-3 rounded-xl border border-ink/10 px-4 py-3 hover:border-primary/40 hover:bg-primary/[0.03] transition-colors"
                    >
                      <l.icon className="size-4 text-primary" />
                      <span className="text-sm font-medium">{l.label}</span>
                      <span className="ml-auto text-foreground/40 group-hover:text-primary transition-colors">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor} className="text-sm font-medium">
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
