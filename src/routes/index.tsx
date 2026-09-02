import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Expand,
  Gift,
  Heart,
  Image as ImageIcon,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  Monitor,
  Play,
  Printer,
  Rocket,
  ShieldCheck,
  Signpost,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  ChevronRight,
} from "lucide-react";
import heroReception from "@/assets/hero-reception.jpg";
import serviceLaunch from "@/assets/service-launch.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import servicePartnership from "@/assets/service-partnership.jpg";
import portfolioSmiles from "@/assets/portfolio-smiles.jpg";
import portfolioKings from "@/assets/portfolio-kings.jpg";
import portfolioSuv from "@/assets/portfolio-suv.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";
import portfolioOrchid from "@/assets/portfolio-orchid.jpg";
import portfolioBrochures from "@/assets/portfolio-brochures.jpg";

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

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Launch",
    description: "Build a strong foundation with professional branding and essential assets.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Visibility",
    description: "Increase awareness and get noticed by the right audience.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Growth",
    description: "Attract more customers and grow your business consistently.",
  },
  {
    icon: Expand,
    number: "04",
    title: "Expansion",
    description: "Scale your operations and reach new markets with confidence.",
  },
  {
    icon: Trophy,
    number: "05",
    title: "Market Leader",
    description: "Become the trusted leader in your industry and dominate your market.",
  },
];

const solutions = [
  {
    icon: Rocket,
    title: "Business Launch Package",
    description: "Everything you need to launch your business professionally.",
    image: serviceLaunch,
    alt: "A laptop open on a clean desk showing design files alongside office desk items",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Package",
    description: "Marketing and branding solutions that help you attract more customers.",
    image: serviceGrowth,
    alt: "Printed marketing materials, brochures, and flyers laid out neatly on a table",
  },
  {
    icon: Users,
    title: "Corporate Brand Partnership",
    description: "Your outsourced branding department for consistent, scalable growth.",
    image: servicePartnership,
    alt: "Corporate professionals sitting around a meeting room table collaborating",
  },
];

const coreServices = [
  { icon: Target, title: "Branding", subtitle: "Logo, Identity & Guidelines" },
  { icon: Signpost, title: "Signage", subtitle: "Indoor, Outdoor & Wayfinding" },
  { icon: Printer, title: "Printing", subtitle: "All Your Print Needs" },
  { icon: Monitor, title: "Websites", subtitle: "Custom, Responsive & Fast" },
  { icon: TrendingUp, title: "Digital Marketing", subtitle: "SEO, Social Media & Ads" },
  { icon: Car, title: "Vehicle Branding", subtitle: "Design & Full Branding" },
  { icon: Gift, title: "Corporate Gifts", subtitle: "Branded Gifts & Merchandise" },
  { icon: Briefcase, title: "Company Profiles", subtitle: "Profiles, Reports & Presentations" },
  { icon: ImageIcon, title: "Large Format Printing", subtitle: "Banners, Posters & More" },
  { icon: Heart, title: "Office Branding", subtitle: "Transform Your Workspaces" },
];

const portfolioFilters = [
  "All",
  "Branding",
  "Signage",
  "Vehicle Branding",
  "Websites",
  "Printing",
  "Office Branding",
] as const;

type PortfolioFilter = (typeof portfolioFilters)[number];

const portfolioProjects = [
  {
    image: portfolioSmiles,
    alt: "Office interior lobby with a clean wall sign reading Smiles DENTAL CLINIC",
    category: "Office Branding" as PortfolioFilter,
  },
  {
    image: portfolioKings,
    alt: "A massive outdoor commercial billboard featuring a logo and text reading KINGS",
    category: "Signage" as PortfolioFilter,
  },
  {
    image: portfolioSuv,
    alt: "An SUV car wrapped in custom orange and black commercial branding graphics",
    category: "Vehicle Branding" as PortfolioFilter,
  },
  {
    image: portfolioWebsite,
    alt: "A modern laptop open on a table displaying a client portfolio website design",
    category: "Websites" as PortfolioFilter,
  },
  {
    image: portfolioOrchid,
    alt: "An elegant clinic reception waiting area with a wall sign reading Orchid MEDICAL CENTRE",
    category: "Branding" as PortfolioFilter,
  },
  {
    image: portfolioBrochures,
    alt: "Professional bi-fold marketing brochures and corporate flyers spread open on a table",
    category: "Printing" as PortfolioFilter,
  },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

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

      {/* Business Growth Framework */}
      <section className="bg-background px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              OUR BUSINESS GROWTH FRAMEWORK™
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              From Business Idea To Market Leadership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We partner with you at every stage of your business journey.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 flex flex-wrap items-stretch justify-center gap-4 lg:flex-nowrap lg:gap-0">
            {steps.map(({ icon: Icon, number, title, description }, index) => (
              <div key={number} className="flex items-center lg:flex-1">
                <div className="group relative w-full rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
                  {/* Step badge */}
                  <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
                    {number}
                  </span>
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="grid size-16 place-items-center rounded-full bg-brand/10">
                      <Icon className="size-8 text-brand" strokeWidth={1.75} />
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="mb-2 text-center text-lg font-bold text-foreground">
                    {title}
                  </h3>
                  {/* Description */}
                  <p className="text-center text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="mx-1 hidden size-6 shrink-0 text-brand lg:block" strokeWidth={2.5} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-muted/30 px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              OUR SOLUTIONS
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Complete Branding & Growth Solutions
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, description, image, alt }) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Top half: image with floating icon */}
                <div className="relative h-52">
                  <img
                    src={image}
                    alt={alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  {/* Floating icon */}
                  <div className="absolute -bottom-7 left-6">
                    <div className="grid size-14 place-items-center rounded-full border-2 border-brand bg-card shadow-md">
                      <Icon className="size-6 text-brand" strokeWidth={1.75} />
                    </div>
                  </div>
                </div>

                {/* Bottom half: content */}
                <div className="flex flex-col px-6 pb-6 pt-10">
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <Link
                    to="/solutions"
                    className="self-end text-sm font-bold uppercase tracking-wide text-brand transition-opacity hover:opacity-80"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-background px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              OUR CORE SERVICES
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Everything Your Business Needs To Succeed
            </h2>
          </div>

          {/* Cards — horizontal row on desktop, grid on mobile/tablet */}
          <div className="mt-14 flex snap-x flex-wrap justify-start gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:flex-nowrap lg:overflow-x-auto lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
            {coreServices.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex aspect-square w-[calc(50%-0.5rem)] snap-start flex-col items-center justify-center rounded-xl border border-border/60 bg-card p-4 text-center shadow-sm transition-shadow hover:shadow-md sm:w-auto lg:w-full"
              >
                <div className="mb-3 grid size-12 place-items-center rounded-full bg-brand/10">
                  <Icon className="size-6 text-brand" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:border-brand hover:bg-brand/5"
            >
              View All Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work / Portfolio */}
      <section className="bg-muted/30 px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              FEATURED WORK
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Our Latest Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {portfolioFilters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={
                    isActive
                      ? "rounded-full bg-brand px-5 py-2 text-sm font-bold text-brand-foreground"
                      : "text-sm font-semibold text-foreground transition-colors hover:text-brand"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Gallery grid */}
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:gap-1">
            {visibleProjects.map(({ image, alt, category }) => (
              <div
                key={alt}
                className="group relative aspect-square overflow-hidden rounded-sm lg:aspect-auto lg:h-72 lg:w-full"
              >
                <img
                  src={image}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-4 text-xs font-bold uppercase tracking-wide text-card">
                    {category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-brand/90"
            >
              View All Projects
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
