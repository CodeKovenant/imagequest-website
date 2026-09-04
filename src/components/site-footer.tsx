import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const services = [
  "Branding & Identity",
  "Signage & Fabrication",
  "Large Format Printing",
  "Vehicle Branding",
  "Office Branding",
  "Websites & Digital",
];

const company = [
  { label: "About Us", to: "/about" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Services", to: "/services" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Resources", to: "/resources" as const },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="bg-topbar px-6 pb-8 pt-16 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-lg bg-brand text-lg font-extrabold text-brand-foreground">
                iQ
              </span>
              <span className="text-lg font-bold leading-tight text-card">
                Image Quest
                <span className="block text-xs font-medium uppercase tracking-[0.18em] text-topbar-foreground/60">
                  Graphics Ltd
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-topbar-foreground/70">
              Strategic branding, signage, print and digital solutions that help
              businesses launch, grow and lead.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-card/20 text-topbar-foreground/70 transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-card">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-topbar-foreground/70 transition-colors hover:text-brand"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-card">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {company.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-topbar-foreground/70 transition-colors hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-card">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-topbar-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                Nairobi, Kenya
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                <a href="tel:+254720791677" className="hover:text-brand">
                  +254 720 791 677
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                <a href="mailto:info@imagequest.co.ke" className="hover:text-brand">
                  info@imagequest.co.ke
                </a>
              </li>
              <li className="text-topbar-foreground/60">
                Mon – Fri: 8:00AM – 5:30PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-card/10 pt-6 text-xs text-topbar-foreground/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Image Quest Graphics Ltd. All rights
            reserved.
          </p>
          <p>Nairobi, Kenya · Nationwide service &amp; installation</p>
        </div>
      </div>
    </footer>
  );
}
