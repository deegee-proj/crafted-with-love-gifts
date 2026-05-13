import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/fashion-accessories")({
  head: () => ({
    meta: [
      { title: "Personalised Fashion & Accessories — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved jewellery, monogrammed bags, embroidered scarves and personalised accessories from a UK studio.",
      },
      { property: "og:title", content: "Personalised Fashion & Accessories — Maker·Mark" },
      {
        property: "og:description",
        content: "Quietly personal — engraved, monogrammed and embroidered to last.",
      },
    ],
  }),
  component: FashionAccessoriesPage,
});

function FashionAccessoriesPage() {
  return (
    <CategoryPage
      eyebrow="Worn close, kept long"
      title="Personalised Fashion & Accessories"
      intro="The best personal pieces are the ones you don't immediately notice — until you're close enough to read them. Engraved on the inside, embroidered along the hem, stamped onto leather. Quiet, deliberate, theirs."
      highlights={["Real leather & metal", "Initial & full-name engraving", "Gift-ready packaging"]}
      subcategories={[
        { label: "Engraved Jewellery", blurb: "Necklaces, bracelets, rings." },
        { label: "Engraved Watches", blurb: "Time, given a meaning." },
        { label: "Cufflinks", blurb: "Initial-engraved sets." },
        { label: "Wallets & Card Holders", blurb: "Hidden interior engraving." },
        { label: "Personalised Tote Bags", blurb: "Embroidered cotton and canvas." },
        { label: "Leather Luggage Tags", blurb: "Initials, hot-foiled." },
        { label: "Scarves & Wraps", blurb: "Embroidered monograms." },
        { label: "Hats & Beanies", blurb: "Subtle initial embroidery." },
        { label: "Personalised Socks", blurb: "Including the famous face socks." },
        { label: "Keyrings & Charms", blurb: "Engraved leather and metal." },
        { label: "Phone Cases", blurb: "Photo and monogram options." },
        { label: "Sunglasses Cases", blurb: "Embossed leather, named." },
      ]}
      closing="Most fashion engraving is done in 1-2 working days — full lead times shown on each product page."
    />
  );
}
