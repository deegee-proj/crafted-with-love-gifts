import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Gifts UK — Engraved Keepsakes Hand-Finished in the UK — Maker·Mark";
const DESCRIPTION = "Shop personalised gifts hand-engraved in our UK studio — mugs, glassware, jewellery, prints, photo gifts and keepsakes for every occasion. Fast UK delivery.";

export const Route = createFileRoute("/personalised-gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/personalised-gifts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/personalised-gifts" }],
  }),
  component: PersonalisedGiftsPage,
});

function PersonalisedGiftsPage() {
  return (
    <CategoryPage
      eyebrow="The full collection"
      title="Personalised Gifts"
      intro={["Discover the full Maker·Mark range of personalised gifts — hand-engraved keepsakes, custom photo gifts, bespoke prints and one-of-a-kind keepsakes made to order in our UK studio. Every piece can be personalised with names, dates, photos, monograms or a message of your choice, turning even the simplest object into a gift the recipient will keep for years.","From engraved glassware, mugs and decanters to leather wallets, jewellery, prints, photo frames and keepsake boxes, our personalised gift collection covers every occasion, recipient and budget. Browse the full range below, or filter by occasion or recipient to narrow the search."]}
      productCount={12}
      seoSections={[{"heading":"What makes a great personalised gift?","body":["A great personalised gift goes beyond simply adding a name to a generic product. It feels considered — the personalisation references something specific about the recipient or the moment, the materials are good enough to be kept on display, and the finish is sharp enough that the engraving still looks fresh in ten years' time.","We design every Maker·Mark product with that in mind. Premium materials, deep laser engraving (not printed transfers), hand-finished detailing and gift-ready packaging come as standard on everything we make."]},{"heading":"Photo, engraving, printing and embroidery","body":["Maker·Mark offers four core personalisation techniques. Photo gifts bring favourite images onto mugs, prints, cushions and canvases using high-resolution printing. Engraved gifts use precision laser tools to etch names, dates and messages permanently into glass, metal, wood and leather. Printed gifts add custom artwork to textiles, ceramics and paper goods. Embroidered gifts stitch monograms and short phrases into towels, robes, totes and beanies.","Most products offer a live preview of your personalisation before checkout, so you can see exactly how the finished piece will look."]},{"heading":"UK studio, worldwide delivery","body":["Everything we sell is designed, made and finished in our UK studio. We do not drop-ship and we do not outsource personalisation. That means tighter quality control, faster turnaround and the confidence that comes from a small team that genuinely cares about the final product.","Standard UK delivery is fast, express options are available, and we ship worldwide. Every gift includes complimentary tissue wrapping and a handwritten-style message card."]}]}
    />
  );
}
