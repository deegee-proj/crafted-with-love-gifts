import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Birthday Gifts — Engraved Milestone Presents — Maker·Mark";
const DESCRIPTION = "Hand-engraved personalised birthday gifts for every milestone — 18th, 21st, 30th, 40th, 50th and beyond. Made to order in the UK with fast delivery.";

export const Route = createFileRoute("/birthdays")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/birthdays" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/birthdays" }],
  }),
  component: BirthdaysPage,
});

function BirthdaysPage() {
  return (
    <CategoryPage
      eyebrow="One day a year — make it count"
      title="Personalised Birthday Gifts"
      intro={["Make their birthday unforgettable with a personalised birthday gift hand-finished in our UK studio. Add their name, the year they were born or a private message and turn an ordinary present into something they will keep for years. Every piece is made to order, engraved in-house and dispatched with fast UK delivery.","From milestone birthdays — 18th, 21st, 30th, 40th, 50th and beyond — to gifts for him, her, mum, dad, friends and kids, our personalised birthday gifts cover every age, style and budget. Photo mugs, engraved whisky glasses, hip flasks, birthstone jewellery and bespoke photo frames are just the beginning."]}
      productCount={12}
      seoSections={[{"heading":"Milestone birthday gifts they will treasure","body":["Big birthdays deserve big gestures. A personalised milestone birthday gift — engraved with the date, an age or a meaningful message — turns a generic card into a story they will retell every time the gift is picked up. Our 18th, 21st, 30th, 40th, 50th and beyond birthday collections include engraved decanters, photo prints, leather keepsakes and personalised hampers, all hand-finished to last a lifetime.","Need something for an older relative? Our 60th, 70th, 80th and 90th birthday ranges focus on quietly elegant keepsakes — engraved photo frames, framed front-page prints from the day they were born and personalised glassware that fits any sideboard."]},{"heading":"Personalised birthday gifts for every person on your list","body":["Whether you're shopping for a partner, a parent, a sibling, a friend or a child, our personalised birthday range makes it simple to find a gift that feels chosen, not picked. Filter by recipient to see curated options for him, for her, for mum, for dad, for kids and for the friend who already has everything.","Stuck for ideas? Add a photo to a printed mug, engrave their initials on a hip flask, or commission a custom print of their favourite lyric — small personal touches make even the simplest gifts feel genuinely thoughtful."]},{"heading":"Fast UK delivery and free message card","body":["Need a birthday gift in a hurry? Most of our personalised birthday pieces are produced and dispatched within 1-2 working days, with express delivery available at checkout. Order by 2pm for next-day engraving on selected items, or choose a Maker·Mark gift card if the date is tomorrow.","Every Maker·Mark birthday gift arrives gift-wrapped with a complimentary handwritten-style message card — so the unboxing feels as special as the gift inside."]}]}
    />
  );
}
