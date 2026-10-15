import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Resources | Image Quest Graphics Ltd" }, { name: "description", content: "Resources information from Image Quest Graphics Ltd, Nairobi, Kenya." }, { property: "og:title", content: "Resources | Image Quest Graphics Ltd" }, { property: "og:description", content: "Resources information from Image Quest Graphics Ltd, Nairobi, Kenya." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-3xl font-extrabold capitalize text-foreground">resources</h1>
        <p className="mt-3 text-muted-foreground">This page is coming soon.</p>
      </div>
    </div>
  );
}
