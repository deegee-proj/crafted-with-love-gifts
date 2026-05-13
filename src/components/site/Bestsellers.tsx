import glassware from "@/assets/cat-glassware.jpg";
import mugs from "@/assets/cat-mugs.jpg";
import frames from "@/assets/cat-frames.jpg";
import wedding from "@/assets/occ-wedding.jpg";
import { Heart } from "lucide-react";

const PRODUCTS = [
  { name: "Personalised Crystal Wine Glass", price: "£19.99", tag: "Bestseller", img: glassware },
  { name: "Custom Script Name Mug", price: "£9.99", tag: "New", img: mugs },
  { name: "Engraved Silver Photo Frame", price: "£24.99", tag: "Trending", img: frames },
  { name: "Wedding Champagne Flute Pair", price: "£34.99", tag: "Bestseller", img: wedding },
];

export function Bestsellers() {
  return (
    <section id="bestsellers" className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Studio favourites</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">This week's bestsellers.</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {PRODUCTS.map((p) => (
          <article key={p.name} className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/40">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
              <button aria-label="Add to wishlist" className="absolute top-3 right-3 size-9 rounded-full bg-background/90 backdrop-blur grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Heart className="size-4" />
              </button>
              <div className="absolute inset-x-3 bottom-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-ink text-cream rounded-full h-11 text-sm font-semibold hover:bg-primary transition-colors">
                  Personalise →
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium leading-snug">{p.name}</h3>
              <span className="text-sm font-semibold text-primary shrink-0">{p.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
