const STEPS = [
  { n: "01", title: "Choose your gift", body: "Browse 500+ premium personalisable products from our London studio." },
  { n: "02", title: "Make it personal", body: "Add a name, date or message and see a live preview before you buy." },
  { n: "03", title: "Hand-finished & shipped", body: "We engrave or print your gift and dispatch it within 24 hours." },
];

export function HowItWorks() {
  return (
    <section className="bg-ink text-cream py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-[40ch] mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">Personalisation, simplified</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Crafted with care, delivered with speed.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-cream/15 pt-6">
              <span className="font-display text-5xl text-primary">{s.n}</span>
              <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-cream/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
