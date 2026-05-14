import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQS = [
  {
    q: "How long does it take to make and deliver a personalised gift?",
    a: "Most of our personalised gifts are hand-finished within 24–48 hours of your order. Once produced, your chosen UK delivery service begins — usually 1–2 working days for Tracked 24/48, or guaranteed next working day with our Next Day Express option. Full timings are on our delivery page.",
  },
  {
    q: "Can I see a preview before I order?",
    a: "Yes — most of our personalised products show a live preview as you type or upload, so you can see exactly how your engraving, photo or message will look before you check out.",
  },
  {
    q: "What kinds of personalised gifts do you make?",
    a: "We design personalised gifts for every occasion — engraved glassware, custom mugs, photo frames and prints, pet portraits, memorial keepsakes, home & garden pieces, fashion accessories and corporate gifting. Browse by category or by recipient to find ideas for him, her, mum, dad, couples and grandparents.",
  },
  {
    q: "Do you ship across the UK?",
    a: "Yes, we ship across the United Kingdom — including London, Birmingham, Manchester, Glasgow, Edinburgh, Cardiff and Swansea. Free standard UK delivery is included on orders over £50. Some remote postcodes (Scottish Highlands & Islands, Northern Ireland, Channel Islands, Isle of Man, Isles of Scilly) may take a little longer.",
  },
  {
    q: "Can I return a personalised gift?",
    a: "Because personalised items are made to order especially for you, they cannot be returned for a change of mind. If your order arrives damaged, faulty, incorrect or not as described, please email us straight away and we'll put it right with a replacement, correction or refund.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major UK debit and credit cards (Visa, Mastercard, American Express, Maestro), plus PayPal, Apple Pay, Google Pay, and buy-now-pay-later through Klarna and Clearpay. Checkout is secure and PCI-compliant.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes — digital gift cards are available in a range of values and are delivered straight to the recipient's inbox, perfect when you want to let them choose their own personalised gift.",
  },
  {
    q: "Can I order in bulk for weddings, events or corporate gifting?",
    a: "Absolutely. Our trade and corporate gifting team can help with branded, bulk or wedding-favour orders, including bespoke designs and dedicated production slots. Email us and we'll come back with options.",
  },
  {
    q: "What if I made a typo in my personalisation?",
    a: "Please double-check your personalisation before placing the order — we produce exactly what's submitted at checkout. If you spot a mistake straight away, contact us and we'll do our very best to catch the order before production begins.",
  },
  {
    q: "Are your gifts made in the UK?",
    a: "Yes. Every order is hand-finished in our Birmingham studio by a small team that genuinely cares about how each piece looks and feels in your hands.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions about personalised gifts"
      className="border-t border-ink/10"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
            <HelpCircle className="size-3.5" /> Frequently asked
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Personalised gifts, answered.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed max-w-md">
            Everything you need to know about ordering personalised gifts in the UK — from
            timings and previews to delivery, payments and returns.
          </p>
          <a
            href="mailto:hello@makermarkgifts.co.uk"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Still need help? Email the studio →
          </a>
        </div>

        <div className="lg:col-span-7">
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
        </div>
      </div>
    </section>
  );
}
