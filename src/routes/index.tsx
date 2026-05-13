import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Occasions } from "@/components/site/Occasions";
import { Bestsellers } from "@/components/site/Bestsellers";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

const TITLE = "Maker·Mark — Personalised Gifts, Engraved in the UK";
const DESCRIPTION =
  "Premium personalised gifts hand-finished in our London studio. Engraved glassware, custom mugs, photo frames & keepsakes with live preview and free UK delivery over £50.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "personalised gifts, engraved gifts UK, custom mugs, personalised wedding gifts, photo frames, engraved glassware, personalised birthday gifts" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Maker·Mark" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Maker·Mark",
          description: DESCRIPTION,
          url: "/",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "18402",
          },
          areaServed: "GB",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Occasions />
        <Bestsellers />
        <HowItWorks />
        <Testimonials />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
