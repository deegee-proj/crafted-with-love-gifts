import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Gifts for Every Occasion — Birthdays, Weddings, Anniversaries — Maker·Mark";
const DESCRIPTION = "Personalised gifts for every occasion — weddings, birthdays, anniversaries, Father's Day, Mother's Day, christenings and more. Hand-engraved in the UK.";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/occasions" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/occasions" }],
  }),
  component: OccasionsPage,
});

function OccasionsPage() {
  return (
    <CategoryPage
      eyebrow="Every moment, marked"
      title="Personalised Gifts for Every Occasion"
      intro={["Whatever you're celebrating, we have a personalised gift for it. Our occasions collection covers every milestone moment — weddings, birthdays, anniversaries, christenings, retirements, graduations, Father's Day, Mother's Day, Valentine's Day, Christmas and everything in between — with hand-engraved keepsakes made to order in our UK studio.","Each piece can be personalised with names, dates, photos or a message of your choice, so the gift carries the meaning of the moment long after the event itself. Browse by occasion below to find the perfect personalised present for your celebration."]}
      productCount={12}
      seoSections={[{"heading":"Personalised gifts for life's big moments","body":["The most memorable gifts are the ones tied to a specific moment in someone's life. Whether it is a 21st birthday, a silver wedding anniversary, a christening or a hard-won retirement, our occasions collection makes it easy to find a personalised keepsake that captures the day and turns it into something the recipient can hold on to forever.","Engraved glassware, photo frames, jewellery boxes, prints, decanters and bespoke leather goods are just the start. Every piece is made by hand in our UK studio, with no minimum order and most items dispatched within 1-2 working days."]},{"heading":"Seasonal occasions and yearly celebrations","body":["Some occasions come around every year — Father's Day, Mother's Day, Valentine's Day, Christmas — and a personalised gift is what stops them feeling repetitive. Our seasonal occasion ranges are refreshed each year with new engraving styles, designs and limited-edition pieces, so even regular gift-givers have something fresh to choose from.","Plan ahead with our gift reminder list, or use our express delivery options for last-minute orders right up to the day before."]},{"heading":"Made in the UK, ready to give","body":["Every Maker·Mark occasion gift is engraved, printed or hand-finished in our UK studio. We use premium materials — crystal, full-grain leather, solid timber, ceramic and hallmarked metals — and check every order by hand before it leaves us.","All occasion gifts arrive gift-wrapped in tissue paper with a handwritten-style message card, ready to give straight from the box."]}]}
    />
  );
}
