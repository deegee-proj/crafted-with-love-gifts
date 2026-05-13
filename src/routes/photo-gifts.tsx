import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/photo-gifts")({
  head: () => ({
    meta: [
      { title: "Personalised Photo Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Turn favourite photos into framed prints, photo mugs, cushions, calendars and keepsakes — printed in the UK.",
      },
      { property: "og:title", content: "Personalised Photo Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Memories deserve more than a camera roll. Print, frame and gift them.",
      },
    ],
  }),
  component: PhotoGiftsPage,
});

function PhotoGiftsPage() {
  return (
    <CategoryPage
      eyebrow="Memory, made tangible"
      title="Personalised Photo Gifts"
      intro="The best photos rarely make it past the camera roll. Our photo gifts pull them into the real world — onto walls, mantelpieces, mugs and bedside tables — where they belong."
      highlights={["High-resolution printing", "UK studio", "Live image preview"]}
      subcategories={[
        { label: "Photo Frames", blurb: "Wood, metal and engraved finishes." },
        { label: "Canvas Prints", blurb: "Gallery-grade, ready to hang." },
        { label: "Acrylic Photo Blocks", blurb: "Crystal-clear desk pieces." },
        { label: "Photo Mugs", blurb: "Family on the morning brew." },
        { label: "Photo Cushions", blurb: "Soft keepsakes for the sofa." },
        { label: "Photo Calendars", blurb: "A new memory each month." },
        { label: "Photo Books & Albums", blurb: "Curated, printed, bound." },
        { label: "Photo Coasters", blurb: "Sets of four, edge-to-edge prints." },
        { label: "Photo Phone Cases", blurb: "Carry them with you." },
        { label: "Photo Jewellery", blurb: "Lockets, charms and engravings." },
        { label: "Photo Slate & Stone", blurb: "Natural slate, etched portraits." },
        { label: "Pet Photo Gifts", blurb: "For the love of a good dog." },
      ]}
      closing="Upload a photo at any product page and our preview tool shows exactly how the finished piece will look."
    />
  );
}
