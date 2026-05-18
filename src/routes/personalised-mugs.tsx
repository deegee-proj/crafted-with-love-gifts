import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Mugs UK — Custom Photo & Engraved Mugs — Maker·Mark";
const DESCRIPTION = "Personalised mugs printed and engraved in our UK studio — add a photo, a name or a message. Ceramic, enamel and travel mugs with fast UK delivery.";

export const Route = createFileRoute("/personalised-mugs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/personalised-mugs" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/personalised-mugs" }],
  }),
  component: PersonalisedMugsPage,
});

function PersonalisedMugsPage() {
  return (
    <CategoryPage
      eyebrow="The morning brew, made personal"
      title="Personalised Mugs"
      intro={["There is a reason personalised mugs are one of the most loved gifts of all time — they get used every single day. Our personalised mug collection turns the morning brew into a moment of joy with custom photo prints, hand-engraved names and bespoke messages on premium ceramic, enamel and travel mugs.","Every mug is printed or engraved in our UK studio using high-resolution images, deep colours and dishwasher-resistant finishes. Add a favourite family photo, a meaningful date, a private nickname or a quote that means something — small touches that make even the simplest gift feel completely theirs."]}
      productCount={12}
      seoSections={[{"heading":"Photo mugs that make people smile","body":["Photo mugs are the gift that lands every time. A picture of the kids, the dog, the wedding day or a favourite shared memory printed onto a ceramic mug turns a morning coffee into a daily reminder of someone important. Upload any high-resolution photo at checkout and our live preview tool shows exactly how the finished mug will look.","Printed using fade-resistant inks and finished to be dishwasher-safe, our photo mugs are designed to look as good after a hundred washes as they do on day one."]},{"heading":"Engraved and named ceramic mugs","body":["Prefer something a little more understated? Our engraved and printed name mugs let you add a name, initials or a short message to a range of beautiful ceramic shapes — from classic mugs and tankards to enamel campsite cups and stainless travel mugs.","Choose from a range of typefaces, layouts and finishes to match the recipient's taste, and pair with a personalised hamper for a complete gift."]},{"heading":"Perfect for every occasion","body":["Personalised mugs make brilliant gifts for birthdays, Father's Day, Mother's Day, Christmas, secret Santa, leaving gifts, teacher thank-yous and milestone celebrations. They are also one of our most popular corporate gift options — branded with a logo and packaged with a handwritten note for client thank-yous and team onboarding.","All mugs are made to order in our UK studio and dispatched with fast standard or express UK delivery."]}]}
    />
  );
}
