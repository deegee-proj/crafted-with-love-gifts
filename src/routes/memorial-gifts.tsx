import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Memorial & Remembrance Gifts — Engraved Keepsakes — Maker·Mark";
const DESCRIPTION = "Hand-engraved personalised memorial and remembrance gifts — keepsake boxes, photo frames, garden plaques and engraved jewellery made in the UK.";

export const Route = createFileRoute("/memorial-gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/memorial-gifts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/memorial-gifts" }],
  }),
  component: MemorialGiftsPage,
});

function MemorialGiftsPage() {
  return (
    <CategoryPage
      eyebrow="Held close, kept always"
      title="Personalised Memorial Gifts"
      intro={["When words feel difficult, a personalised memorial gift can speak quietly for you. Our hand-engraved remembrance keepsakes are designed to honour a loved one with care and dignity — engraved with their name, a meaningful date or a private message of remembrance and finished by hand in our UK studio.","From engraved photo frames and keepsake boxes to memorial jewellery, garden plaques and bespoke prints, every piece in our personalised memorial range is made to be held on to. Beautifully presented, sensitively packaged and shipped with care."]}
      productCount={12}
      seoSections={[{"heading":"Sympathy and remembrance gifts for the family","body":["Choosing a sympathy gift for someone grieving can feel impossible. A personalised memorial keepsake — an engraved photo frame, a remembrance candle or a hand-printed memorial print — offers something quietly meaningful that the family can hold on to long after the cards stop arriving.","All our memorial pieces can be engraved with the loved one's name, dates and a personal message, and arrive in calm, considered packaging with a handwritten-style card."]},{"heading":"Memorial jewellery and keepsake boxes","body":["Memorial jewellery is one of the most personal ways to remember someone — pendants, bracelets and rings engraved with a name, an initial or a meaningful date that can be worn close every day. Our engraved keepsake boxes are designed to safely store letters, photographs and small mementos in one beautifully finished place.","Every memorial jewellery piece and keepsake box is hand-engraved in our UK studio using premium materials chosen to last."]},{"heading":"Memorial garden plaques and outdoor remembrance","body":["For families who want a permanent outdoor tribute, our memorial garden plaques and slate stones offer a quietly beautiful focal point in a garden, allotment or favourite outdoor space. Engraved by hand with names, dates and short verses or messages, every piece is sealed for British weather and built to last.","We ship memorial pieces with extra care and discretion, with the option to send directly to the recipient with a personalised card."]}]}
    />
  );
}
