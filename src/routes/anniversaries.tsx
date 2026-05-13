import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/anniversaries")({
  head: () => ({
    meta: [
      { title: "Personalised Anniversary Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Paper, leather, silver, ruby, gold — anniversary gifts engraved by hand for every traditional milestone.",
      },
      { property: "og:title", content: "Personalised Anniversary Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Mark the years that matter with a keepsake worth holding onto.",
      },
    ],
  }),
  component: AnniversariesPage,
});

function AnniversariesPage() {
  return (
    <CategoryPage
      eyebrow="Years are worth marking"
      title="Personalised Anniversary Gifts"
      intro="Every anniversary has a material — paper for the first, leather for the third, ruby for the fortieth. Our collection respects the tradition and updates it: engraved keepsakes that say more than a card ever will."
      highlights={["Traditional materials", "Date & names engraved", "Anniversary gift guide"]}
      subcategories={[
        { label: "1st Anniversary — Paper", blurb: "Foiled prints and notebooks." },
        { label: "5th Anniversary — Wood", blurb: "Engraved wooden keepsakes." },
        { label: "10th Anniversary — Tin", blurb: "Tin-plated and embossed." },
        { label: "15th Anniversary — Crystal", blurb: "Engraved crystal glassware." },
        { label: "20th Anniversary — China", blurb: "Personalised ceramics." },
        { label: "25th — Silver", blurb: "Hallmarked silver keepsakes." },
        { label: "30th — Pearl", blurb: "Pearl jewellery and frames." },
        { label: "40th — Ruby", blurb: "Ruby-toned glassware and prints." },
        { label: "50th — Gold", blurb: "Gold-foiled and gilded pieces." },
        { label: "60th — Diamond", blurb: "Crystal-set heirlooms." },
        { label: "Engagement Anniversary Gifts", blurb: "Mark the proposal too." },
        { label: "Anniversary Photo Frames", blurb: "Date and names, framed." },
      ]}
      closing="Not sure which material this year calls for? Browse our anniversary guide — linked from each product page."
    />
  );
}
