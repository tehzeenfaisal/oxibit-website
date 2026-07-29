import { Children, isValidElement, type ReactNode } from "react";
import { Reveal } from "./Reveal";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  step?: number;
}

/** Wraps a list of items (e.g. a grid's cards) and reveals them with an incremental delay. */
export function Stagger({ children, className, itemClassName, step = 90 }: StaggerProps) {
  const items = Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={isValidElement(child) && child.key !== null ? child.key : i} delay={i * step} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
