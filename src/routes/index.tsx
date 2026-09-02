import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Expand,
  Lightbulb,
  MapPin,
  Megaphone,
  Play,
  TrendingUp,
  Trophy,
  ChevronRight,
} from "lucide-react";
import heroReception from "@/assets/hero-reception.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Image Quest Graphics Ltd — Large Format Printing & Signage, Nairobi" },
      {
        name: "description",
        content:
          "Image Quest Graphics Ltd delivers large format printing, signage, branding and display solutions in Nairobi, Kenya. Request a quote today.",
      },
      { property: "og:title", content: "Image Quest Graphics Ltd — Large Format Printing & Signage" },
      {
        property: "og:description",
        content:
          "Large format printing, signage and branding solutions in Nairobi, Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Award, label: "15+ Years Experience" },
  { icon: Building2, label: "500+ Businesses Served" },
  { icon: CheckCircle2, label: "2,500+ Projects Completed" },
  { icon: MapPin, label: "Nationwide Service & Installation" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative grid lg:min-h-[560px] lg:grid-cols-2">
        {/* Left: content */}
        <div className="flex items-center bg-topbar px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Image Quest Graphics Ltd
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-card sm:text-5xl lg:text-6xl">
              Building Brands That Command Trust
            </h1>
            <p className="mt-6 text-base leading-relaxed text-topbar-foreground/70 sm:text-lg">
              Strategic branding, signage, print and digital solutions that help
              businesses launch, grow and lead.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Get Free Consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-md border border-card/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-card transition-colors hover:border-card hover:bg-card/10"
              >
                <Play className="size-4 fill-current" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Right: visual + stats */}
        <div className="relative min-h-[320px]">
          <img
            src={heroReception}
            alt="Image Quest Graphics reception with backlit 3D logo on a warm textured wall"
            className="absolute inset-0 h-full w-full object-cover"
            width={1280}
            height={1024}
          />
          {/* Stats panel */}
          <div className="absolute inset-y-0 right-0 hidden w-56 flex-col justify-center gap-8 bg-[oklch(0.25_0.04_60)]/90 px-6 backdrop-blur-sm sm:flex">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-6 shrink-0 text-brand" strokeWidth={1.5} />
                <span className="text-sm font-semibold leading-snug text-card">{label}</span>
              </div>
            ))}
          </div>
          {/* Mobile stats */}
          <div className="relative grid grid-cols-2 gap-4 bg-[oklch(0.25_0.04_60)] p-6 sm:hidden">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-2">
                <Icon className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.5} />
                <span className="text-xs font-semibold leading-snug text-card">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
          <span className="size-2 rounded-full bg-card/50" />
          <span className="size-2.5 rounded-full bg-brand" />
          <span className="size-2 rounded-full bg-card/50" />
        </div>
      </section>
    </div>
  );
}
