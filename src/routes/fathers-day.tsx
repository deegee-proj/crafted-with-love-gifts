import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/fathers-day")({
  head: () => ({
    meta: [
      { title: "Personalised Father's Day Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Hand-finished personalised Father's Day gifts engraved in the UK — for every kind of dad, granddad and stepdad.",
      },
      { property: "og:title", content: "Personalised Father's Day Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Engraved keepsakes, glassware, mugs and photo gifts made for the dad who has everything.",
      },
    ],
  }),
  component: FathersDayPage,
});

function FathersDayPage() {
  return (
    <CategoryPage
      eyebrow="Father's Day · Sun 21 June"
      title="Personalised Father's Day Gifts"
      intro="Skip the predictable tie. Our Father's Day collection is hand-engraved in our UK workshop — meaningful pieces that turn an ordinary Sunday into a story he'll retell for years."
      highlights={["Engraved in the UK", "Express delivery", "Free message card"]}
      subcategories={[
        { label: "Engraved Whisky Glasses", blurb: "His name. His tipple. His glass." },
        { label: "Personalised Beer & Pint Glasses", blurb: "From craft IPA to a perfect Guinness." },
        { label: "Photo Mugs for Dad", blurb: "Family snaps fired into ceramic." },
        { label: "Engraved Hip Flasks", blurb: "Pocket-sized, deeply personal." },
        { label: "Decanters & Whisky Sets", blurb: "Display-worthy crystal." },
        { label: "Wallets & Card Holders", blurb: "Discreet engraving inside." },
        { label: "BBQ & Grill Tools", blurb: "For the king of the coals." },
        { label: "Golf Gifts", blurb: "Tees, balls, hip flasks." },
        { label: "Watches & Watch Boxes", blurb: "Engraved keepsakes." },
        { label: "Gifts For Granddad", blurb: "Three generations, one gift." },
        { label: "Gifts For Stepdad", blurb: "Chosen family, chosen words." },
        { label: "Gifts For New Dads", blurb: "First Father's Day moments." },
      ]}
      closing="Need it fast? Order by 2pm for next-day engraving on most Father's Day pieces."
    />
  );
}
