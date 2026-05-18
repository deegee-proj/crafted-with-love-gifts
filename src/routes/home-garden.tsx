import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Home & Garden Gifts — Engraved Decor & Outdoor Keepsakes — Maker·Mark";
const DESCRIPTION = "Personalised home and garden gifts engraved in our UK studio — house signs, doormats, cushions, planters, candles and decorative keepsakes.";

export const Route = createFileRoute("/home-garden")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/home-garden" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/home-garden" }],
  }),
  component: HomeGardenPage,
});

function HomeGardenPage() {
  return (
    <CategoryPage
      eyebrow="For every corner of the home"
      title="Personalised Home & Garden Gifts"
      intro={["Make their house feel even more like home with our range of personalised home and garden gifts. From hand-engraved house signs and printed doormats to bespoke cushions, candles, planters and decorative prints, every piece is made to order in our UK studio with the names, dates or messages that make it truly theirs.","Personalised home and garden gifts are perfect for housewarmings, weddings, anniversaries, Mother's Day and Christmas — thoughtful, useful pieces that sit comfortably alongside their existing décor and add a quiet personal touch to everyday life."]}
      productCount={12}
      seoSections={[{"heading":"Housewarming gifts that feel personal","body":["Moving home is a milestone — and a personalised housewarming gift turns a generic celebration into something they'll remember whenever they see it. Our engraved house signs, family-name doormats, framed family prints and bespoke candles add character to a new space without overwhelming it.","Choose the recipients' surname for a house sign, their family name for a doormat, or a piece of artwork printed with the coordinates of their new address — small details that make a new house immediately feel like home."]},{"heading":"Garden and outdoor gifts","body":["Personalised garden gifts are a thoughtful surprise for the keen gardener. Our engraved slate plaques, named planters, garden tools with monogrammed handles and bespoke memorial garden pieces are designed to weather the British seasons and look better for it.","Beautifully gift-ready and hand-finished in our UK studio, they make ideal presents for Father's Day, retirement, milestone birthdays and downsizing celebrations."]},{"heading":"Made in the UK, made to last","body":["Every Maker·Mark home and garden piece is engraved, printed or hand-finished in our UK studio using premium materials — solid timber, natural slate, ceramic and weather-tested coatings for outdoor items. Indoor pieces are tested for everyday wear; outdoor pieces are sealed and finished to last through British weather.","Standard UK delivery is fast, express is available, and we ship worldwide. Every personalised home or garden gift arrives wrapped with a complimentary message card."]}]}
    />
  );
}
