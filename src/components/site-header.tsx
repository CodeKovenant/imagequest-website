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
import { Button } from "@/components/ui/button";
import { serviceLinks, solutionLinks } from "@/lib/site-navigation";
import logo from "@/assets/logo.png";

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
    <Link
      to="/"
      className="flex items-center shrink-0"
      aria-label="Image Quest Graphics Ltd — home"
    >
      <img src={logo} alt="Image Quest Graphics Ltd" className="h-10 w-auto shrink-0 sm:h-11" />
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
              <span aria-label="Facebook">
                <Facebook className="h-3.5 w-3.5" />
              </span>
              <span aria-label="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </span>
              <span aria-label="LinkedIn">
                <Linkedin className="h-3.5 w-3.5" />
              </span>
              <span aria-label="YouTube">
                <Youtube className="h-3.5 w-3.5" />
              </span>
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
              <div key={item.label} className="group relative">
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-nav-foreground transition-colors hover:text-brand"
                  activeProps={{ className: "text-brand" }}
                  activeOptions={{ exact: item.href === "/" }}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
                </Link>
                {(item.label === "SERVICES" || item.label === "SOLUTIONS") && (
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-md border border-border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {(item.label === "SERVICES" ? serviceLinks : solutionLinks).map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block rounded-sm px-3 py-2.5 text-sm text-nav-foreground hover:bg-muted hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full bg-brand px-6 py-2.5 text-[13px] font-bold tracking-wide text-brand-foreground shadow-md transition-all hover:brightness-110 lg:inline-block"
            >
              REQUEST A QUOTE
            </Link>
            <Button
              variant="unstyled"
              className="rounded-md p-2 text-nav-foreground lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="max-h-[calc(100dvh-120px)] overflow-y-auto border-t border-border px-4 pb-4 lg:hidden"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
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
                {(item.label === "SERVICES" || item.label === "SOLUTIONS") && (
                  <div className="border-l border-border pl-4">
                    {(item.label === "SERVICES" ? serviceLinks : solutionLinks).map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-muted-foreground hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
