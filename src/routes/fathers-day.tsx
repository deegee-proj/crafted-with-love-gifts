import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Father's Day Gifts — Engraved for Dad — Maker·Mark";
const DESCRIPTION = "Hand-engraved personalised Father's Day gifts made in our UK studio — whisky glasses, hip flasks, photo mugs, wallets and keepsakes for every kind of dad.";

export const Route = createFileRoute("/fathers-day")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/fathers-day" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/fathers-day" }],
  }),
  component: FathersDayPage,
});

function FathersDayPage() {
  return (
    <CategoryPage
      eyebrow="Skip the tie"
      title="Personalised Father's Day Gifts"
      intro={["Skip the predictable Father's Day tie and give him something he will genuinely keep. Our personalised Father's Day gifts are hand-engraved in our UK studio with his name, a family photo, a private joke or the date that matters — turning an ordinary Sunday into a story he'll retell for years.","From engraved whisky glasses and hip flasks to photo mugs, leather wallets and BBQ tools, our Father's Day collection covers every kind of dad, granddad, stepdad and new dad. Order online, preview your engraving before checkout and choose express UK delivery for last-minute gifts."]}
      productCount={12}
      seoSections={[{"heading":"Personalised gifts for every kind of dad","body":["Dads come in every flavour — the whisky lover, the BBQ king, the new dad finding his feet, the granddad with everything. Our personalised Father's Day range is curated to match. Whisky-loving dads love engraved tumblers, hip flasks and decanters. Hands-on dads appreciate engraved BBQ tools, multi-tools and wallets. New dads treasure first-Father's-Day keepsakes with the baby's name and birth date.","Add the personal touch — a name, a date, an inside joke — and the gift transforms from generic to genuinely his."]},{"heading":"Photo gifts for dads, granddads and stepdads","body":["Photos turn a great gift into a great memory. Our personalised photo mugs, framed prints and photo cushions pull family pictures off the camera roll and into the real world — onto desks, mantelpieces and breakfast tables where dad will actually see them.","Looking for something for a granddad or stepdad? Our photo frames featuring multiple generations or chosen-family captions make a thoughtful, heartfelt gift that goes far beyond a card."]},{"heading":"Last-minute Father's Day delivery","body":["Left it late? You're not alone. Most Maker·Mark Father's Day pieces are dispatched the next working day, and we offer express delivery on selected items right up to the weekend before Father's Day. Order by 2pm for next-day engraving on most pieces.","Every Father's Day gift arrives wrapped in tissue with a complimentary handwritten-style message card."]}]}
    />
  );
}
