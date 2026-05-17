import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FAQ, FAQS } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

const TITLE = "FAQs | Personalised Gifts — Maker·Mark";
const DESCRIPTION =
  "Answers to frequently asked questions about ordering personalised gifts in the UK — from timings and previews to delivery, payments and returns.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "Maker·Mark" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
