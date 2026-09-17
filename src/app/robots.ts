import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return indexable() && base
    ? { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: new URL("/sitemap.xml", base).href }
    : { rules: { userAgent: "*", disallow: "/" } };
}
