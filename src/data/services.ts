import {
  Sparkles,
  Code2,
  Layers,
  Monitor,
  Smartphone,
  Cloud,
  PenTool,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Tint } from "@/components/ui/tints";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  tint: Tint;
  href: string;
}

export const services: Service[] = [
  {
    title: "AI Solutions",
    description: "Put your data to work with AI that solves a real, named problem, not a demo.",
    icon: Sparkles,
    tint: "blue",
    href: "/services",
  },
  {
    title: "Custom Software",
    description: "A product shaped to your operations, built to scale as you grow.",
    icon: Code2,
    tint: "cyan",
    href: "/services",
  },
  {
    title: "SaaS Platforms",
    description: "Launch a multi-tenant product with billing, roles, and reliability built in.",
    icon: Layers,
    tint: "orange",
    href: "/services",
  },
  {
    title: "Web Apps",
    description: "Fast, accessible web applications your team and customers enjoy using.",
    icon: Monitor,
    tint: "green",
    href: "/services",
  },
  {
    title: "Mobile Apps",
    description: "One consistent experience across iOS and Android, from a single codebase.",
    icon: Smartphone,
    tint: "blue",
    href: "/services",
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure that scales with demand and keeps your costs predictable.",
    icon: Cloud,
    tint: "cyan",
    href: "/services",
  },
  {
    title: "UI/UX Design",
    description: "Interfaces that are clear on day one and stay clear as the product grows.",
    icon: PenTool,
    tint: "orange",
    href: "/services",
  },
  {
    title: "Quality Assurance",
    description: "Issues surface in QA, not in front of your customers.",
    icon: ShieldCheck,
    tint: "green",
    href: "/services",
  },
  {
    title: "Maintenance & Support",
    description: "Launch day isn't the finish line. We keep everything running and improving.",
    icon: Wrench,
    tint: "blue",
    href: "/services",
  },
];
