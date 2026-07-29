import type { ElementType, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag className={`rounded-[18px] border border-mist bg-white shadow-[0_5px_22px_rgba(20,42,71,0.06)] ${className}`}>
      {children}
    </Tag>
  );
}
