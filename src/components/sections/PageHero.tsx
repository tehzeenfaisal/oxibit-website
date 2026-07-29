import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; href: string; icon?: LucideIcon };
  className?: string;
}

/** The centered eyebrow + h1 + paragraph pattern shared by About, Services, Careers, and Contact. */
export function PageHero({ eyebrow, title, description, cta, className = "pt-22 pb-14" }: PageHeroProps) {
  return (
    <Container maxWidth="1000px" className={`text-center ${className}`}>
      <Reveal as="span" className="inline-flex items-center rounded-full bg-blue-050 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue uppercase">
        {eyebrow}
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-5.5 font-heading text-[52px] leading-[1.08] font-semibold tracking-tight text-charcoal max-[920px]:text-[42px] max-[600px]:text-[34px]">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mx-auto mt-5.5 max-w-170 text-[19px] leading-relaxed text-slate">{description}</p>
      </Reveal>
      {cta ? (
        <Reveal delay={240} className="mt-7.5">
          <LinkButton href={cta.href} variant="gradient" size="lg" icon={cta.icon}>
            {cta.label}
          </LinkButton>
        </Reveal>
      ) : null}
    </Container>
  );
}
