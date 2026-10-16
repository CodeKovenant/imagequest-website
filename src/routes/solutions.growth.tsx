import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/content-pages/solutions.growth";

export const Route = createFileRoute("/solutions/growth")({
  head: () => ({
    meta: [
      { title: "Business Growth Package | Image Quest Graphics Ltd" },
      {
        name: "description",
        content:
          "Grow your business with coordinated marketing, branding and digital strategies from Image Quest Graphics Ltd.",
      },
      {
        property: "og:title",
        content: "Business Growth Package | Image Quest Graphics Ltd",
      },
      {
        property: "og:description",
        content:
          "Grow your business with coordinated marketing, branding and digital strategies from Image Quest Graphics Ltd.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContentPage,
});
