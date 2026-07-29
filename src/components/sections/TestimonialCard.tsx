import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ quote, initials, name, role }: Testimonial) {
  return (
    <Card as="figure" className="flex h-full flex-col p-7">
      <div className="mb-4 flex gap-0.75 text-orange">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mb-5.5 flex-1 text-[16.5px] leading-relaxed font-medium text-charcoal">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-auto flex items-center gap-3.25">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-050 font-heading text-[15px] font-semibold text-blue">
          {initials}
        </span>
        <span>
          <span className="block text-[14.5px] font-semibold text-charcoal">{name}</span>
          <span className="block text-[13px] text-silver">{role}</span>
        </span>
      </figcaption>
    </Card>
  );
}
