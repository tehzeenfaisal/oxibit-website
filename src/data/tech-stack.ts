export type TechIconKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "python"
  | "dotnet"
  | "postgresql"
  | "flutter"
  | "swift"
  | "kotlin"
  | "reactnative"
  | "aws"
  | "azure"
  | "docker"
  | "kubernetes";

export interface TechCategory {
  category: string;
  items: { name: string; icon: TechIconKey }[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: ".NET", icon: "dotnet" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Swift", icon: "swift" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "React Native", icon: "reactnative" },
    ],
  },
  {
    category: "Cloud & Data",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
    ],
  },
];
