import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/by-recipient")({
  head: () => ({
    meta: [
      { title: "Shop by Recipient — Personalised Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Find the perfect personalised gift for him, her, mum, dad, couples, grandparents, kids and friends.",
      },
      { property: "og:title", content: "Shop by Recipient — Maker·Mark" },
      {
        property: "og:description",
        content: "Tell us who it's for — we'll show you what to give.",
      },
    ],
  }),
  component: ByRecipientPage,
});

function ByRecipientPage() {
  return (
    <CategoryPage
      eyebrow="Tell us who it's for"
      title="Shop by Recipient"
      intro="Sometimes you know the person, not the gift. That's where this lives. Browse engraved keepsakes curated by who you're shopping for — from the impossible-to-buy-for dad to the friend who already has everything."
      highlights={["Curated by personality", "Editor's picks", "Gift card option"]}
      subcategories={[
        { label: "Gifts For Him", blurb: "From craft beer to fine watches." },
        { label: "Gifts For Her", blurb: "Considered, never clichéd." },
        { label: "Gifts For Mum", blurb: "Heartfelt without being twee." },
        { label: "Gifts For Dad", blurb: "Whisky, watches and tools." },
        { label: "Gifts For Couples", blurb: "Two names, one keepsake." },
        { label: "Gifts For Grandparents", blurb: "Photo frames and family mugs." },
        { label: "Gifts For Kids", blurb: "Engraved and grown-up-quality." },
        { label: "Gifts For Teens", blurb: "Cool enough to actually use." },
        { label: "Gifts For Friends", blurb: "Inside jokes, made permanent." },
        { label: "Gifts For Sisters", blurb: "Matching and mismatched." },
        { label: "Gifts For Brothers", blurb: "Hip flasks and tankards." },
        { label: "Gifts For Pet Lovers", blurb: "For the proud pet parent." },
      ]}
      closing="Still stuck? Maker·Mark gift cards are available in any amount and never expire."
    />
  );
}
