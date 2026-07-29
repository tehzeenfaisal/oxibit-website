"use client";

import { useInView } from "@/components/ui/useInView";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: 1, title: "Discover", description: "We learn your business and goals." },
  { number: 2, title: "Strategy", description: "Plan, scope, timeline, and price." },
  { number: 3, title: "Design", description: "Interfaces and architecture." },
  { number: 4, title: "Build", description: "Engineering in short, visible cycles." },
  { number: 5, title: "QA", description: "Tested before anyone else sees it." },
  { number: 6, title: "Launch", description: "A smooth, supported release." },
  { number: 7, title: "Support", description: "We stay on for the long run." },
];

/**
 * The 7-step horizontal process stepper. Reveals sequentially on scroll
 * (a simplified, reduced-motion-friendly stand-in for the original's
 * pixel-tracked traveling marker).
 */
export function ProcessSteps() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      <div className="absolute top-6.75 right-[7%] left-[7%] h-0.5 bg-mist max-[920px]:hidden" />
      <div
        className="absolute top-6.75 right-[7%] left-[7%] h-0.5 origin-left bg-blue transition-transform duration-700 ease-out max-[920px]:hidden"
        style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
      />
      <ol className="relative grid grid-cols-7 gap-4.5 max-[920px]:grid-cols-1">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          return (
            <li key={step.number} className="text-center">
              <span
                className={`mb-4 inline-flex size-13.5 items-center justify-center rounded-full font-heading text-lg font-bold transition-colors duration-300 ${
                  isLast
                    ? "border-2 border-charcoal bg-charcoal text-white"
                    : inView
                      ? "border-2 border-blue bg-white text-blue"
                      : "border-2 border-mist bg-white text-slate"
                }`}
                style={{ transitionDelay: inView ? `${i * 90}ms` : undefined }}
              >
                {step.number}
              </span>
              <div className="mb-1.25 font-heading text-[15px] font-semibold text-charcoal">{step.title}</div>
              <p className="text-[12.5px] leading-relaxed text-silver">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
