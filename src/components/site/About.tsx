export function About() {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">About Maker·Mark</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">The art of giving, made personal.</h2>
        </div>
        <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/75">
          <p>
            We are a family-run UK studio creating high-quality personalised gifts and handcrafted keepsakes for every occasion.
            We specialise in a beautiful range of custom-made items, from engraved glassware and custom mugs to photo frames,
            unique wedding gifts, and bespoke birthday presents. Every single piece is made to order right here in our studio
            and carefully hand-finished.
          </p>
          <p>
            Founded in 2021, we make it simple to buy custom gifts online, offering seamless checkout alongside fast UK delivery
            and flexible worldwide shipping. Whether you are celebrating a major milestone or sending a heartfelt gesture,
            Maker·Mark makes it easy to give a gift that is genuinely thoughtful and unmistakably personal.
          </p>
        </div>
      </div>
    </section>
  );
}
