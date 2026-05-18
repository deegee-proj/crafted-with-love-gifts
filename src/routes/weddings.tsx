import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Wedding Gifts — Engraved Keepsakes for the Couple — Maker·Mark";
const DESCRIPTION = "Hand-engraved personalised wedding gifts made in our UK studio — Mr & Mrs glassware, decanters, photo frames, bridal party gifts and keepsakes for the happy couple.";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/weddings" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <CategoryPage
      eyebrow="Two names, one keepsake"
      title="Personalised Wedding Gifts"
      intro={["Find the perfect personalised wedding gift for the happy couple with our hand-finished collection of engraved keepsakes. Every piece is made to order in our UK studio and engraved with the names, the date and any message that means something to you — turning an ordinary present into a lifelong reminder of the big day.","From elegant Mr & Mrs glassware and crystal decanters to bespoke photo frames, bridal party gifts and wedding favours, our personalised wedding gifts are designed to be treasured long after the confetti settles. With fast UK delivery and worldwide shipping available, it has never been easier to give a wedding gift that feels truly considered."]}
      productCount={12}
      seoSections={[{"heading":"Wedding gifts that mean more","body":["A wedding is one of life's most meaningful milestones, and the gift you choose should reflect that. Generic homewares get put in a cupboard — a personalised wedding gift gets put on display. Our engraved wedding pieces carry the couple's names, the wedding date and an optional message of your choice, making each item completely unique to the day they said \"I do\".","Whether you're shopping for newlyweds, marking your own anniversary or putting together a gift from the wedding party, our range covers every budget and style — from understated leather keepsakes to statement crystal that will sit proudly on the mantelpiece for decades."]},{"heading":"Personalised gifts for the wedding party","body":["It is not just the couple who deserve a thoughtful gift. Our bridesmaid gifts, groomsmen gifts and keepsakes for the best man, maid of honour and parents of the bride and groom are an elegant way to say thank you to the people who helped make the day possible. Engraved hip flasks, monogrammed jewellery boxes, hand-finished glassware and bespoke prints all make beautifully personal thank-you gifts.","Planning bulk wedding favours? Get in touch six weeks before the wedding so we can secure a production slot and make sure every guest goes home with a small, hand-engraved memento of your day."]},{"heading":"Made in the UK, designed to last","body":["Every personalised wedding gift from Maker·Mark is engraved and hand-finished in our UK studio using premium materials — solid wood, lead crystal, real leather and hallmarked metals. We use deep laser engraving rather than printed transfers, so your message will stay sharp, legible and beautiful for years to come.","Order online, preview your engraving live before checkout, and choose from standard UK delivery, express dispatch or worldwide shipping. Every wedding gift arrives wrapped in tissue with a complimentary handwritten-style message card."]}]}
    />
  );
}
