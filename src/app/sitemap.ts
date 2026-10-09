import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/bio", "/music", "/sync", "/press", "/contact"].map((p) => ({ url: `${site.url}${p}` }));
}
