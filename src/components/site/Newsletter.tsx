export function Newsletter() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 pb-20">
      <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center overflow-hidden relative">
        <div className="absolute -top-20 -right-20 size-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Get 10% off your first gift.
          </h2>
          <p className="mt-3 text-primary-foreground/85 max-w-[42ch]">
            Join the studio newsletter for early access to new collections, gifting guides and seasonal offers.
          </p>
        </div>
        <form className="relative flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="your@email.co.uk"
            className="flex-1 h-14 rounded-full bg-background text-foreground px-6 text-sm outline-none focus:ring-2 focus:ring-accent"
            aria-label="Email address"
          />
          <button className="h-14 px-8 rounded-full bg-ink text-cream font-semibold hover:bg-cream hover:text-ink transition-colors">
            Join the studio
          </button>
        </form>
      </div>
    </section>
  );
}
