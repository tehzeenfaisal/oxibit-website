import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Users,
  MessageCircle,
  TrendingUp,
  Scale,
  Laptop,
  HeartPulse,
  GraduationCap,
  Plane,
  Award,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TintedSection } from "@/components/ui/TintedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/structured-data";
import { jobOpenings } from "@/data/jobs";

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
]);
const jobPostings = jobPostingJsonLd(jobOpenings, new Date().toISOString());

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Oxibit hires people who care about the result, not just the release. Explore open roles across engineering, design, QA, infrastructure, and client success.",
  path: "/careers",
});

const cultureHighlights = [
  { icon: Users, title: "Real ownership", description: "Own features end to end, not just tickets." },
  { icon: MessageCircle, title: "Straight talk", description: "Honest feedback, given with respect." },
  { icon: TrendingUp, title: "Room to grow", description: "Mentorship and a clear path forward." },
  { icon: Scale, title: "Sustainable pace", description: "Planning that respects your time." },
];

const benefits = [
  {
    icon: Laptop,
    tint: "blue" as const,
    title: "Flexible & remote-friendly",
    description: "Work where you do your best thinking, with hours that overlap your team.",
  },
  {
    icon: HeartPulse,
    tint: "cyan" as const,
    title: "Health & wellbeing",
    description: "Medical coverage and paid time off you're genuinely encouraged to use.",
  },
  {
    icon: GraduationCap,
    tint: "orange" as const,
    title: "Learning budget",
    description: "Courses, conferences, and time set aside to keep your skills sharp.",
  },
  {
    icon: Plane,
    tint: "green" as const,
    title: "Team time together",
    description: "Regular meetups so the people you work with aren't just names on a screen.",
  },
  {
    icon: Award,
    tint: "cyan" as const,
    title: "Competitive pay",
    description: "Fair compensation, reviewed regularly, with clear criteria for growth.",
  },
  {
    icon: Briefcase,
    tint: "orange" as const,
    title: "Meaningful work",
    description: "Build products that real businesses depend on, then keep improving them.",
  },
];

const hiringSteps = [
  { title: "Apply", description: "Send your CV and a short note. We read every one." },
  { title: "Intro call", description: "A relaxed chat about your experience and what you're looking for." },
  { title: "Practical session", description: "Work through a realistic problem with the team, no trick questions." },
  { title: "Offer", description: "A clear offer and a warm welcome to the team." },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {jobPostings.map((posting, i) => (
        <JsonLd key={jobOpenings[i].title} data={posting} />
      ))}

      <PageHero
        eyebrow="Careers"
        title="Build software that people rely on for years."
        description="We hire people who care about the result, not just the release. If you like owning your work end to end and staying close to the customer, you'll fit right in."
        cta={{ label: "See Open Roles", href: "#openings", icon: ArrowDown }}
      />

      {/* Culture */}
      <Container className="py-14 max-[920px]:py-16">
        <div className="grid grid-cols-2 items-center gap-10 max-[920px]:grid-cols-1">
          <Reveal>
            <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Our culture</p>
            <h2 className="mb-4 font-heading text-[36px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
              A team that stays, for clients and for each other.
            </h2>
            <p className="mb-4 text-[16.5px] leading-relaxed text-slate">
              Because we support what we build for years, we work in a way we can sustain: clear scope, honest timelines, and real
              ownership. No heroics to cover for bad planning.
            </p>
            <p className="text-[16.5px] leading-relaxed text-slate">
              You&apos;ll work across the US and Lahore, learn from people who&apos;ve shipped a lot, and see your work used long after
              launch.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4" step={90}>
            {cultureHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-cloud p-6">
                <item.icon className="size-6 text-blue" />
                <div className="mt-3.5 font-heading text-[15px] font-semibold text-charcoal">{item.title}</div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-silver">{item.description}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </Container>

      {/* Benefits */}
      <TintedSection>
        <Reveal className="mb-11 max-w-155">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Benefits</p>
          <h2 className="font-heading text-[36px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            What we offer the people who build with us.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-3 gap-5 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1" step={70}>
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </Stagger>
      </TintedSection>

      {/* Hiring process */}
      <Container className="py-20 max-[920px]:py-16">
        <Reveal className="mb-11.5 max-w-155">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Hiring process</p>
          <h2 className="font-heading text-[36px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            Four steps. Clear and respectful of your time.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-4 gap-5 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1" step={90}>
          {hiringSteps.map((step, i) => {
            const isLast = i === hiringSteps.length - 1;
            return (
              <div key={step.title} className="rounded-2xl border border-mist p-6.5">
                <span
                  className={`mb-4 inline-flex size-11 items-center justify-center rounded-full font-heading text-base font-bold ${
                    isLast ? "bg-charcoal text-white" : "bg-blue-050 text-blue"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mb-1.75 font-heading text-base font-semibold text-charcoal">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{step.description}</p>
              </div>
            );
          })}
        </Stagger>
      </Container>

      {/* Open positions */}
      <TintedSection id="openings" maxWidth="1000px">
        <Reveal className="mb-9">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Open positions</p>
          <h2 className="font-heading text-[36px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            Roles we&apos;re hiring for now.
          </h2>
        </Reveal>
        <Stagger className="flex flex-col gap-3.5" step={70}>
          {jobOpenings.map((job) => (
            <Link
              key={job.title}
              href="/contact"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-mist bg-white p-6.5 transition-[border-color,transform] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-blue max-[920px]:flex-col max-[920px]:items-start max-[920px]:gap-3.5"
            >
              <div>
                <div className="mb-1.5 font-heading text-lg font-semibold text-charcoal">{job.title}</div>
                <div className="flex flex-wrap gap-4 text-[13.5px] text-silver">
                  <span>{job.department}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-blue">
                Apply
                <ArrowRight className="size-4.25 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Stagger>
        <Reveal className="mt-7 text-[15px] leading-relaxed text-silver">
          Don&apos;t see your role? We&apos;re always glad to meet good people.{" "}
          <Link href="/contact" className="font-semibold text-blue">
            Send us an introduction →
          </Link>
        </Reveal>
      </TintedSection>

      <FinalCta
        title="Like the way we work? Come build with us."
        description="Apply to an open role, or send us an introduction. We read every message."
        primary={{ label: "Apply Now", href: "/contact", icon: ArrowRight }}
      />
    </>
  );
}
