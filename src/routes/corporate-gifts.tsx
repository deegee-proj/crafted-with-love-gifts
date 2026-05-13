import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/corporate-gifts")({
  head: () => ({
    meta: [
      { title: "Personalised Corporate & Business Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved client and employee gifts at scale — branded glassware, decanters, awards and keepsakes from a UK studio.",
      },
      { property: "og:title", content: "Corporate Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Considered, branded gifting for clients, teams and milestone moments.",
      },
    ],
  }),
  component: CorporateGiftsPage,
});

function CorporateGiftsPage() {
  return (
    <CategoryPage
      eyebrow="For the people who make the business"
      title="Corporate & Business Gifts"
      intro="Generic swag goes in the bin. Considered, well-made gifts get used, displayed and remembered. Our corporate studio handles bulk engraving, branded packaging and dedicated dispatch — without the cardboard-box energy."
      highlights={["Bulk pricing", "Branded packaging", "Dedicated account manager"]}
      subcategories={[
        { label: "Branded Glassware", blurb: "Logo-engraved tumblers and flutes." },
        { label: "Engraved Decanters", blurb: "Boardroom-worthy crystal." },
        { label: "Awards & Trophies", blurb: "Year-end recognition pieces." },
        { label: "Executive Pens & Stationery", blurb: "Engraved metal and leather." },
        { label: "Client Welcome Gifts", blurb: "Onboard with intent." },
        { label: "Employee Anniversary Gifts", blurb: "Five, ten, twenty years." },
        { label: "Conference & Event Gifts", blurb: "Bulk runs, fast turnaround." },
        { label: "Hampers & Gift Sets", blurb: "Curated and co-branded." },
        { label: "Retirement Gifts", blurb: "End-of-career keepsakes." },
        { label: "Branded Notebooks", blurb: "Foiled and embossed covers." },
        { label: "Christmas Corporate Gifts", blurb: "Plan ahead — book before October." },
        { label: "Bespoke Commissions", blurb: "Studio briefs welcomed." },
      ]}
      closing="For orders over 25 units, contact our corporate desk for tiered pricing and a dedicated production slot."
    />
  );
}
