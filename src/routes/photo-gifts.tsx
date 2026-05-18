import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Photo Gifts UK — Photo Mugs, Frames, Canvas & Prints — Maker·Mark";
const DESCRIPTION = "Personalised photo gifts printed in our UK studio — photo mugs, canvas prints, photo frames, cushions, calendars and photo books. Fast UK delivery.";

export const Route = createFileRoute("/photo-gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/photo-gifts" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/photo-gifts" }],
  }),
  component: PhotoGiftsPage,
});

function PhotoGiftsPage() {
  return (
    <CategoryPage
      eyebrow="Memory, made tangible"
      title="Personalised Photo Gifts"
      intro={["The best photos rarely make it past the camera roll. Our personalised photo gifts pull them into the real world — onto walls, mantelpieces, mugs, cushions and bedside tables — where they belong. Every photo gift is printed and finished in our UK studio using high-resolution printers and quality materials designed to keep colours sharp for years.","Upload your photo at any product page and our live preview tool shows you exactly how the finished piece will look. Add captions, names, dates or quotes for an even more personal finish. Perfect for birthdays, anniversaries, weddings, Christmas and any moment worth remembering."]}
      productCount={12}
      seoSections={[{"heading":"Photo frames, prints and canvases","body":["Frame the moments that matter. Our personalised photo frames are available in wood, metal and engraved finishes, ready for the picture you choose at checkout. Canvas prints and acrylic photo blocks bring favourite images to gallery quality, ready to hang or display.","Choose from a range of sizes, finishes and frame styles to suit every wall and shelf — and add an engraved caption or date for an extra layer of personalisation."]},{"heading":"Photo mugs, cushions and everyday gifts","body":["Bring a favourite photo into the daily routine with personalised photo mugs, cushions, coasters, calendars and phone cases. Our printing process uses fade-resistant inks tested for everyday wear, so the colours stay sharp wash after wash.","Photo mugs are one of our most-given gifts of all time — a small daily reminder of family, friends, pets or a favourite shared memory. Cushions add a soft personal touch to a sofa or bedroom; coasters make brilliant set-of-four house-warming gifts."]},{"heading":"Photo books, calendars and slate","body":["For a more substantial photo gift, our photo books and calendars curate your images into something more lasting. A personalised photo calendar makes a thoughtful Christmas gift for grandparents and far-away family; a photo book is a beautiful way to mark a wedding, a big trip or a milestone year.","We also offer natural slate and stone photo gifts — etched portraits and prints on real Welsh slate for a uniquely tactile keepsake. Every photo gift is hand-finished in our UK studio with fast delivery and gift-ready packaging."]}]}
    />
  );
}
