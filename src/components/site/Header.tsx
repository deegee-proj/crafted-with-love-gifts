import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const NAV = [
  { label: "Father's Day", to: "/fathers-day" },
  { label: "Personalised Gifts", to: "/personalised-gifts" },
  { label: "Personalised Mugs", to: "/personalised-mugs" },
  { label: "Photo Gifts", to: "/photo-gifts" },
  { label: "Pets & Pet Lovers", to: "/pets" },
  { label: "Corporate Gifts", to: "/corporate-gifts" },
  { label: "Birthdays", to: "/birthdays" },
  { label: "Weddings", to: "/weddings" },
  { label: "Anniversaries", to: "/anniversaries" },
  { label: "Occasions", to: "/occasions" },
  { label: "By Recipient", to: "/by-recipient" },
  { label: "Home & Garden", to: "/home-garden" },
  { label: "Food & Drinks", to: "/food-drinks" },
  { label: "Fashion & Accs.", to: "/fashion-accessories" },
  { label: "Memorial Gifts", to: "/memorial-gifts" },
] as const;

const TOP_NAV = [
  { label: "Father's Day", to: "/fathers-day" },
  { label: "Personalised Gifts", to: "/personalised-gifts" },
  { label: "Personalised Mugs", to: "/personalised-mugs" },
  { label: "Photo Gifts", to: "/photo-gifts" },
  { label: "Pets & Pet Lovers", to: "/pets" },
  { label: "Corporate Gifts", to: "/corporate-gifts" },
  { label: "Birthdays", to: "/birthdays" },
  { label: "Weddings", to: "/weddings" },
  { label: "Anniversaries", to: "/anniversaries" },
  { label: "Occasions", to: "/occasions" },
  { label: "By Recipient", to: "/by-recipient" },
  { label: "FAQs", to: "/faq" },
] as const;


export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement */}
      <div className="bg-ink text-cream text-[11px] tracking-[0.18em] uppercase font-medium text-center py-2">
        Fast Production · Express Delivery Options Available
      </div>

      <nav className="bg-background/85 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 -ml-2" aria-label="Open menu">
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetHeader className="px-6 py-5 border-b border-ink/10">
                <SheetTitle className="font-display text-xl font-semibold tracking-tight text-left">
                  Maker<span className="text-primary">·</span>Mark
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-2">
                {NAV.map((n) => (
                  <Link
                    key={n.label}
                    to={n.to}
                    className="px-6 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/60 transition-colors"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex flex-col items-center shrink-0 leading-none">
            <span className="font-display text-2xl font-semibold tracking-tight leading-none">
              Maker<span className="text-primary">·</span>Mark
            </span>
            <span className="mt-0.5 text-primary text-[10px] sm:text-[11px] tracking-[0.08em] lowercase leading-none" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              personalised gifts
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-[12px] xl:text-[13px] font-medium whitespace-nowrap">
            {TOP_NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="relative py-1 text-foreground/80 hover:text-primary transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="size-10 grid place-items-center rounded-full hover:bg-secondary transition-colors" aria-label="Wishlist">
              <Heart className="size-5" />
            </button>
            <button className="relative size-10 grid place-items-center rounded-full hover:bg-secondary transition-colors" aria-label="Bag">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold grid place-items-center">0</span>
            </button>
          </div>
        </div>

        {/* Search row */}
        <div className="max-w-[1400px] mx-auto px-6 pb-3">
          <div className="flex items-center gap-2 bg-secondary/60 rounded-full px-4 h-9 w-full max-w-md mx-auto">
            <Search className="size-4 text-muted-foreground" />
            <input
              placeholder="Search gifts, names, occasions…"
              className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
              aria-label="Search products"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
