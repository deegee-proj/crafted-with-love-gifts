import wedding from "@/assets/occ-wedding.jpg";
import birthday from "@/assets/occ-birthday.jpg";
import anniversary from "@/assets/occ-anniversary.jpg";
import baby from "@/assets/occ-baby.jpg";

const OCC = [
  { name: "Weddings", img: wedding, blurb: "Toast the happy couple" },
  { name: "Birthdays", img: birthday, blurb: "Make their day unforgettable" },
  { name: "Anniversary", img: anniversary, blurb: "Mark the milestones" },
  { name: "New Baby", img: baby, blurb: "Welcome the little one" },
];

const RECIPIENTS = ["For Him", "For Her", "For Mum", "For Dad", "For Couples", "For Grandparents", "For Teachers", "For Kids"];

export function Occasions() {
  return (
    <section id="occasions" className="bg-secondary/40 border-y border-ink/5 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">Shop by occasion</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">A gift for every moment.</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm font-semibold border-b border-ink pb-1 hover:text-primary hover:border-primary transition-colors">
            See all occasions →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {OCC.map((o) => (
            <a key={o.name} href="#" className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-background ring-1 ring-ink/5">
                <img
                  src={o.img}
                  alt={`Personalised ${o.name.toLowerCase()} gifts`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl font-semibold">{o.name}</h3>
                <p className="text-sm text-foreground/60 mt-0.5">{o.blurb}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Recipients chips */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60 mb-4">Shop by recipient</p>
          <div className="flex flex-wrap gap-2.5">
            {RECIPIENTS.map((r) => (
              <a key={r} href="#" className="inline-flex items-center rounded-full bg-background border border-ink/10 px-5 h-11 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                {r}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
