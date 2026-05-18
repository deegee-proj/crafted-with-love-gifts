import { Sparkles } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type SeoSection = {
  heading: string;
  body: string | string[];
};

export type CategoryPageProps = {
  eyebrow?: string;
  title: string;
  intro: string | string[];
  productCount?: number;
  seoSections?: SeoSection[];
};

export function CategoryPage({
  eyebrow,
  title,
  intro,
  productCount = 12,
  seoSections = [],
}: CategoryPageProps) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Title + SEO intro */}
        <section className="relative overflow-hidden border-b border-ink/5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 20% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 90% 30%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
            }}
          />
          <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-primary font-semibold">
                <Sparkles className="size-3.5" /> {eyebrow}
              </span>
            )}
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {title}
            </h1>
            <div className="mt-6 space-y-4 text-base md:text-lg text-foreground/75 leading-relaxed max-w-3xl">
              {introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Product grid placeholders */}
        <section className="max-w-[1400px] mx-auto px-6 py-12 md:py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Shop {title}
            </h2>
            <span className="hidden sm:inline text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Products coming soon
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {Array.from({ length: productCount }).map((_, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-ink/10 bg-card overflow-hidden hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div
                  className="aspect-square w-full"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--muted) 80%, transparent), color-mix(in oklab, var(--primary) 6%, transparent))",
                  }}
                />
                <div className="p-4">
                  <div className="h-3 w-3/4 rounded bg-ink/10" />
                  <div className="mt-2 h-3 w-1/3 rounded bg-ink/10" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom SEO content */}
        {seoSections.length > 0 && (
          <section className="border-t border-ink/5 bg-muted/30">
            <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
              <div className="space-y-12 max-w-3xl">
                {seoSections.map((s) => {
                  const paragraphs = Array.isArray(s.body) ? s.body : [s.body];
                  return (
                    <div key={s.heading}>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                        {s.heading}
                      </h2>
                      <div className="mt-4 space-y-4 text-[15px] md:text-base text-foreground/75 leading-relaxed">
                        {paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
