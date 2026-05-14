import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Categories } from "@/components/site/Categories";
import { Occasions } from "@/components/site/Occasions";

import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FAQ, FAQS } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "Personalised Gifts UK | Engraved & Custom Gifts — Maker·Mark";
const DESCRIPTION =
  "Personalised gifts hand-finished in the UK. Engraved glassware, custom mugs, photo frames and keepsakes for weddings, birthdays, anniversaries and new baby. Free UK delivery over £50.";
const KEYWORDS = [
  "personalised gifts",
  "personalised gifts UK",
  "engraved gifts",
  "custom gifts",
  "personalised wedding gifts",
  "personalised birthday gifts",
  "personalised anniversary gifts",
  "personalised gifts for him",
  "personalised gifts for her",
  "personalised gifts for mum",
  "personalised gifts for dad",
  "personalised mugs",
  "engraved glassware",
  "personalised photo frames",
  "personalised photo gifts",
  "personalised keepsakes",
  "personalised christmas gifts",
  "personalised baby gifts",
  "unique gift ideas UK",
].join(", ");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "Birmingham, United Kingdom" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_GB" },
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
          image: "/",
          priceRange: "££",
          paymentAccepted: [
            "Visa",
            "Mastercard",
            "American Express",
            "Maestro",
            "PayPal",
            "Apple Pay",
            "Google Pay",
            "Klarna",
            "Clearpay",
          ],
          currenciesAccepted: "GBP",
          areaServed: { "@type": "Country", name: "United Kingdom" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Birmingham",
            addressCountry: "GB",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "512",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Maker·Mark",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
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
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Occasions />
        
        <HowItWorks />
        <Testimonials />
        <About />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
