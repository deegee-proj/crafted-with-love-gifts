import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/pets")({
  head: () => ({
    meta: [
      { title: "Personalised Pet Gifts & Gifts for Pet Lovers — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved bowls, photo mugs, portraits and keepsakes for the animals (and humans) who run the household.",
      },
      { property: "og:title", content: "Pets & Pet Lovers — Maker·Mark" },
      {
        property: "og:description",
        content: "Personalised gifts for dogs, cats and the people who love them.",
      },
    ],
  }),
  component: PetsPage,
});

function PetsPage() {
  return (
    <CategoryPage
      eyebrow="For furry, feathered and four-legged"
      title="Pets & Pet Lovers"
      intro="They sit at the table. They steal the bed. They get a stocking at Christmas. Pets are family — and our pet collection treats them that way, with engraved keepsakes for them and the humans who adore them."
      highlights={["Pet-safe materials", "Photo portraits", "Memorial keepsakes"]}
      subcategories={[
        { label: "Personalised Dog Bowls", blurb: "Ceramic and stainless, name engraved." },
        { label: "Pet ID Tags", blurb: "Tough, etched, easy to read." },
        { label: "Pet Photo Portraits", blurb: "Hand-styled illustrated prints." },
        { label: "Dog Beds & Blankets", blurb: "Embroidered with their name." },
        { label: "Pet Collars & Leads", blurb: "Engraved buckles, soft webbing." },
        { label: "Pet Memorial Gifts", blurb: "For the ones who left paw prints." },
        { label: "Cat Lover Gifts", blurb: "Mugs, prints and homewares." },
        { label: "Dog Lover Gifts", blurb: "For the proud dog parent." },
        { label: "Horse & Equestrian Gifts", blurb: "Engraved keepsakes for riders." },
        { label: "Pet Photo Mugs", blurb: "Their face on every brew." },
        { label: "Pet Christmas Stockings", blurb: "Yes, they get one too." },
        { label: "New Puppy & Kitten Gifts", blurb: "Welcome to the family." },
      ]}
      closing="Looking for a memorial keepsake? Our studio offers a private hand-drawn portrait service — get in touch."
    />
  );
}
