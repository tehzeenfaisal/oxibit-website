import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

interface CtaLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface FinalCtaProps {
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

const orbitSizes = [1180, 860, 560];
const orbitOpacities = [0.06, 0.08, 0.1];

/** The dark "orbits" CTA band shared by Home, About, Services, and Careers. */
export function FinalCta({ title, description, primary, secondary }: FinalCtaProps) {
  return (
    <section className="relative mt-12.5 overflow-hidden bg-charcoal">
      <div aria-hidden="true" className="pointer-events-none absolute animate-ox-drift" style={{ left: "76%", top: "104%" }}>
        {orbitSizes.map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              left: 0,
              top: 0,
              width: size,
              height: size,
              transform: "translate(-50%,-50%)",
              background: `rgba(120,170,255,${orbitOpacities[i]})`,
            }}
          />
        ))}
      </div>
      <Reveal>
        <Container maxWidth="760px" className="relative py-26 pb-28 text-center max-[920px]:py-16">
          <h2 className="mb-4 font-heading text-[40px] leading-[1.14] font-semibold tracking-tight text-white max-[600px]:text-[26px]">
            {title}
          </h2>
          <p className="mx-auto max-w-150 text-lg leading-relaxed text-[#cfe0ff]">{description}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.25">
            <LinkButton href={primary.href} variant="white" size="lg" icon={primary.icon}>
              {primary.label}
            </LinkButton>
            {secondary ? (
              <LinkButton href={secondary.href} variant="ghost-dark" size="lg" icon={secondary.icon}>
                {secondary.label}
              </LinkButton>
            ) : null}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
