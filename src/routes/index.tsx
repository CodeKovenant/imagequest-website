import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import heroImage from "@/assets/hero-print.jpg";

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

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="relative">
        <img
          src={heroImage}
          alt="Large format printing machines inside the Image Quest Graphics production workshop"
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-foreground/40">
          <div className="mx-auto w-full max-w-7xl px-4 pb-10">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-card">
              Large Format Printing & Signage Solutions
            </h1>
            <p className="mt-3 max-w-xl text-base text-card/80">
              Bringing your brand to life with quality prints, signage and displays across Kenya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
