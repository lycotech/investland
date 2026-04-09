import type { MetadataRoute } from "next";
import { INSIGHTS } from "@/lib/insights-data";

const SITE_URL = "https://www.investtrustam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Dynamic insight pages
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...insightRoutes];
}
