import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/personalised-mugs")({
  head: () => ({
    meta: [
      { title: "Personalised Mugs — Maker·Mark" },
      {
        name: "description",
        content:
          "Photo mugs, magic mugs and message mugs — printed and dispatched from our UK studio with care.",
      },
      { property: "og:title", content: "Personalised Mugs — Maker·Mark" },
      {
        property: "og:description",
        content: "From morning brews to magic heat-change reveals — find a mug worth keeping.",
      },
    ],
  }),
  component: PersonalisedMugsPage,
});

function PersonalisedMugsPage() {
  return (
    <CategoryPage
      eyebrow="Tea, coffee and reasons to smile"
      title="Personalised Mugs"
      intro="A mug isn't a small gift. It's the first thing they pick up in the morning and the thing they reach for when the day gets long. Make sure it has a face, a name or a joke they love."
      highlights={["Dishwasher safe", "Ceramic & enamel", "Photo upload preview"]}
      subcategories={[
        { label: "Photo Upload Mugs", blurb: "Your snap, fired into ceramic." },
        { label: "Magic Heat-Change Mugs", blurb: "The reveal happens at first sip." },
        { label: "Name & Initial Mugs", blurb: "Simple, classic, theirs." },
        { label: "Funny & Quote Mugs", blurb: "For the office and the inside joke." },
        { label: "Couples & Pair Mug Sets", blurb: "Two mugs, one story." },
        { label: "Family Mugs", blurb: "Mum, Dad, Granny, Granddad." },
        { label: "Kids & Children's Mugs", blurb: "Plastic-safe drinkware." },
        { label: "Travel & Insulated Mugs", blurb: "Commute-ready engraving." },
        { label: "Enamel Camping Mugs", blurb: "For the outdoorsy ones." },
        { label: "Birthday Mugs", blurb: "Newspaper headline editions." },
        { label: "Christmas Mugs", blurb: "Festive, ready to wrap." },
        { label: "Pet Photo Mugs", blurb: "Their best friend, on a mug." },
      ]}
      closing="All Maker·Mark mugs are printed and quality-checked in the UK before they leave the studio."
    />
  );
}
