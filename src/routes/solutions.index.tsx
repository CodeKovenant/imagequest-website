import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { solutionLinks } from "@/lib/site-navigation";
import launch from "@/assets/service-launch.jpg";
import growth from "@/assets/service-growth.jpg";
import corporate from "@/assets/service-partnership.jpg";
const images = [launch, growth, corporate];
export const Route = createFileRoute("/solutions/")({
  head: () => ({ meta: [
    { title: "Branding & Growth Solutions | Image Quest Graphics Ltd" },
    { name: "description", content: "Business launch, growth and corporate brand partnership solutions from Image Quest Graphics Ltd." },
    { property: "og:title", content: "Branding & Growth Solutions | Image Quest Graphics Ltd" },
    { property: "og:description", content: "Explore launch, growth and corporate brand partnership solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Solutions,
});
function Solutions() { return <div className="min-h-screen bg-background"><SiteHeader /><main className="mx-auto max-w-7xl px-6 py-16"><p className="text-sm font-semibold text-brand">OUR SOLUTIONS</p><h1 className="mt-3 text-4xl font-bold text-foreground">Complete Branding &amp; Growth Solutions</h1><div className="mt-10 grid gap-6 md:grid-cols-3">{solutionLinks.map((link, i) => <Link key={link.to} to={link.to} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"><img src={images[i]} alt={link.label} className="h-56 w-full object-cover" /><div className="p-6"><h2 className="text-xl font-bold text-foreground">{link.label}</h2><span className="mt-6 inline-block text-sm font-semibold text-brand">Explore solution →</span></div></Link>)}</div></main><SiteFooter /></div>; }
