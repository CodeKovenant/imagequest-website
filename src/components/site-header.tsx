import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SOLUTIONS", href: "/solutions", dropdown: true },
  { label: "SERVICES", href: "/services", dropdown: true },
  { label: "INDUSTRIES", href: "/industries", dropdown: true },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "RESOURCES", href: "/resources", dropdown: true },
  { label: "CONTACT", href: "/contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-brand">
        <span className="text-2xl font-black italic leading-none text-nav-foreground">
          iQ
        </span>
      </div>
      <div className="leading-none">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-extrabold tracking-tight text-nav-foreground">
            IMAGE
          </span>
          <span className="text-xl font-extrabold tracking-tight text-brand">
            QUEST
          </span>
        </div>
        <div className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-muted-foreground">
          GRAPHICS LTD
        </div>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-topbar text-topbar-foreground">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              Nairobi, Kenya
            </span>
            <a
              href="tel:+254720791677"
              className="flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              +254 720 791 677
            </a>
            <a
              href="mailto:info@imagequest.co.ke"
              className="hidden items-center gap-1.5 transition-colors hover:text-brand md:flex"
            >
              <Mail className="h-3.5 w-3.5 text-brand" />
              info@imagequest.co.ke
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock className="h-3.5 w-3.5 text-brand" />
              Mon - Fri: 8:00AM - 5:30PM
            </span>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-brand">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-brand">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-brand">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-brand">
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-card shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-nav-foreground transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.href === "/" }}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full bg-brand px-6 py-2.5 text-[13px] font-bold tracking-wide text-brand-foreground shadow-md transition-all hover:brightness-110 lg:inline-block"
            >
              REQUEST A QUOTE
            </Link>
            <button
              className="rounded-md p-2 text-nav-foreground lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-border px-4 pb-4 lg:hidden" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border/50 py-3 text-sm font-semibold text-nav-foreground transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.href === "/" }}
              >
                {item.label}
                {item.dropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-brand px-6 py-3 text-center text-sm font-bold text-brand-foreground"
            >
              REQUEST A QUOTE
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
