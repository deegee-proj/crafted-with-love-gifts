import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/memorial-gifts")({
  head: () => ({
    meta: [
      { title: "Personalised Memorial & Remembrance Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved memorial keepsakes, photo frames, garden plaques and remembrance jewellery — handled with care in our UK studio.",
      },
      { property: "og:title", content: "Memorial & Remembrance Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Quiet, considered keepsakes for the ones we hold close.",
      },
    ],
  }),
  component: MemorialGiftsPage,
});

function MemorialGiftsPage() {
  return (
    <CategoryPage
      eyebrow="Held close, remembered always"
      title="Memorial & Remembrance Gifts"
      intro="Some gifts aren't for celebrating — they're for remembering. Our memorial collection is made with quiet care: engraved keepsakes, photo frames and garden pieces that give grief somewhere to rest."
      highlights={["Handled with care", "Discreet packaging", "Studio support team"]}
      subcategories={[
        { label: "Memorial Photo Frames", blurb: "Framed and engraved." },
        { label: "Remembrance Candles", blurb: "Hand-poured in the UK." },
        { label: "Memorial Jewellery", blurb: "Lockets and engraved charms." },
        { label: "Garden Memorial Plaques", blurb: "Slate, weather-sealed." },
        { label: "Memorial Wind Chimes", blurb: "A sound for the garden." },
        { label: "Memorial Stones & Pebbles", blurb: "Engraved natural stone." },
        { label: "Sympathy Gifts", blurb: "For the ones left behind." },
        { label: "Pet Memorials", blurb: "For paw prints, never forgotten." },
        { label: "Bereavement Frames", blurb: "Photo and message engraved." },
        { label: "Engraved Urn Keepsakes", blurb: "Discreet remembrance pieces." },
        { label: "Memorial Wall Art", blurb: "Framed quotes and tributes." },
        { label: "Anniversary Remembrance", blurb: "For the dates that still matter." },
      ]}
      closing="If you'd like help wording an inscription, message our studio — we read every note carefully."
    />
  );
}
