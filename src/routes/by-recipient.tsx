import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Gifts by Recipient — Shop For Him, Her, Mum, Dad — Maker·Mark";
const DESCRIPTION = "Personalised gifts curated by recipient — for him, her, mum, dad, couples, grandparents, kids and friends. Hand-engraved keepsakes made in the UK.";

export const Route = createFileRoute("/by-recipient")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/by-recipient" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/by-recipient" }],
  }),
  component: ByRecipientPage,
});

function ByRecipientPage() {
  return (
    <CategoryPage
      eyebrow="Tell us who it's for"
      title="Personalised Gifts by Recipient"
      intro={["Sometimes you know the person, not the gift. Our personalised gifts by recipient collection makes it simple to find a hand-engraved keepsake for anyone on your list — whether that is a parent, partner, grandparent, sibling, friend or child. Every gift is made to order in our UK studio and personalised with names, dates, photos or a message of your choice.","Browse curated edits for him, her, mum, dad, couples, grandparents, kids, teens, friends and pet lovers. From engraved glassware and leather wallets to photo frames, jewellery and bespoke prints, you'll find a thoughtful personalised gift for every taste, occasion and budget."]}
      productCount={12}
      seoSections={[{"heading":"Personalised gifts for him and her","body":["Shopping for a partner can be the hardest job in gifting — get it right and a personalised present says everything a card cannot. Our personalised gifts for him include engraved whisky glasses and decanters, hip flasks, leather wallets, watch boxes and bespoke prints. For her, we make engraved jewellery, monogrammed leather goods, photo frames and personalised glassware in styles that feel quietly considered rather than predictable.","Every piece is hand-finished in the UK so you can be confident the engraving is sharp, the materials are good and the gift will feel as special as the moment."]},{"heading":"Thoughtful gifts for mum, dad and grandparents","body":["Family gifting calls for something with meaning. Our personalised gifts for mum, dad, grandparents and step-parents focus on keepsakes that survive far beyond the occasion — engraved photo frames showing family snapshots, custom mugs printed with grandchildren's faces, leather wallets with discreet inside engraving and decanters reserved for the good stuff.","Looking for a first Father's Day gift, a Mother's Day surprise or a Christmas present for grandparents? Each recipient page is curated to make the decision easier."]},{"heading":"Gifts for friends, kids and the impossible-to-buy-for","body":["Some people genuinely have everything — that's where personalised gifts come in. An inside joke engraved on a tankard, a private nickname on a leather keyring, a photo of a shared holiday printed onto a canvas; small personal touches turn even simple objects into the most memorable gift of the year.","Need something for younger recipients? Our personalised gifts for kids and teens include engraved keepsake boxes, photo frames, named mugs and grown-up-quality keepsakes that they can hold on to long after birthdays have passed."]}]}
    />
  );
}
