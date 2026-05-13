import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/home-garden")({
  head: () => ({
    meta: [
      { title: "Personalised Home & Garden Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved house signs, cushions, candles, planters and home keepsakes hand-finished in the UK.",
      },
      { property: "og:title", content: "Personalised Home & Garden Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Make the house feel like theirs — inside and out.",
      },
    ],
  }),
  component: HomeGardenPage,
});

function HomeGardenPage() {
  return (
    <CategoryPage
      eyebrow="Inside the front door, and beyond"
      title="Personalised Home & Garden Gifts"
      intro="A new home, a new chapter, a slow weekend in the garden. Our home and garden collection helps mark all of it — with engraved house signs, embroidered cushions, hand-poured candles and keepsakes that earn their place on the shelf."
      highlights={["Weatherproof outdoor pieces", "Hand-poured candles", "House warming ready"]}
      subcategories={[
        { label: "House Signs & Door Plaques", blurb: "Slate, oak and metal." },
        { label: "Engraved Cushions", blurb: "Family names and dates." },
        { label: "Personalised Candles", blurb: "Hand-poured in the UK." },
        { label: "Wall Art & Prints", blurb: "Foiled and framed." },
        { label: "Engraved Chopping Boards", blurb: "Worktop centrepieces." },
        { label: "Doormats", blurb: "Coir, embossed names." },
        { label: "Garden Markers & Plant Tags", blurb: "Slate and bamboo." },
        { label: "Personalised Planters", blurb: "Stoneware and terracotta." },
        { label: "Engraved Bird Boxes", blurb: "Garden-ready keepsakes." },
        { label: "Coasters & Placemats", blurb: "Sets of four, etched." },
        { label: "Throws & Blankets", blurb: "Embroidered initials." },
        { label: "Bathroom & Spa Gifts", blurb: "Stoneware and slate." },
      ]}
      closing="Outdoor pieces are sealed for UK weather — re-treat annually for the longest life."
    />
  );
}
