import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import portfolioBrochures from "@/assets/portfolio-brochures.jpg";
import portfolioKings from "@/assets/portfolio-kings.jpg";
import portfolioOrchid from "@/assets/portfolio-orchid.jpg";
import portfolioSmiles from "@/assets/portfolio-smiles.jpg";
import portfolioSuv from "@/assets/portfolio-suv.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Work | Image Quest Graphics Ltd" },
      {
        name: "description",
        content:
          "Explore branding, signage, vehicle graphics, websites and print projects by Image Quest Graphics Ltd.",
      },
      { property: "og:title", content: "Our Work | Image Quest Graphics Ltd" },
      {
        property: "og:description",
        content: "Selected creative and print projects from our Nairobi team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    image: portfolioSmiles,
    alt: "Branded dental clinic reception sign",
    category: "Office Branding",
  },
  {
    image: portfolioKings,
    alt: "Large outdoor KINGS commercial billboard",
    category: "Signage",
  },
  {
    image: portfolioSuv,
    alt: "SUV wrapped in orange and black commercial graphics",
    category: "Vehicle Branding",
  },
  {
    image: portfolioWebsite,
    alt: "Client website displayed on a laptop",
    category: "Websites",
  },
  {
    image: portfolioOrchid,
    alt: "Clinic reception with Orchid Medical Centre wall branding",
    category: "Branding",
  },
  {
    image: portfolioBrochures,
    alt: "Printed company brochures and corporate flyers",
    category: "Printing",
  },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-topbar px-4 py-16 text-center text-topbar-foreground sm:px-6 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Selected Work</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            Creative work built to make brands stand out
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-topbar-foreground/70 sm:text-lg">
            A selection of branding, signage, print and digital projects created for businesses
            across Kenya.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ image, alt, category }) => (
              <figure
                key={category}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={image}
                  alt={alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <figcaption className="p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-brand">{category}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{alt}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Discuss your project <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
