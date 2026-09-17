import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  if (!base || !indexable()) return [];
  return ["/", "/sobre", "/servicos", "/contato", "/politica-de-privacidade", "/termos-de-uso"].map((path) => ({ url: new URL(path, base).href }));
}
