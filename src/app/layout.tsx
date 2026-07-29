import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/metadata";
import { offices } from "@/data/offices";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#21252C",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: "Oxibit",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/oxibit-logo.png`,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  foundingDate: "2020",
  address: offices.map((office) => ({
    "@type": "PostalAddress",
    addressLocality: office.city,
    addressCountry: office.country,
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@oxibit.com",
      telephone: "+1-845-915-4480",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@oxibit.com",
      telephone: "+92-333-440-1011",
      areaServed: "PK",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[radial-gradient(1100px_520px_at_86%_-6%,#E6F0FF_0%,rgba(230,240,255,0)_60%),radial-gradient(820px_480px_at_4%_2%,#E7FAFF_0%,rgba(231,250,255,0)_55%),#fff] font-sans text-slate antialiased">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
