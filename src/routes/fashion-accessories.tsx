import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Fashion & Accessories — Engraved Jewellery, Wallets, Bags — Maker·Mark";
const DESCRIPTION = "Hand-engraved personalised fashion and accessories — jewellery, watches, leather wallets, monogrammed bags and scarves. Made to order in our UK studio.";

export const Route = createFileRoute("/fashion-accessories")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/fashion-accessories" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/fashion-accessories" }],
  }),
  component: FashionAccessoriesPage,
});

function FashionAccessoriesPage() {
  return (
    <CategoryPage
      eyebrow="Worn close, kept long"
      title="Personalised Fashion & Accessories"
      intro={["Make every accessory feel like it was made for them with our range of personalised fashion and accessories. From hand-engraved jewellery and watches to monogrammed leather wallets, embroidered scarves and bespoke phone cases, every piece is finished in our UK studio with the kind of detail you only notice up close.","Add initials, a full name, a date or a quiet message hidden on the inside — small personal touches that turn an everyday accessory into something genuinely irreplaceable. Perfect for birthdays, anniversaries, weddings, Father's Day, Mother's Day or simply because."]}
      productCount={12}
      seoSections={[{"heading":"Engraved jewellery and watches","body":["Personalised jewellery is one of the most enduring gifts you can give — necklaces, bracelets, rings and cufflinks engraved with initials, coordinates or a date carry meaning in a way mass-produced pieces never can. Our engraved watches and watch boxes turn a practical accessory into a family heirloom, with the engraving tucked discreetly on the case back.","All jewellery and watch engraving is done in-house using precision laser tools so the finish is sharp, even and built to last decades of wear."]},{"heading":"Monogrammed leather goods","body":["A monogrammed wallet, card holder or luggage tag is the kind of detail that quietly elevates everything else. We use full-grain leather and hot-foil or deboss techniques to add initials, names or short phrases to wallets, card holders, key rings, luggage tags and sunglasses cases.","Choose tonal foiling for an understated finish, or gold and silver for something that catches the light. Every piece is hand-checked before it ships and comes in gift-ready packaging."]},{"heading":"Bags, scarves and lifestyle accessories","body":["Looking for a softer take on personalisation? Our embroidered tote bags, scarves and beanies are stitched with monograms or full names in a range of thread colours, while our personalised phone cases pair photos and names to make a daily essential genuinely personal.","All Maker·Mark fashion and accessory pieces are produced in our UK studio. Most orders are dispatched within 1-2 working days with full lead times shown on each product page."]}]}
    />
  );
}
