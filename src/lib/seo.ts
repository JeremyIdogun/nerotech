import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function buildMetadata(
  title: string,
  description?: string,
): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    openGraph: {
      title,
      description: description ?? siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
