import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

const TITLE = "Personalised Pet Gifts — Engraved Tags, Photo Gifts & Pet Memorials — Maker·Mark";
const DESCRIPTION = "Personalised pet gifts engraved in our UK studio — pet tags, photo gifts, bespoke portraits and memorial keepsakes for cats, dogs and all the rest.";

export const Route = createFileRoute("/pets")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/pets" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/pets" }],
  }),
  component: PetsPage,
});

function PetsPage() {
  return (
    <CategoryPage
      eyebrow="For the four-legged family"
      title="Personalised Pet Gifts"
      intro={["Pets are family — and our personalised pet gifts treat them that way. From engraved pet tags and named bowls to custom pet portraits, photo gifts and memorial keepsakes, every piece is made to order in our UK studio with the love your favourite animal deserves.","Personalise with your pet's name, photo, date of birth, breed or a heartfelt message. Whether you're shopping for a new puppy, a long-loved cat, a horse, a rabbit or a remembrance gift for a pet who has passed, our personalised pet gift range will help you mark the moment."]}
      productCount={12}
      seoSections={[{"heading":"Engraved pet tags and accessories","body":["An engraved pet tag is one of the most important personalised items you can buy — it could be what brings your pet home if they ever get lost. Our pet tags are hand-engraved on quality stainless steel, aluminium or brass with your pet's name, your phone number and any other details you'd like included.","Beyond tags, we offer named pet bowls, engraved leads, personalised collars and bespoke pet treat tins — practical pieces with a personal touch that make a thoughtful gift for any pet owner."]},{"heading":"Pet photo gifts and custom portraits","body":["If your pet's photos already fill your camera roll, our photo gifts put them somewhere you can actually enjoy them. Custom pet portraits, photo mugs, framed prints and canvases use high-resolution printing to bring even the loveliest pet pictures to life.","Custom pet portraits make particularly meaningful birthday and Christmas gifts for animal-loving friends, and our printed canvases and framed prints sit beautifully alongside family photos on a gallery wall."]},{"heading":"Pet memorial keepsakes","body":["Saying goodbye to a beloved pet is one of the hardest moments a family can go through. Our personalised pet memorial keepsakes — engraved garden plaques, paw-print frames and remembrance prints — offer a quietly beautiful way to honour them.","Every memorial piece is hand-finished in our UK studio with the care and sensitivity it deserves, and arrives in considered packaging with a handwritten-style card."]}]}
    />
  );
}
