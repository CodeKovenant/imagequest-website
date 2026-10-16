import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import blogBrandIdentity from "@/assets/blog-brand-identity.jpg";
import blogDigitalMarketing from "@/assets/blog-digital-marketing.jpg";
import blogWebsiteTrust from "@/assets/blog-website-trust.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Branding & Marketing Resources | Image Quest Graphics Ltd" },
      {
        name: "description",
        content:
          "Practical ideas on brand identity, digital marketing and business websites from Image Quest Graphics Ltd.",
      },
      {
        property: "og:title",
        content: "Branding & Marketing Resources | Image Quest Graphics Ltd",
      },
      {
        property: "og:description",
        content: "Ideas to help your business build a stronger brand and digital presence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  {
    image: blogBrandIdentity,
    alt: "Brand identity sketches and colour swatches",
    category: "Branding",
    title: "Why a consistent brand identity matters",
    description:
      "A recognizable identity helps customers understand who you are and builds trust across every interaction.",
    to: "/services/branding",
    link: "Explore branding",
  },
  {
    image: blogDigitalMarketing,
    alt: "Marketing team reviewing campaign analytics",
    category: "Marketing",
    title: "Make your digital marketing work harder",
    description:
      "Connect your audience, message and channels with a focused strategy designed around measurable goals.",
    to: "/services/digital-marketing",
    link: "Explore digital marketing",
  },
  {
    image: blogWebsiteTrust,
    alt: "Professional business website on a laptop",
    category: "Websites",
    title: "How a professional website builds trust",
    description:
      "A fast, clear and mobile-friendly website can make it easier for potential customers to choose you.",
    to: "/services/websites",
    link: "Explore website services",
  },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-topbar px-4 py-16 text-center text-topbar-foreground sm:px-6 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Resources</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            Ideas for building a stronger business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-topbar-foreground/70 sm:text-lg">
            Explore practical guidance on branding, digital marketing and websites, then find the
            right service to put it into action.
          </p>
        </section>
        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-3 lg:py-20">
          {resources.map(({ image, alt, category, title, description, to, link }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={image}
                alt={alt}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{category}</p>
                <h2 className="mt-3 text-xl font-bold text-foreground">{title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <Link
                  to={to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                >
                  {link} <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
