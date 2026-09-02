import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/about")({
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-3xl font-extrabold capitalize text-foreground">about</h1>
        <p className="mt-3 text-muted-foreground">This page is coming soon.</p>
      </div>
    </div>
  );
}
