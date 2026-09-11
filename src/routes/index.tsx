import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
  Quote,
  Rocket,
  ShieldCheck,
  Signpost,
  Sparkles,
  Send,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
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
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";
import blogBrandIdentity from "@/assets/blog-brand-identity.jpg";
import blogDigitalMarketing from "@/assets/blog-digital-marketing.jpg";
import blogWebsiteTrust from "@/assets/blog-website-trust.jpg";

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
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Businesses Served" },
  { value: "2,500+", label: "Projects Completed" },
  { value: "Nationwide", label: "Service & Installation" },
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

const whyChoose = [
  {
    icon: Layers,
    title: "One-Stop Solution",
    description: "All branding, print, signage & digital services under one roof.",
  },
  {
    icon: Brain,
    title: "Creative Experts",
    description: "Talented designers with strategic thinking.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Premium quality materials and attention to detail.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We respect your time and deliver on schedule.",
  },
  {
    icon: MapPin,
    title: "Nationwide Service",
    description: "Serving businesses across Kenya with installation support.",
  },
  {
    icon: Sparkles,
    title: "Ongoing Support",
    description: "Long-term partnership for continuous growth.",
  },
];

const testimonials = [
  {
    quote:
      "Image Quest transformed our brand completely. From the logo to our signage and website, everything was top-notch. Highly professional and reliable team!",
    name: "Dr. Brian Mwangi",
    role: "Smiles Dental Care",
    avatar: testimonialAvatar,
    avatarAlt: "Professional headshot portrait of Dr. Brian Mwangi in a suit",
  },
  {
    quote:
      "We needed our entire fleet branded in under three weeks. Image Quest handled design, production and installation nationwide without a single missed deadline.",
    name: "Achieng Odhiambo",
    role: "Operations Lead, Rift Logistics",
    avatar: testimonialAvatar,
    avatarAlt: "Portrait of a smiling professional client",
  },
  {
    quote:
      "From our reception signage to the company profile and website, everything speaks one language now. Clients notice the difference the moment they walk in.",
    name: "Peter Kariuki",
    role: "Managing Director, Orchid Medical Centre",
    avatar: testimonialAvatar,
    avatarAlt: "Portrait of a professional client in an office",
  },
];

const posts = [
  {
    image: blogBrandIdentity,
    alt: "Brand identity design sheets with logo sketches and colour swatches on a desk",
    category: "Branding",
    date: "May 12, 2024",
    title: "Why Your Brand Identity Matters More Than You Think",
  },
  {
    image: blogDigitalMarketing,
    alt: "Marketing team reviewing digital analytics on a laptop in a bright office",
    category: "Marketing",
    date: "April 28, 2024",
    title: "5 Digital Marketing Strategies To Grow Your Business",
  },
  {
    image: blogWebsiteTrust,
    alt: "A professional company website displayed on a laptop on a clean desk",
    category: "Websites",
    date: "April 9, 2024",
    title: "How A Professional Website Builds Trust And Generates Leads",
  },
];

const impactStats = [
  { figure: "15+", label: "Years of Experience" },
  { figure: "500+", label: "Businesses Served" },
  { figure: "2,500+", label: "Projects Completed" },
  { figure: "98%", label: "Client Satisfaction Rate" },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const visibleProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  const nextTestimonial = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[activeTestimonial]!;


  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Full-bleed office image */}
        <img
          src={heroReception}
          alt="Image Quest Graphics reception with backlit 3D logo on a warm textured wall"
          className="absolute inset-0 h-full w-full object-cover"
          width={1280}
          height={1024}
        />
        {/* Readability gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

        <div className="relative grid lg:min-h-[640px] lg:grid-cols-2">
          {/* Left: executive glass panel */}
          <div className="flex items-center px-4 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/20 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-brand" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
                  Image Quest Graphics Ltd
                </span>
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building Brands That{" "}
                <span className="text-brand italic">Command</span> Trust
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                Strategic branding, signage, print and digital solutions that
                help businesses launch, grow and lead.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-bold uppercase tracking-wide text-brand-foreground shadow-[0_8px_20px_-4px_rgba(234,88,12,0.4)] transition-all hover:bg-brand/90 active:scale-[0.98]"
                >
                  Get Free Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-white/10">
                    <Play className="size-3 translate-x-px fill-current" />
                  </span>
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Right: floating stats cards */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 right-12 my-auto flex w-64 flex-col justify-center gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl"
                >
                  <div className="text-2xl font-extrabold text-brand">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet stats grid */}
        <div className="relative grid grid-cols-2 gap-2 bg-black/40 px-5 py-6 backdrop-blur-xl sm:px-8 lg:hidden">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl"
            >
              <div className="text-xl font-extrabold text-brand">{value}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                {label}
              </div>
            </div>
          ))}
          {/* Carousel indicators (mobile) */}
          <div className="col-span-full mt-1 flex items-center justify-center gap-2.5">
            <span className="h-1 w-6 rounded-full bg-brand" />
            <span className="size-1 rounded-full bg-white/30" />
            <span className="size-1 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Carousel indicators (desktop) */}
        <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2.5 lg:flex">
          <span className="h-1 w-6 rounded-full bg-brand" />
          <span className="size-1 rounded-full bg-white/30" />
          <span className="size-1 rounded-full bg-white/30" />
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

      {/* Why Choose Image Quest */}
      <section className="bg-background px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              WHY CHOOSE IMAGE QUEST?
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              We Deliver More Than Just Print
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {whyChoose.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="size-10 text-brand" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Impact Stats */}
      <section className="bg-muted/30 px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Testimonial slider */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              WHAT OUR CLIENTS SAY
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Trusted By 500+ Businesses
            </h2>

            {/* Quote + nav row */}
            <div className="mt-8 flex items-start justify-between gap-6">
              <Quote className="size-10 shrink-0 text-brand" strokeWidth={1.5} />
              <div className="flex shrink-0 gap-3">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground">
              {testimonial.quote}
            </p>

            {/* Reviewer info */}
            <div className="mt-8 flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.avatarAlt}
                className="size-14 rounded-full object-cover"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brand text-brand" />
                  ))}
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="mt-8 flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setActiveTestimonial(i)}
                  className={
                    i === activeTestimonial
                      ? "h-2 w-8 rounded-full bg-brand transition-all"
                      : "h-2 w-2 rounded-full bg-border transition-all hover:bg-brand/50"
                  }
                />
              ))}
            </div>
          </div>

          {/* Right: Impact stats */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              OUR IMPACT IN NUMBERS
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Helping Businesses Grow Since 2009
            </h2>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-0">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center lg:px-4 ${
                    index !== 0 ? "lg:border-l lg:border-border" : ""
                  }`}
                >
                  <span className="text-4xl font-extrabold text-brand">
                    {stat.figure}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="bg-background px-6 py-20 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              LATEST INSIGHTS
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Branding &amp; Marketing Tips
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map(({ image, alt, category, date, title }) => (
              <article
                key={title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand">
                    {category}
                    <span className="text-muted-foreground"> • {date}</span>
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">
                    {title}
                  </h3>
                  <Link
                    to="/resources"
                    className="mt-auto pt-5 text-sm font-bold uppercase tracking-wide text-brand transition-opacity hover:opacity-80"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}

            {/* Newsletter card */}
            <div className="flex flex-col justify-center rounded-2xl bg-muted p-7">
              <h3 className="text-2xl font-extrabold leading-tight text-foreground">
                Stay Updated
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Subscribe to our newsletter for the latest tips, trends and
                offers.
              </p>
              <form
                className="mt-6 flex items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 rounded-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-brand"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  <Send className="size-4" />
                </button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-topbar px-6 py-20 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Let&apos;s Build Something Memorable
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-card sm:text-4xl lg:text-5xl">
            Ready To Give Your Brand The Presence It Deserves?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-topbar-foreground/70 sm:text-lg">
            Talk to our team for a free consultation and a clear, no-obligation
            quote — usually within 24 hours.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Get Free Consultation
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+254720791677"
              className="inline-flex items-center gap-2 rounded-md border border-card/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-card transition-colors hover:border-card hover:bg-card/10"
            >
              Call +254 720 791 677
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
