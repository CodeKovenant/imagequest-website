import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Image Quest Graphics Ltd" },
      {
        name: "description",
        content:
          "Talk to Image Quest Graphics Ltd about branding, signage, printing and digital services.",
      },
      { property: "og:title", content: "Contact | Image Quest Graphics Ltd" },
      {
        property: "og:description",
        content: "Talk to our Nairobi team about your next branding or printing project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand">Get in touch</p>
          <h1 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
            Let’s bring your next idea to life.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell us what you’re planning. Our Nairobi team can help with branding, signage, print,
            websites and digital marketing.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+254720791677"
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand"
          >
            <Phone className="size-6 text-brand" />
            <h2 className="mt-4 font-bold text-foreground">Call us</h2>
            <p className="mt-2 text-sm text-muted-foreground">+254 720 791 677</p>
          </a>
          <a
            href="mailto:info@imagequest.co.ke"
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand"
          >
            <Mail className="size-6 text-brand" />
            <h2 className="mt-4 font-bold text-foreground">Email us</h2>
            <p className="mt-2 break-all text-sm text-muted-foreground">info@imagequest.co.ke</p>
          </a>
          <a
            href="https://wa.me/254720791677"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand"
          >
            <MessageCircle className="size-6 text-brand" />
            <h2 className="mt-4 font-bold text-foreground">WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">Chat with our team</p>
          </a>
          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="size-6 text-brand" />
            <h2 className="mt-4 font-bold text-foreground">Visit us</h2>
            <p className="mt-2 text-sm text-muted-foreground">Nairobi, Kenya</p>
          </div>
        </div>

        <p className="mx-auto mt-8 flex max-w-fit items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4 text-brand" />
          Monday–Friday, 8:00 AM–5:30 PM
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
