import heroImg from "@/assets/hero-gifts.jpg";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 lg:pt-16 pb-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="size-3.5" /> Hand-finished in the UK since 2021
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-semibold tracking-tight">
            Made by Us. <em className="text-primary not-italic">Marked</em> by You.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-[52ch] leading-relaxed">
            From our UK studios, we turn your words, photos and logos into thoughtful
            personalised gifts for the people, milestones and moments that matter.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#bestsellers" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 h-14 font-semibold shadow-pop hover:scale-[1.02] active:scale-[0.99] transition-transform">
              Shop bestsellers
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#occasions" className="inline-flex items-center gap-2 rounded-full bg-background border border-ink/15 px-7 h-14 font-semibold hover:border-ink/40 transition-colors">
              Browse occasions
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
              <span className="ml-1.5 font-semibold text-foreground">4.9</span>
            </div>
            <span>Rated Excellent · 18,402 reviews</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="absolute -top-8 -left-8 size-40 rounded-full bg-accent/40 blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-10 size-56 rounded-full bg-primary/30 blur-3xl -z-10" />

          <div className="relative rounded-[2rem] overflow-hidden shadow-soft ring-1 ring-ink/5 bg-card">
            <img
              src={heroImg}
              alt="A flat lay of personalised gifts including an engraved champagne flute, monogrammed leather notebook and a custom name mug"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-background/85 backdrop-blur-md rounded-2xl px-4 py-3 shadow-soft">
              <div className="size-10 rounded-full bg-primary/15 grid place-items-center text-primary font-bold">£</div>
              <div className="flex-1">
                <p className="text-sm font-semibold">From £9.99 with live preview</p>
                <p className="text-xs text-foreground/60">See your gift before you buy.</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Try it</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee trust bar */}
      <div className="border-y border-ink/5 bg-secondary/40 overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-4 text-sm font-medium tracking-wide text-foreground/60">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0 gap-12 pr-12">
              {[
                "★ Feefo Platinum Service 2025",
                "Free UK delivery over £50",
                "Live preview on every product",
                "Trusted by thousands of UK gift-givers",
                "Engraved & dispatched within 24h",
                "Hand-finished in Birmingham",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  {t} <span className="text-primary">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
