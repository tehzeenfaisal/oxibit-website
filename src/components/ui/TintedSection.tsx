import type { ReactNode } from "react";
import { Container } from "./Container";

interface TintedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  maxWidth?: string;
}

/** The recurring frost-blue band with a soft wave dividing it from the white sections above/below it. */
export function TintedSection({ children, id, className = "", maxWidth }: TintedSectionProps) {
  return (
    <section id={id} className="relative -my-[50px] overflow-hidden bg-[#F1F5FF]">
      <svg
        className="absolute top-0 left-0 block h-auto w-full"
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 L1200,0 L1200,10 C700,10 500,80 0,80 Z" fill="#fff" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 block h-auto w-full"
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,90 L1200,90 L1200,80 C700,80 500,10 0,10 Z" fill="#fff" />
      </svg>
      <Container maxWidth={maxWidth} className={`py-[146px] max-[920px]:py-16 ${className}`}>
        {children}
      </Container>
    </section>
  );
}
