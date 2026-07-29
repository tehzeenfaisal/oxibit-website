import { ArrowRight, Target, Eye, Ruler, BadgeCheck, Infinity as InfinityIcon, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TintedSection } from "@/components/ui/TintedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { offices } from "@/data/offices";
import { companyStats } from "@/data/company-stats";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Oxibit Technologies is a full-service software house that plans, builds, tests, and maintains custom software from a US base in New York and a delivery center in Lahore.",
  path: "/about",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const values = [
  {
    icon: Ruler,
    tint: "blue" as const,
    title: "Tailored",
    description: "We build around your business, never bend your business to fit a template.",
  },
  {
    icon: Eye,
    tint: "cyan" as const,
    title: "Transparent",
    description: "Clear plans, honest timelines, and pricing you can see before we begin.",
  },
  {
    icon: BadgeCheck,
    tint: "orange" as const,
    title: "Accountable",
    description: "One team owns the outcome end to end. No finger-pointing between vendors.",
  },
  {
    icon: InfinityIcon,
    tint: "green" as const,
    title: "Long-term",
    description: "We measure success in years of reliable service, not a single delivery date.",
  },
];

const presenceStats = [
  { value: `${companyStats.countriesServed}`, label: "Countries served", style: "dark" as const },
  { value: `${companyStats.teamSize}+`, label: "People on the team", style: "blue" as const },
  { value: `${companyStats.yearsBuilding}+`, label: "Years in business", style: "white" as const },
  { value: `${companyStats.projectsDelivered}+`, label: "Projects delivered", style: "white" as const },
];

const timeline = [
  { year: "2020", title: "Oxibit is founded", description: "A small team takes on its first custom builds, with a promise to stay involved after launch." },
  { year: "2022", title: "Lahore delivery center opens", description: "Engineering capacity grows, letting us take on larger, longer-running products." },
  { year: "2024", title: "Full-lifecycle services", description: "QA, cloud, and maintenance become standard, so clients have one partner across the board." },
  { year: "Today", title: "120+ projects, 12 countries", description: "A team trusted by enterprises to build software and keep it running for years." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />

      <PageHero
        eyebrow="About Oxibit"
        title="We make IT happen, and we stay to keep it happening."
        description="Oxibit Technologies is a full-service software house. We plan, build, test, and maintain custom software, increasingly with AI where it helps, for businesses worldwide, from a US base in New York and a delivery center in Lahore."
      />

      {/* Mission / Vision */}
      <Container className="pt-16 pb-10 max-[920px]:py-16">
        <Stagger className="grid grid-cols-2 gap-6 max-[920px]:grid-cols-1" step={140}>
          <div className="rounded-2xl bg-cloud p-10 transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(14,42,71,0.12)]">
            <span className="mb-5 inline-flex size-12 items-center justify-center rounded-[10px] border border-mist bg-white">
              <Target className="size-6 text-blue" />
            </span>
            <h2 className="mb-3 font-heading text-2xl font-semibold text-charcoal">Our mission</h2>
            <p className="text-base leading-relaxed text-slate">
              To turn each client&apos;s business goal into working software, and to stay accountable for it long after launch. Where AI
              genuinely helps, we use it, and we measure ourselves by whether your software keeps delivering, not by whether we shipped
              on time.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E1E9F5] bg-[#EEF4FF] p-10 transition-[transform,box-shadow] duration-200 motion-safe:hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(14,42,71,0.12)]">
            <span className="mb-5 inline-flex size-12 items-center justify-center rounded-[10px] border border-[#DCE6F4] bg-white">
              <Eye className="size-6 text-blue" />
            </span>
            <h2 className="mb-3 font-heading text-2xl font-semibold text-charcoal">Our vision</h2>
            <p className="text-base leading-relaxed text-slate">
              To be the technology partner businesses keep, the one that understands their work, builds what they actually need, and is
              still there years later. One accountable team, for the whole journey.
            </p>
          </div>
        </Stagger>
      </Container>

      {/* Values */}
      <Container className="py-14 max-[920px]:py-16">
        <Reveal className="mb-11 max-w-155">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">What we value</p>
          <h2 className="font-heading text-[38px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            The principles behind every engagement.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-4 gap-6 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1">
          {values.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </Stagger>
      </Container>

      {/* Global presence */}
      <TintedSection>
        <div className="grid grid-cols-2 items-center gap-10 max-[920px]:grid-cols-1">
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Global presence</p>
            <h2 className="mb-4 font-heading text-[36px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
              Two offices, one accountable team.
            </h2>
            <p className="mb-7 text-[16.5px] leading-relaxed text-slate">
              A US base keeps you close to a point of contact in your time zone. A dedicated delivery center gives you the engineering
              depth to move fast, without losing the single line of accountability.
            </p>
            <div className="flex flex-col gap-4.5">
              {offices.map((office, i) => (
                <div key={office.id} className="flex items-start gap-3.5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-blue-050">
                    <MapPin className="size-5.5 text-blue" />
                  </span>
                  <div>
                    <div className="font-heading text-base font-semibold text-charcoal">
                      {office.city} · {office.country}
                    </div>
                    <div className="mt-0.5 text-sm text-silver">
                      {i === 0 ? "Headquarters & client partnership" : "Engineering & delivery center"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4.5" step={90}>
            {presenceStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl p-7 ${
                  stat.style === "dark"
                    ? "bg-charcoal text-white"
                    : stat.style === "blue"
                      ? "bg-blue text-white"
                      : "border border-mist bg-white text-charcoal"
                }`}
              >
                <div className="font-heading text-[38px] leading-none font-bold tracking-tight">{stat.value}</div>
                <div className={`mt-2 text-[13.5px] ${stat.style === "dark" ? "text-[#aeb6c0]" : stat.style === "blue" ? "text-[#cfe0ff]" : "text-slate"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </TintedSection>

      {/* Timeline */}
      <Container maxWidth="900px" className="py-20 max-[920px]:py-16">
        <Reveal className="mb-11">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Our story</p>
          <h2 className="font-heading text-[38px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            From a small studio to a long-term partner.
          </h2>
        </Reveal>
        <Stagger className="flex flex-col" step={120}>
          {timeline.map((item, i) => {
            const isLast = i === timeline.length - 1;
            return (
              <div
                key={item.year}
                className={`relative ml-2 grid grid-cols-[96px_1fr] gap-6 border-l-2 py-0 pb-7.5 pl-7 ${
                  isLast ? "border-transparent" : "border-mist"
                }`}
              >
                <span
                  className={`absolute top-0.5 -left-2.25 size-4 rounded-full border-[3px] border-cloud ${
                    isLast ? "bg-orange" : "bg-blue"
                  }`}
                />
                <div className={`font-heading text-lg font-bold ${isLast ? "text-orange" : "text-blue"}`}>{item.year}</div>
                <div>
                  <div className="mb-1 font-heading text-[17px] font-semibold text-charcoal">{item.title}</div>
                  <p className="text-[15px] leading-relaxed text-slate">{item.description}</p>
                </div>
              </div>
            );
          })}
        </Stagger>
      </Container>

      <FinalCta
        title="Let's build something worth keeping."
        description="Tell us about your business goal. We'll show you how we'd approach it."
        primary={{ label: "Start Your Project", href: "/contact", icon: ArrowRight }}
      />
    </>
  );
}
