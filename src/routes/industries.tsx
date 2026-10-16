import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Scale,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Image Quest Graphics Ltd" },
      {
        name: "description",
        content:
          "Branding, signage, print and digital solutions for organizations across healthcare, construction, education, legal, hospitality and retail.",
      },
      { property: "og:title", content: "Industries We Serve | Image Quest Graphics Ltd" },
      {
        property: "og:description",
        content: "Creative solutions tailored to the needs of your industry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const industries = [
  {
    name: "Healthcare",
    description: "Clear wayfinding, patient-friendly environments and trusted brand identities.",
    icon: HeartPulse,
    service: "/services/signage",
    serviceName: "Explore signage",
  },
  {
    name: "Construction & Real Estate",
    description: "Site boards, property marketing, fleet graphics and development signage.",
    icon: Building2,
    service: "/services/printing",
    serviceName: "Explore print",
  },
  {
    name: "Education",
    description: "Campus signage, event materials and consistent institutional branding.",
    icon: GraduationCap,
    service: "/services/branding",
    serviceName: "Explore branding",
  },
  {
    name: "Legal & Professional Services",
    description: "Credible identities, company profiles and polished client-facing materials.",
    icon: Scale,
    service: "/services/branding",
    serviceName: "Explore branding",
  },
  {
    name: "Hospitality",
    description: "Memorable guest experiences through environmental graphics and print.",
    icon: Hotel,
    service: "/services/signage",
    serviceName: "Explore signage",
  },
  {
    name: "Retail & Distribution",
    description: "Promotional displays, branded merchandise and campaigns that stand out.",
    icon: Truck,
    service: "/services/merchandise",
    serviceName: "Explore merchandise",
  },
] as const;

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-topbar px-4 py-16 text-center text-topbar-foreground sm:px-6 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Who We Help</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            Solutions tailored to your industry
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-topbar-foreground/70 sm:text-lg">
            We help organizations create a consistent, professional presence at every customer
            touchpoint.
          </p>
        </section>
        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:py-20">
          {industries.map(({ name, description, icon: Icon, service, serviceName }) => (
            <article key={name} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Icon className="size-8 text-brand" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold text-foreground">{name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <Link
                to={service}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
              >
                {serviceName} <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
