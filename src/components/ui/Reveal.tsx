"use client";

import type { ReactNode } from "react";
import { useInView } from "./useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "span";
  delay?: number;
}

export function Reveal({ children, className = "", as = "div", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const classes = `motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  } ${className}`;
  const style = inView && delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (as === "span") {
    return (
      <span ref={ref as React.Ref<HTMLSpanElement>} className={classes} style={style}>
        {children}
      </span>
    );
  }

  return (
    <div ref={ref as React.Ref<HTMLDivElement>} className={classes} style={style}>
      {children}
    </div>
  );
}
