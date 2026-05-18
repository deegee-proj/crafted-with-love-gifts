import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Food & Drink Gifts — Engraved Glassware, Decanters, Boards — Maker·Mark";
const DESCRIPTION = "Personalised food and drink gifts engraved in the UK — wine and whisky glasses, decanters, hip flasks, chopping boards and bar accessories.";

export const Route = createFileRoute("/food-drinks")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/food-drinks" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/food-drinks" }],
  }),
  component: FoodDrinksPage,
});

function FoodDrinksPage() {
  return (
    <CategoryPage
      eyebrow="For the table and the bar"
      title="Personalised Food & Drink Gifts"
      intro={["Bring something personal to the table — and the bar cart — with our hand-engraved food and drink gift collection. Every wine glass, whisky tumbler, decanter, hip flask and chopping board is etched to order in our UK studio with the recipient's name, initials or a message that means something to them.","Whether you're shopping for a wine lover, a whisky enthusiast, a cocktail obsessive or a serious home cook, our personalised food and drink gifts use food-safe materials and the kind of premium glassware, slate and timber that earns a permanent spot in their kitchen or on their bar cart."]}
      productCount={12}
      seoSections={[{"heading":"Engraved glassware for every drink","body":["Few gifts get used as often as a personalised glass with the recipient's name etched into the side. Our engraved wine glasses, whisky tumblers, gin balloons, beer steins and champagne flutes are made from quality crystal and glassware, etched in-house using precision laser tools for a clean, dishwasher-resistant finish.","Pair a set of two for engagements and weddings, single tumblers for milestone birthdays, or a full decanter set as a statement gift for a serious whisky drinker."]},{"heading":"Chopping boards, hampers and bar accessories","body":["Beyond glassware, our personalised food and drink range includes engraved chopping boards, cheese boards and serving slates in wood, slate and marble — perfect for housewarmings, wedding gifts and food-loving friends. Personalised hampers and treat boxes pair beautifully wrapped premium products with a hand-engraved keepsake to remember the occasion.","Looking for something for the home bar? Engraved cocktail shakers, ice buckets and decanter sets turn entertaining into something genuinely personal."]},{"heading":"Food-safe, hand-finished in the UK","body":["Every food-contact item we make uses food-safe materials and finishes, tested in our UK studio before it ever reaches a customer. Wooden boards are sealed with food-grade oils, glassware is etched (not painted) so the finish never wears off, and metal pieces are hand-polished for a clean, professional finish.","All food and drink gifts ship with fast UK delivery and arrive with a complimentary handwritten-style message card — ready to hand over straight from the box."]}]}
    />
  );
}
