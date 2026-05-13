const COLS = [
  {
    title: "Shop",
    links: ["New In", "Bestsellers", "Sale", "Gift Cards", "All Collections"],
  },
  {
    title: "Occasions",
    links: ["Weddings", "Birthdays", "Anniversary", "Engagement", "New Baby", "Christmas"],
  },
  {
    title: "Recipients",
    links: ["For Him", "For Her", "For Mum", "For Dad", "For Couples", "For Grandparents"],
  },
  {
    title: "Help",
    links: ["Delivery & Returns", "Track Order", "Personalisation Guide", "Contact Us", "FAQs"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-6 gap-10 pb-16">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl font-semibold">
              Maker<span className="text-primary">·</span>Mark
            </div>
            <p className="mt-4 text-sm text-cream/60 max-w-[36ch] leading-relaxed">
              Personalised gifts, engraved or printed and hand-finished in the UK. Serving customers across the UK, including London, Birmingham, Manchester, Glasgow, Edinburgh and Swansea.
            </p>
            <div className="mt-6 flex gap-2">
              {["Instagram", "TikTok", "Pinterest"].map((s) => (
                <a key={s} href="#" className="text-xs font-semibold uppercase tracking-widest border border-cream/20 rounded-full px-4 py-2 hover:bg-primary hover:border-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60 mb-5">{c.title}</h4>
              <ul className="space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-cream/85 hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Maker·Mark Studios Ltd. Crafted in London.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
