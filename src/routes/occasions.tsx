import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Shop by Occasion — Personalised Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Browse engraved and personalised gifts by occasion — birthdays, weddings, christenings, retirements and beyond.",
      },
      { property: "og:title", content: "Shop by Occasion — Maker·Mark" },
      {
        property: "og:description",
        content: "Every life moment deserves a keepsake. Find the right one here.",
      },
    ],
  }),
  component: OccasionsPage,
});

function OccasionsPage() {
  return (
    <CategoryPage
      eyebrow="Every moment, marked"
      title="Shop by Occasion"
      intro="Some occasions repeat every year. Some happen exactly once. Either way, the right gift turns the date into a memory — and we've sorted the studio by occasion to help you find it."
      highlights={["Curated by moment", "Studio gift guide", "Express delivery"]}
      subcategories={[
        { label: "Birthdays", blurb: "Milestone and everyday." },
        { label: "Weddings", blurb: "Couples, party and guests." },
        { label: "Anniversaries", blurb: "Every traditional material." },
        { label: "Engagements", blurb: "Mark the yes." },
        { label: "New Baby & Christenings", blurb: "First keepsakes." },
        { label: "Mother's Day", blurb: "For every kind of mum." },
        { label: "Father's Day", blurb: "Hand-finished keepsakes." },
        { label: "Christmas", blurb: "Engraved and ready to wrap." },
        { label: "Valentine's Day", blurb: "Keepsakes that outlast the flowers." },
        { label: "Graduation", blurb: "Cap-and-gown worthy gifts." },
        { label: "Retirement", blurb: "End-of-career recognition." },
        { label: "Memorial & Sympathy", blurb: "Keepsakes for remembering." },
        { label: "Housewarming", blurb: "For the new front door." },
        { label: "Thank You Gifts", blurb: "Said properly." },
      ]}
      closing="Can't find the occasion you're shopping for? Use the search bar at the top of every page."
    />
  );
}
