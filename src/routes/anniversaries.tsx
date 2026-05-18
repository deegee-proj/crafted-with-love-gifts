import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Anniversary Gifts — Engraved Keepsakes by Year — Maker·Mark";
const DESCRIPTION = "Personalised anniversary gifts engraved in our UK studio — paper, wood, crystal, silver, ruby and gold. Hand-finished keepsakes for every wedding anniversary.";

export const Route = createFileRoute("/anniversaries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/anniversaries" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/anniversaries" }],
  }),
  component: AnniversariesPage,
});

function AnniversariesPage() {
  return (
    <CategoryPage
      eyebrow="Years worth marking"
      title="Personalised Anniversary Gifts"
      intro={["Mark the years that matter with a personalised anniversary gift hand-engraved in our UK studio. Every wedding anniversary has its own traditional material — from paper for the first to gold for the fiftieth and diamond for the sixtieth — and our collection respects each of them with engraved keepsakes designed to be passed down, not put away.","Add the couple's names, the wedding date or a heartfelt message and turn a meaningful milestone into a lifelong reminder. Whether it is your own anniversary or a gift for parents, grandparents or close friends, you'll find a thoughtful piece for every year of marriage in our personalised anniversary range."]}
      productCount={12}
      seoSections={[{"heading":"Anniversary gifts by year and traditional material","body":["Choosing a gift that matches the traditional anniversary material is a thoughtful way to honour the years a couple has shared. We make personalised anniversary gifts for every milestone — paper (1st), wood (5th), tin (10th), crystal (15th), china (20th), silver (25th), pearl (30th), ruby (40th), gold (50th) and diamond (60th) — plus considered options for the years in between.","Our anniversary guide on every product page explains the meaning of each material and recommends pieces that fit, so even if you're unsure where to begin you'll always end up with a gift that feels right."]},{"heading":"Engraved keepsakes for couples, parents and grandparents","body":["Anniversary gifts work hardest when they are personal. Engraving a wedding date and two names onto a decanter, photo frame or print transforms a beautiful object into a piece of family history — and gives the couple something genuinely worth keeping on display.","Our range includes personalised photo frames, engraved glassware and decanters, custom prints, ceramics and silver-plated keepsakes — every piece made to order in our UK studio with a focus on materials that age well."]},{"heading":"Hand-finished in the UK with fast delivery","body":["All Maker·Mark anniversary gifts are designed, engraved and packed in our UK studio. We work in small batches with premium materials so every order is checked by hand before it leaves us. Standard UK delivery is fast, express options are available, and we ship worldwide for couples celebrating away from home.","Every anniversary gift includes complimentary tissue wrapping and a handwritten-style message card — ready to hand over straight from the box."]}]}
    />
  );
}
