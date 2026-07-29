import {
  ArrowRight,
  Compass,
  PenTool,
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  Wrench,
  Building2,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Truck,
  Factory,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TintedSection } from "@/components/ui/TintedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { TechStack } from "@/components/sections/TechStack";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import type { Tint } from "@/components/ui/tints";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "From the first plan to year-five support, every Oxibit service is delivered by the same accountable team: consulting, design, custom software, SaaS, AI, cloud, QA, and maintenance.",
  path: "/services",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

const phases = [
  {
    number: "01",
    title: "Plan & Design",
    subtitle: "Understand the goal, then shape the right solution.",
    items: [
      {
        icon: Compass,
        tint: "blue" as Tint,
        title: "IT Consulting",
        description: "An honest assessment and a practical roadmap for the technology you already own.",
      },
      {
        icon: PenTool,
        tint: "cyan" as Tint,
        title: "UI/UX Design",
        description: "Interfaces that are clear on day one and stay clear as features grow.",
      },
    ],
  },
  {
    number: "02",
    title: "Build",
    subtitle: "Engineer the product around how you actually work.",
    items: [
      {
        icon: Code2,
        tint: "orange" as Tint,
        title: "Custom Software",
        description: "Software built to your exact workflow. It removes friction and scales as you grow.",
      },
      {
        icon: Smartphone,
        tint: "green" as Tint,
        title: "Web & Mobile Apps",
        description: "Fast, native-quality web and mobile apps that feel the same on every device.",
      },
      {
        icon: Layers,
        tint: "blue" as Tint,
        title: "SaaS Platforms",
        description: "A multi-tenant SaaS with the hard parts handled, ready to onboard customers.",
      },
      {
        icon: Sparkles,
        tint: "cyan" as Tint,
        title: "AI Solutions",
        description: "AI pointed at one real, measurable task that saves real hours, not a demo.",
      },
    ],
  },
  {
    number: "03",
    title: "Run & Scale",
    subtitle: "Ship it safely and keep it running well.",
    items: [
      {
        icon: Wrench,
        tint: "blue" as Tint,
        title: "Maintenance & Support",
        description: "A team that stays on to monitor, patch, and improve, for years, not weeks.",
      },
    ],
  },
];

const timeline = [
  { title: "Discover", description: "We learn your goal, constraints, and how success is measured." },
  { title: "Plan & design", description: "A scoped plan, timeline, and price, plus the design and architecture." },
  { title: "Build & test", description: "Engineering in short cycles, tested before anyone else sees it." },
  { title: "Launch & support", description: "A smooth release, then ongoing maintenance for the long run." },
];

const industries = [
  { icon: Building2, label: "Enterprise" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Manufacturing" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />

      <PageHero
        eyebrow="Services"
        title="One partner for the full life of your software."
        description="From the first plan to year-five support, every service below is delivered by the same accountable team, so nothing falls through the gaps between vendors."
      />

      {/* Services detail grid */}
      <Container className="flex flex-col gap-12.5 pt-12 pb-19 max-[920px]:py-16">
        {phases.map((phase) => (
          <div key={phase.number} className="grid grid-cols-[240px_1fr] items-start gap-11 max-[920px]:grid-cols-1 max-[920px]:gap-5">
            <Reveal className="flex flex-col gap-2.5">
              <span className="bg-[linear-gradient(125deg,#0066FF,#19C0E3)] bg-clip-text font-heading text-[30px] font-bold tracking-tight text-transparent">
                {phase.number}
              </span>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-charcoal">{phase.title}</h2>
              <span className="text-[15px] text-silver">{phase.subtitle}</span>
            </Reveal>
            <Stagger className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1" step={70}>
              {phase.items.map((item) => (
                <FeatureCard key={item.title} {...item} badgeSize={44} />
              ))}
            </Stagger>
          </div>
        ))}
      </Container>

      {/* How each engagement runs */}
      <TintedSection>
        <div className="grid grid-cols-[0.82fr_1.18fr] items-start gap-15 max-[920px]:grid-cols-1 max-[920px]:gap-9">
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">How each engagement runs</p>
            <h2 className="mb-4 font-heading text-4xl leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
              Every service follows the same clear path.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-slate">
              From the first call to long-term support, the steps don&apos;t change, so you always know what comes next and who&apos;s
              accountable for it.
            </p>
          </Reveal>
          <Stagger className="flex flex-col" itemClassName="flex gap-5" step={140}>
            {timeline.map((step, i) => {
              const isLast = i === timeline.length - 1;
              return (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex size-10.5 shrink-0 items-center justify-center rounded-full font-heading text-[15px] font-bold text-white ${
                        isLast ? "bg-charcoal" : "bg-[linear-gradient(125deg,#0066FF,#19C0E3)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {!isLast ? <span className="my-1.5 w-0.5 flex-1 bg-[#D6E2F5]" /> : null}
                  </div>
                  <div className={isLast ? "pt-1.5" : "pt-1.5 pb-6.5"}>
                    <h3 className="mb-1 font-heading text-[17px] font-semibold text-charcoal">{step.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-[#5b6675]">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </Stagger>
        </div>
      </TintedSection>

      {/* Technology */}
      <Container className="py-20 max-[920px]:py-16">
        <Reveal className="mb-10 max-w-160">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Technology</p>
          <h2 className="mb-3 font-heading text-4xl leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            Proven tools, chosen to fit the job.
          </h2>
          <p className="text-[16.5px] leading-relaxed text-slate">
            We pick technology for what it does for your product and your team, never for novelty.
          </p>
        </Reveal>
        <TechStack />
      </Container>

      {/* Industries */}
      <TintedSection className="text-center">
        <Reveal className="mb-8.5">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Industries</p>
          <h2 className="font-heading text-4xl leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            Experience across regulated, high-stakes work.
          </h2>
        </Reveal>
        <Stagger className="flex flex-wrap justify-center gap-3" itemClassName="inline-block" step={60}>
          {industries.map((industry) => (
            <span
              key={industry.label}
              className="inline-flex items-center gap-2.25 rounded-full border border-mist bg-white px-5 py-2.75 font-heading text-[15px] font-semibold text-charcoal shadow-[0_2px_8px_rgba(20,42,71,0.04)] transition-[transform,box-shadow,border-color] duration-200 motion-safe:hover:-translate-y-0.75 hover:border-blue-100 hover:shadow-[0_12px_26px_rgba(14,42,71,0.12)]"
            >
              <industry.icon className="size-4.75 text-blue" />
              {industry.label}
            </span>
          ))}
        </Stagger>
      </TintedSection>

      <FinalCta
        title="Not sure which service you need? Start with a conversation."
        description="Tell us the problem. We'll tell you the shortest honest path to solving it."
        primary={{ label: "Talk to Our Team", href: "/contact", icon: ArrowRight }}
      />
    </>
  );
}
