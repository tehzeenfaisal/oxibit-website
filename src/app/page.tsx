import Image from "next/image";
import { ArrowRight, ShieldCheck, Compass, Code2, MessagesSquare, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TintedSection } from "@/components/ui/TintedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { CountUp } from "@/components/ui/CountUp";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LinkButton } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { faqPageJsonLd } from "@/lib/structured-data";
import { clientLogos } from "@/data/clients";
import { companyStats } from "@/data/company-stats";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { homeFaq } from "@/data/faq";

export const metadata = pageMetadata({
  title: "Custom Software Built Around Your Business",
  description:
    "Oxibit Technologies plans, builds, tests, and maintains custom software, using AI where it earns its place, then stays on to support it long after launch.",
  path: "/",
});

const whyOxibit = [
  {
    icon: Compass,
    tint: "blue" as const,
    title: "We plan before we build",
    description: "We learn how your business actually works before a line of code is written, so the software fits your operations.",
  },
  {
    icon: Code2,
    tint: "cyan" as const,
    title: "Custom, not off the shelf",
    description: "You get a product shaped around your goals, not your business bent to fit someone else's template.",
  },
  {
    icon: MessagesSquare,
    tint: "orange" as const,
    title: "Transparent communication",
    description: "You always know what we're building, why, and what it costs. Clear updates, honest timelines, no surprises.",
  },
  {
    icon: LifeBuoy,
    tint: "green" as const,
    title: "Long-term support",
    description: "We stay after launch to maintain, improve, and keep your software running well for years.",
  },
];

const trustStats = [
  { value: companyStats.yearsBuilding, suffix: "+", label: "Years building software" },
  { value: companyStats.projectsDelivered, suffix: "+", label: "Projects delivered" },
  { value: companyStats.countriesServed, suffix: "", label: "Countries served" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaq)} />

      {/* Hero */}
      <Container className="py-24 pb-23 max-[920px]:py-16">
        <div className="grid grid-cols-[1.05fr_1fr] items-center gap-16 max-[920px]:grid-cols-1 max-[920px]:gap-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-050 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue uppercase">
              Enterprise software partner
            </span>
            <h1 className="mt-5.5 font-heading text-[58px] leading-[1.06] font-semibold tracking-tight text-charcoal max-[920px]:text-[42px] max-[600px]:text-[34px]">
              Software built around your business, and supported long after launch.
            </h1>
            <p className="mt-5.5 max-w-135 text-[19px] leading-relaxed text-slate">
              We learn how your business works, build custom software around your goals, using AI where it earns its place, test it
              rigorously, and stay on to maintain it. One accountable partner across the whole lifecycle.
            </p>
            <div className="mt-8.5 flex gap-3.5 max-[600px]:flex-col max-[600px]:items-stretch">
              <LinkButton href="/contact" variant="gradient" size="lg" icon={ArrowRight}>
                Start Your Project
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg">
                Talk to Our Team
              </LinkButton>
            </div>
            <div className="mt-6.5 flex items-center gap-2.5 text-sm text-silver">
              <ShieldCheck className="size-4.25 text-success" />
              <span>NDAs, security reviews, and full IP handover. Standard on every engagement.</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>

      {/* Trust */}
      <TintedSection>
        <p className="mb-6.5 text-center text-xs font-semibold tracking-wider text-silver uppercase">
          Teams we&apos;ve built and maintained software for
        </p>
        <Stagger className="mb-11.5 grid grid-cols-5 gap-3.5 max-[920px]:grid-cols-3 max-[600px]:grid-cols-2" step={40}>
          {clientLogos.map((logo) => (
            <div
              key={logo.src}
              className="relative flex h-22 items-center justify-center rounded-xl border border-mist bg-white px-3.5 py-2 shadow-[0_2px_8px_rgba(20,42,71,0.04)]"
            >
              <Image src={logo.src} alt={logo.alt} fill sizes="200px" className="object-contain p-3" />
            </div>
          ))}
        </Stagger>
        <div className="grid grid-cols-3 gap-6 max-[600px]:grid-cols-2 max-[600px]:gap-7">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-heading text-[44px] leading-none font-bold tracking-tight text-charcoal"
              />
              <div className="mt-2.25 text-sm text-slate">{stat.label}</div>
            </div>
          ))}
        </div>
      </TintedSection>

      {/* Why Oxibit */}
      <Container className="py-24 max-[920px]:py-16">
        <Reveal className="max-w-215">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Why Oxibit</p>
          <h2 className="font-heading text-[40px] leading-[1.12] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            A partner that stays for the whole build, and the years after it.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-4 gap-6 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1">
          {whyOxibit.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Stagger>
      </Container>

      {/* Services */}
      <TintedSection id="services">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6" as="div">
          <div className="max-w-155">
            <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">What we do</p>
            <h2 className="font-heading text-[40px] leading-[1.12] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
              Everything it takes to plan, build, and run your software.
            </h2>
          </div>
          <LinkButton href="/services" variant="solid" size="md" icon={ArrowRight} className="h-12! shrink-0 px-5.5!">
            See all services
          </LinkButton>
        </Reveal>
        <Stagger className="grid grid-cols-3 gap-4 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1" step={60}>
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} badgeSize={44} />
          ))}
        </Stagger>
      </TintedSection>

      {/* Process */}
      <Container className="py-24 max-[920px]:py-16" id="process">
        <Reveal className="mb-13.5 max-w-155">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">How we work</p>
          <h2 className="mb-3.5 font-heading text-[40px] leading-[1.12] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            A clear path from idea to a product that lasts.
          </h2>
          <p className="text-[17px] leading-relaxed text-slate">
            Seven steps, one team. You&apos;ll know where your project stands at every stage.
          </p>
        </Reveal>
        <ProcessSteps />
      </Container>

      {/* Testimonials */}
      <TintedSection>
        <Reveal className="mb-12 max-w-155">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">In their words</p>
          <h2 className="font-heading text-[40px] leading-[1.12] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            Trusted by the people who answer for the result.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-3 gap-5.5 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1" step={70}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Stagger>
      </TintedSection>

      {/* FAQ */}
      <Container maxWidth="880px" className="py-24 max-[920px]:py-16">
        <Reveal className="mb-11.5 text-center" as="div">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Procurement &amp; engagement</p>
          <h2 className="font-heading text-[40px] leading-[1.12] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            The questions decision-makers ask first.
          </h2>
        </Reveal>
        <Reveal>
          <FaqAccordion items={homeFaq} />
        </Reveal>
      </Container>

      <FinalCta
        title="Ready to build software that keeps delivering long after launch?"
        description="Start with a discovery call. We'll map your goal to a plan, a timeline, and a price. No obligation."
        primary={{ label: "Start Your Project", href: "/contact", icon: ArrowRight }}
        secondary={{ label: "Schedule Discovery Call", href: "/contact" }}
      />
    </>
  );
}
