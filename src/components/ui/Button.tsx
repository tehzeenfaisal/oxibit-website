import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type ButtonVariant = "gradient" | "solid" | "outline" | "white" | "ghost-dark";
export type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  gradient:
    "bg-[linear-gradient(125deg,#0066FF_0%,#19C0E3_120%)] text-white hover:brightness-[1.07]",
  solid: "bg-blue text-white hover:bg-blue-600",
  outline: "border border-blue bg-white text-blue hover:bg-blue-050",
  white: "bg-white text-blue hover:bg-blue-050",
  "ghost-dark": "border border-white/55 bg-transparent text-white hover:bg-white/12",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-10 px-5 text-[15px]",
  lg: "h-[54px] px-6.5 text-base",
};

export function buttonClasses(variant: ButtonVariant = "solid", size: ButtonSize = "md", className = "") {
  return `group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,filter] duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  className?: string;
  children: ReactNode;
}

function ButtonIcon({ icon: Icon }: { icon?: LucideIcon }) {
  if (!Icon) return null;
  return (
    <Icon className="size-[18px] transition-transform duration-200 group-hover:translate-x-1" />
  );
}

interface LinkButtonProps extends SharedProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

export function LinkButton({ href, variant, size, icon, className, children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
      <ButtonIcon icon={icon} />
    </Link>
  );
}

interface ButtonProps extends SharedProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {}

export function Button({ variant, size, icon, className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {children}
      <ButtonIcon icon={icon} />
    </button>
  );
}
