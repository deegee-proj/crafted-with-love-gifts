import glassware from "@/assets/cat-glassware.jpg";
import mugs from "@/assets/cat-mugs.jpg";
import frames from "@/assets/cat-frames.jpg";

const CATS = [
  { name: "Engraved Glassware", count: "240+ designs", img: glassware, accent: "bg-primary/8" },
  { name: "Personalised Mugs", count: "180+ designs", img: mugs, accent: "bg-accent/30" },
  { name: "Photo Frames & Gifts", count: "120+ designs", img: frames, accent: "bg-blush" },
];

export function Categories() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Shop the studio</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-[18ch]">Bestselling categories</h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold border-b border-ink pb-1 hover:text-primary hover:border-primary transition-colors">
          Browse all collections →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {CATS.map((c) => (
          <a key={c.name} href="#" className={`group relative overflow-hidden rounded-3xl ${c.accent} p-6 aspect-[4/5] flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-soft`}>
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight max-w-[14ch]">{c.name}</h3>
              <p className="mt-2 text-sm text-foreground/60">{c.count}</p>
            </div>
            <div className="relative z-10 inline-flex items-center self-start gap-2 rounded-full bg-background px-4 py-2 text-xs font-semibold shadow-soft group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              Shop now →
            </div>
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              width={800}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </a>
        ))}
      </div>
    </section>
  );
}
