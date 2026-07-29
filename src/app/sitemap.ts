import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const routes = ["", "/services", "/about", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
