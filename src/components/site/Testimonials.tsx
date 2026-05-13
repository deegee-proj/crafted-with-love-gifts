import { Star } from "lucide-react";

const REVIEWS = [
  { quote: "Absolutely beautiful engraving — better than I imagined. Arrived next day, perfectly wrapped.", name: "Sophie R.", item: "Crystal Wine Glass" },
  { quote: "I've ordered six times now and every gift has been a hit. The live preview is a game-changer.", name: "James M.", item: "Wedding Flutes" },
  { quote: "My mum cried when she opened her photo frame. Couldn't recommend Maker·Mark more.", name: "Priya K.", item: "Silver Photo Frame" },
];

export function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Loved by gifters</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-[20ch]">A million reasons to smile.</h2>
        </div>
        <div className="hidden md:block text-right">
          <div className="flex items-center gap-1.5 justify-end">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-5 fill-accent text-accent" />)}
          </div>
          <p className="mt-2 text-sm text-foreground/60"><span className="font-semibold text-foreground">4.9 / 5</span> · 18,402 verified reviews</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-3xl bg-secondary/50 p-7 flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-primary text-primary" />)}
            </div>
            <blockquote className="font-display text-xl leading-snug">"{r.quote}"</blockquote>
            <figcaption className="mt-6 pt-4 border-t border-ink/10 text-sm">
              <div className="font-semibold">{r.name}</div>
              <div className="text-foreground/60">Bought a {r.item}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
