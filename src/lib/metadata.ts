import type { Metadata } from "next";

export const siteConfig = {
  name: "Oxibit Technologies",
  tagline: "We Make IT Happen.",
  url: "https://www.oxibit.com",
  description:
    "Oxibit Technologies plans, builds, tests, and maintains custom software for businesses worldwide, from a US base in Tuxedo, New York and a delivery center in Lahore, Pakistan.",
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
