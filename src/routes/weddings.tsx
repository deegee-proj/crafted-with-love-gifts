import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Personalised Wedding Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved wedding gifts, favours and keepsakes for the couple, the wedding party and the day itself.",
      },
      { property: "og:title", content: "Personalised Wedding Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "From the proposal to the first anniversary — gifts worth keeping forever.",
      },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <CategoryPage
      eyebrow="Two names, one keepsake"
      title="Personalised Wedding Gifts"
      intro="Wedding gifts shouldn't get lost in a pile. Ours are engraved with the couple's names, the date and (if you're feeling brave) a quiet inside joke — keepsakes that survive the move, the renovation and the years."
      highlights={["Couple's names & date engraved", "Gift wrap available", "Bridal party sets"]}
      subcategories={[
        { label: "Mr & Mrs Glassware", blurb: "Champagne flutes and wine pairs." },
        { label: "Engraved Wedding Decanters", blurb: "Crystal worth displaying." },
        { label: "Couple's Photo Frames", blurb: "First-day photos, framed." },
        { label: "Wedding Cake Knives", blurb: "Engraved with names and date." },
        { label: "Bridesmaid Gifts", blurb: "Compacts, jewellery and proposal boxes." },
        { label: "Groomsmen Gifts", blurb: "Hip flasks, tankards, cufflinks." },
        { label: "Maid of Honour & Best Man", blurb: "Personal speeches deserve personal thanks." },
        { label: "Mother of the Bride/Groom", blurb: "Considered keepsakes." },
        { label: "Wedding Favours", blurb: "Bulk-engraved keepsakes for guests." },
        { label: "Engagement Gifts", blurb: "Mark the yes." },
        { label: "Just Married Gifts", blurb: "Honeymoon-ready keepsakes." },
        { label: "First Dance Prints", blurb: "Lyrics, foiled and framed." },
      ]}
      closing="Booking a wedding favour run? Get in touch six weeks ahead so we can secure a production slot for your date."
    />
  );
}
