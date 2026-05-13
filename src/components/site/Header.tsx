import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";

const NAV = [
  { label: "Father's Day", to: "/" },
  { label: "By Recipient", to: "/" },
  { label: "Birthdays", to: "/" },
  { label: "Weddings", to: "/" },
  { label: "Anniversaries", to: "/" },
  { label: "Occasions", to: "/" },
  { label: "Home & Garden", to: "/" },
  { label: "Food & Drinks", to: "/" },
  { label: "Fashion & Accs.", to: "/" },
  { label: "Corporate Gifts", to: "/" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement */}
      <div className="bg-ink text-cream text-[11px] tracking-[0.18em] uppercase font-medium text-center py-2">
        Free UK delivery on orders over £50 · Live preview on selected products
      </div>

      <nav className="bg-background/85 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <button className="lg:hidden p-2 -ml-2" aria-label="Open menu">
            <Menu className="size-5" />
          </button>

          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="font-display text-2xl font-semibold tracking-tight leading-none">
              Maker<span className="text-primary">·</span>Mark
            </span>
            <span className="hidden sm:block pl-3 border-l border-ink/15 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60 leading-tight max-w-[12ch]">
              Personalised<br />Gifts
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {NAV.map((n) => (
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
            <div className="hidden md:flex items-center gap-2 bg-secondary/60 rounded-full px-4 h-10 w-56">
              <Search className="size-4 text-muted-foreground" />
              <input
                placeholder="Search gifts, names, occasions…"
                className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
                aria-label="Search products"
              />
            </div>
            <button className="size-10 grid place-items-center rounded-full hover:bg-secondary transition-colors" aria-label="Wishlist">
              <Heart className="size-5" />
            </button>
            <button className="relative size-10 grid place-items-center rounded-full hover:bg-secondary transition-colors" aria-label="Bag">
              <ShoppingBag className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold grid place-items-center">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
