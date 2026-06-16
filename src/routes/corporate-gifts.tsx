import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Corporate & Branded Business Gifts UK — Maker·Mark";
const DESCRIPTION = "Premium branded and personalised corporate gifts, hand-finished in the UK. Logo engraving on glassware, decanters, awards, mugs and hampers — from single bespoke pieces to bulk orders.";

export const Route = createFileRoute("/corporate-gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/corporate-gifts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/corporate-gifts" }],
  }),
  component: CorporateGiftsPage,
});

function CorporateGiftsPage() {
  return (
    <CategoryPage
      eyebrow="Business & Corporate Gifts"
      title="Personalised Corporate Gifts"
      intro={[
        "Premium branded and personalised corporate gifts designed to leave a lasting impression. From client gifting to large-scale campaigns, Maker·Mark helps businesses deliver thoughtful, high-quality branded gifts without the usual hassle — with full in-house production and an experienced UK team behind every order, we maintain complete control over quality, consistency and turnaround.",
        "Whether you need a small run of executive thank-yous or a large-volume order for a conference, onboarding pack or end-of-year campaign, we make the process simple, reliable and right on time. Explore a selection of popular corporate gifts below, or request a quote for any product across our full range — everything on our website can be tailored for your business with logo engraving, branded packaging and bespoke presentation.",
      ]}
      productCount={12}
      seoSections={[
        {
          heading: "Branded corporate gifts, made in the UK",
          body: [
            "Our personalised corporate gifts cover everything from logo-engraved crystal decanters, whisky glasses and tumblers to engraved awards, wooden wine boxes, leather notebooks, branded mugs, water bottles and luxury gift hampers. Each piece is hand-finished in our UK studio using single-pass laser engraving on glass, metal, leather and wood, so your brand mark stays crisp on items recipients are genuinely proud to keep on their desk or take home.",
            "Because every order is produced in-house, we control quality from the first proof through to dispatch. That means consistent finishes across hundreds of units, a digital proof for every job before production starts and the flexibility to mix products inside a single branded gift set.",
          ],
        },
        {
          heading: "From single bespoke pieces to bulk corporate orders",
          body: [
            "There is no minimum order. We work with start-ups ordering a one-off engraved gift for a departing director, agencies producing 50 client thank-yous and enterprise teams shipping 5,000+ branded items for a national rollout. Tiered pricing kicks in as quantities grow and quotes are always itemised, so you can see exactly what you are paying for.",
            "Need split-dispatch to home addresses for a remote team? Staged drops across multiple offices? Branded outer packaging with a personalised message card inside? Tell us how the gift needs to land and we will build the logistics around it.",
          ],
        },
        {
          heading: "Logo engraving, presentation and account management",
          body: [
            "Send us a vector logo (.ai, .eps, .pdf or .svg) and our studio team will set up artwork, position your mark and send a digital proof before anything is engraved. Gift presentation — tissue paper, branded swing tags, personalised message cards and premium gift boxes — is available across the range, so corporate gifts arrive feeling considered rather than corporate.",
            "Every corporate enquiry is handled by a dedicated account manager from initial brief through to delivery. One point of contact, same-day quotes on most enquiries and clear timelines you can plan around.",
          ],
        },
        {
          heading: "Trusted for client gifts, employee rewards and events",
          body: [
            "UK businesses use Maker·Mark for client gifting, new-business pitches, employee onboarding packs, long-service awards, sales incentives, retirement gifts, conference giveaways, speaker thank-yous, influencer drops and end-of-year Christmas hampers. Whether the brief is a quiet executive piece or a high-energy branded campaign, we help you choose products that suit the audience, the occasion and the budget.",
            "Ready to start? Request a quote with your quantity, deadline and budget per unit and our corporate desk will come back with product options, mock-ups and tiered pricing — usually the same working day.",
          ],
        },
      ]}
    />
  );
}
