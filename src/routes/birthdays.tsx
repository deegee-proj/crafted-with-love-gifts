import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/birthdays")({
  head: () => ({
    meta: [
      { title: "Personalised Birthday Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Milestone birthday gifts engraved by hand — 18th, 21st, 30th, 40th, 50th and every year in between.",
      },
      { property: "og:title", content: "Personalised Birthday Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "Make the day they were born feel like a moment, not a notification.",
      },
    ],
  }),
  component: BirthdaysPage,
});

function BirthdaysPage() {
  return (
    <CategoryPage
      eyebrow="One day a year — make it count"
      title="Personalised Birthday Gifts"
      intro="A card is fine. A balloon is nice. But a birthday gift with their name on it — held in the hand, opened slowly — that's the one they'll remember. Browse our birthday collection by milestone or recipient."
      highlights={["Date-printed editions", "Engraved milestones", "Wrap & message included"]}
      subcategories={[
        { label: "18th Birthday Gifts", blurb: "First legal pour, made memorable." },
        { label: "21st Birthday Gifts", blurb: "A grown-up keepsake." },
        { label: "30th Birthday Gifts", blurb: "Decade-defining pieces." },
        { label: "40th Birthday Gifts", blurb: "Confident, considered gifting." },
        { label: "50th Birthday Gifts", blurb: "Half a century, marked properly." },
        { label: "60th, 70th & 80th Gifts", blurb: "Milestones worth holding." },
        { label: "Birthday Mugs", blurb: "Newspaper headlines and photos." },
        { label: "Birthday Glassware", blurb: "Whisky, wine and prosecco." },
        { label: "Birthday Jewellery", blurb: "Birthstones and engraved charms." },
        { label: "Kids' Birthday Gifts", blurb: "Engraved keepsakes for little ones." },
        { label: "Milestone Photo Frames", blurb: "Date, name and a favourite photo." },
        { label: "Birthday Hampers", blurb: "Curated treat boxes." },
      ]}
      closing="Every Maker·Mark birthday gift comes with a complimentary handwritten-style message card."
    />
  );
}
