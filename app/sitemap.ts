import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://nightlightbazaar.de/", changeFrequency: "weekly", priority: 1 },
    { url: "https://nightlightbazaar.de/impressum", changeFrequency: "yearly", priority: 0.2 },
    { url: "https://nightlightbazaar.de/datenschutz", changeFrequency: "yearly", priority: 0.2 },
  ];
}
