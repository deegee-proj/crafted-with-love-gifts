export function About() {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">About Maker·Mark</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">A studio built on the personal touch.</h2>
        </div>
        <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/75">
          <p>
            We're a UK personalised gifts studio creating engraved and hand-finished keepsakes for every occasion.
            From custom mugs and engraved glassware to photo frames, wedding gifts and personalised birthday presents,
            every piece is made to order and quality-checked by our team.
          </p>
          <p>
            With fast UK delivery, worldwide shipping and thousands of happy customers since 2021, Maker·Mark makes
            it easy to give a gift that's thoughtful, lasting and unmistakably personal.
          </p>
        </div>
      </div>
    </section>
  );
}
