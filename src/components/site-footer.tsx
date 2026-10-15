import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { serviceLinks, solutionLinks } from "@/lib/site-navigation";
import logoLight from "@/assets/logo-light.png";

const solutions = [
  "Business Launch Package",
  "Business Growth Package",
  "Corporate Brand Partnership",
];

const services = [
  "Branding",
  "Signage",
  "Printing",
  "Websites",
  "Digital Marketing",
  "Promotional Merchandise",
];

const industries = [
  "Healthcare",
  "Construction",
  "Education",
  "Legal",
  "Hospitality",
  "View All Industries",
];

const quickLinks = [
  { label: "About Us", to: "/about" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "Contact", to: "/contact" as const },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const linkClass =
  "text-sm text-topbar-foreground/70 transition-colors hover:text-brand";

export function SiteFooter() {
  return (
    <>
      <footer className="bg-topbar px-6 pb-8 pt-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Company */}
            <div>
              <img
                src={logoLight}
                alt="Image Quest Graphics Ltd"
                className="h-12 w-auto"
              />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-topbar-foreground/70">
                We help businesses launch, grow and lead through strategic
                branding, signage, print and digital solutions.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-full border border-card/30 text-topbar-foreground/70 transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Solutions
              </h3>
              <ul className="mt-5 space-y-3">
                {solutionLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Services
              </h3>
              <ul className="mt-5 space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item}>
                    <Link to={item.to} className={linkClass}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Industries
              </h3>
              <ul className="mt-5 space-y-3">
                {industries.map((item) => (
                  <li key={item}>
                    <Link to="/industries" className={linkClass}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links + contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-brand">
                Contact Us
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
                  <a
                    href="mailto:info@imagequest.co.ke"
                    className="hover:text-brand"
                  >
                    info@imagequest.co.ke
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
                  Mon – Fri: 8:00AM – 5:30PM
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-card/10 pt-6 text-xs text-topbar-foreground/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Image Quest Graphics Ltd. All Rights
              Reserved.
            </p>
            <p className="flex items-center gap-2">
              <a href="#" className="transition-colors hover:text-brand">
                Privacy Policy
              </a>
              <span className="text-card/20">|</span>
              <a href="#" className="transition-colors hover:text-brand">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/254720791677"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[oklch(0.72_0.19_145)] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7 fill-current" />
      </a>
    </>
  );
}
