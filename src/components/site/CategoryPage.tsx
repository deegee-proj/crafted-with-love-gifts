import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type Subcategory = {
  label: string;
  blurb?: string;
};

export type CategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights?: string[];
  subcategories: Subcategory[];
  closing?: string;
};

export function CategoryPage({
  eyebrow,
  title,
  intro,
  highlights,
  subcategories,
  closing,
}: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-ink/5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 20% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 90% 30%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <Sparkles className="size-3.5" /> {eyebrow}
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                {title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
                {intro}
              </p>

              {highlights && highlights.length > 0 && (
                <ul className="mt-7 flex flex-wrap gap-2">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[12px] tracking-wide rounded-full border border-ink/10 bg-background/70 backdrop-blur px-3 py-1.5 text-foreground/80"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* Subcategories */}
        <section className="max-w-[1400px] mx-auto px-6 py-14 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Shop the collection
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse the full range of {title.toLowerCase()} subcategories.
              </p>
            </div>
            <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {subcategories.length} categories
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {subcategories.map((s, i) => (
              <Link
                key={s.label}
                to="/"
                className="group relative rounded-2xl border border-ink/10 bg-card p-5 md:p-6 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--primary) 8%, transparent), transparent 60%)",
                  }}
                />
                <span className="text-[10px] tracking-[0.22em] uppercase text-primary/80 font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg md:text-xl font-semibold tracking-tight leading-snug">
                  {s.label}
                </h3>
                {s.blurb && (
                  <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
                    {s.blurb}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  Coming soon
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          {closing && (
            <p className="mt-12 max-w-2xl text-sm text-foreground/70 leading-relaxed">
              {closing}
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
