import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  id?: string;
}

export function Container({ children, className = "", maxWidth = "1200px", id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`relative mx-auto w-full px-10 max-[920px]:px-6 max-[600px]:px-4.5 ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
}
