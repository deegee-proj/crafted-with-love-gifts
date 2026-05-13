import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/personalised-gifts")({
  head: () => ({
    meta: [
      { title: "Personalised Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "The full Maker·Mark range of personalised gifts — engraved, etched, printed and hand-finished in our UK workshop.",
      },
      { property: "og:title", content: "Personalised Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Browse our complete collection of personalised keepsakes for every person and occasion.",
      },
    ],
  }),
  component: PersonalisedGiftsPage,
});

function PersonalisedGiftsPage() {
  return (
    <CategoryPage
      eyebrow="The full collection"
      title="Personalised Gifts"
      intro="Everything we make, in one place. Each piece is engraved, etched or printed by a real person at a real bench in the UK — because a gift with someone's name on it deserves more than a sticker."
      highlights={["Made in the UK", "Live preview before you buy", "Luxury packaging as standard"]}
      subcategories={[
        { label: "Engraved Glassware", blurb: "Wine, whisky, champagne, gin." },
        { label: "Personalised Mugs", blurb: "Photo, message and magic mugs." },
        { label: "Photo Frames & Prints", blurb: "Memories framed beautifully." },
        { label: "Jewellery & Keepsakes", blurb: "Engraved necklaces and bracelets." },
        { label: "Home & Living", blurb: "Cushions, candles and chopping boards." },
        { label: "Stationery & Notebooks", blurb: "Foiled and embossed essentials." },
        { label: "Bags & Accessories", blurb: "Totes, pouches and luggage tags." },
        { label: "Kitchen & Dining", blurb: "Boards, aprons and utensils." },
        { label: "Decanters & Bar", blurb: "For the home cocktail collection." },
        { label: "Engraved Watches", blurb: "Time, given a meaning." },
        { label: "Diamanté Glassware", blurb: "Hand-set crystal sparkle." },
        { label: "Gift Sets", blurb: "Curated and ready to give." },
      ]}
      closing="Looking for something specific? Use the search at the top of the page or message our studio for bespoke commissions."
    />
  );
}
