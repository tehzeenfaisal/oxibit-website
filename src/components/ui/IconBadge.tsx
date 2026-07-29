import type { LucideIcon } from "lucide-react";
import { tintClasses, type Tint } from "./tints";

interface IconBadgeProps {
  icon: LucideIcon;
  tint?: Tint;
  size?: number;
  className?: string;
  bordered?: boolean;
}

export function IconBadge({ icon: Icon, tint = "blue", size = 46, className = "", bordered = false }: IconBadgeProps) {
  const tc = tintClasses[tint];
  const iconSize = Math.round(size * 0.5);
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl ${tc.bg} ${
        bordered ? `border ${tc.border}` : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon className={tc.icon} style={{ width: iconSize, height: iconSize }} />
    </span>
  );
}
