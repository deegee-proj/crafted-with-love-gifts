import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/food-drinks")({
  head: () => ({
    meta: [
      { title: "Personalised Food & Drink Gifts — Maker·Mark" },
      {
        name: "description",
        content:
          "Engraved glassware, decanters, hampers and bar accessories for the food-and-drink obsessed.",
      },
      { property: "og:title", content: "Personalised Food & Drink Gifts — Maker·Mark" },
      {
        property: "og:description",
        content: "From the morning espresso to the late-night dram — gifts for the table.",
      },
    ],
  }),
  component: FoodDrinksPage,
});

function FoodDrinksPage() {
  return (
    <CategoryPage
      eyebrow="For the table and the bar"
      title="Personalised Food & Drink Gifts"
      intro="The kitchen is the heart of the home, and the bar cart is the soul. Our food-and-drink collection turns both into something personal — engraved boards, etched glasses and decanters with a story."
      highlights={["Food-safe materials", "Engraved & etched", "Bar-cart ready"]}
      subcategories={[
        { label: "Engraved Wine Glasses", blurb: "From everyday to special occasion." },
        { label: "Whisky Glasses & Decanters", blurb: "For the dram collector." },
        { label: "Gin Glasses", blurb: "Copa, balloon and tonic-ready." },
        { label: "Beer & Pint Glasses", blurb: "Pub-quality engraving." },
        { label: "Champagne Flutes", blurb: "Toasts worth keeping." },
        { label: "Cocktail Sets & Shakers", blurb: "Home bar essentials." },
        { label: "Chopping & Cheese Boards", blurb: "Wood, slate and marble." },
        { label: "Aprons & Tea Towels", blurb: "Embroidered and printed." },
        { label: "Coffee & Tea Gifts", blurb: "Mugs, beans and brew kits." },
        { label: "Hampers & Gift Sets", blurb: "Curated treat boxes." },
        { label: "Engraved Hip Flasks", blurb: "Pocket-sized keepsakes." },
        { label: "BBQ & Grill Gifts", blurb: "For the king of the coals." },
      ]}
      closing="All food-contact items use food-safe finishes and are tested in our UK studio."
    />
  );
}
