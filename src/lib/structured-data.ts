import { siteConfig } from "./metadata";
import { offices } from "@/data/offices";
import type { FaqItem } from "@/data/faq";
import type { JobOpening } from "@/data/jobs";

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

function jobLocation(location: string) {
  const office = offices.find((o) => location.includes(o.id === "ny" ? "NY" : "Lahore") || location.includes(o.city.split(",")[0]));
  if (!office) return null;
  return {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: office.city.split(",")[0],
      addressCountry: office.country,
    },
  };
}

export function jobPostingJsonLd(jobs: JobOpening[], datePosted: string) {
  return jobs.map((job) => {
    const isRemote = job.location.toLowerCase().includes("remote");
    const location = jobLocation(job.location);
    return {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: `${job.title} — a ${job.department} role at ${siteConfig.name}. ${job.location}, ${job.type}.`,
      datePosted,
      employmentType: job.type.toUpperCase() === "FULL-TIME" ? "FULL_TIME" : job.type.toUpperCase().replace(/\s+/g, "_"),
      hiringOrganization: {
        "@type": "Organization",
        name: siteConfig.name,
        sameAs: siteConfig.url,
        logo: `${siteConfig.url}/logos/oxibit-logo.png`,
      },
      ...(location ? { jobLocation: location } : {}),
      ...(isRemote ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "Worldwide" } } : {}),
    };
  });
}
