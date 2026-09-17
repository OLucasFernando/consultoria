import type { Metadata } from "next";

export function siteUrl(): URL | undefined {
  const value = process.env.SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || ["localhost", "127.0.0.1", "0.0.0.0", "[::1]"].includes(url.hostname) || url.hostname.endsWith(".localhost") || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL deve ser a origem HTTPS pública do site, sem caminho ou credenciais.");
  }
  return url;
}

export function indexable() {
  return process.env.NODE_ENV === "production"
    && Boolean(siteUrl())
    && process.env.SITE_INDEXABLE === "true"
    && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production")
    && (!process.env.CONTEXT || process.env.CONTEXT === "production");
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const base = siteUrl();
  return {
    title, description,
    metadataBase: base ?? null,
    ...(base ? { metadataBase: base, alternates: { canonical: new URL(path, base).href } } : {}),
    robots: { index: indexable(), follow: indexable() },
    openGraph: {
      title, description, type: "website", locale: "pt_BR", siteName: "Lucas Fernando",
      ...(base ? { url: new URL(path, base).href } : {}),
      images: base ? [{ url: new URL("/opengraph-image", base).href, width: 1200, height: 630, alt: "Lucas Fernando Santos Sousa — Psicólogo, CRP 22/05509" }] : [],
    },
    twitter: { card: "summary_large_image", title, description, images: base ? [new URL("/opengraph-image", base).href] : [] },
  };
}
