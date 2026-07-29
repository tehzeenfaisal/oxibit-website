import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import type { Tint } from "@/components/ui/tints";

interface FeatureCardProps {
  icon: LucideIcon;
  tint?: Tint;
  title: string;
  description: string;
  href?: string;
  badgeSize?: number;
}

/**
 * Icon + title + description tile. Used for "Why Oxibit", the services
 * grid, values, benefits, and the services-page phase cards — the same
 * shape repeats across every page with only the tint/copy/href changing.
 */
export function FeatureCard({ icon, tint = "blue", title, description, href, badgeSize = 46 }: FeatureCardProps) {
  const content = (
    <>
      <IconBadge icon={icon} tint={tint} size={badgeSize} bordered={Boolean(href)} className="mb-4" />
      <h3 className="mb-1.5 font-heading text-[17px] font-semibold text-charcoal">{title}</h3>
      <p className="text-[14px] leading-relaxed text-slate">{description}</p>
    </>
  );

  const baseClasses =
    "rounded-[18px] border border-mist bg-white p-6 shadow-[0_5px_22px_rgba(20,42,71,0.06)] transition-[transform,box-shadow,border-color] duration-200 motion-safe:hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(14,42,71,0.12)]";

  if (href) {
    return (
      <Link
        href={href}
        className={`group relative block ${baseClasses} hover:border-blue hover:shadow-[0_16px_36px_rgba(0,102,255,0.14)]`}
      >
        {content}
        <span
          aria-hidden="true"
          className="absolute top-5.5 right-5.5 text-base text-[#B9C2CE] transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
