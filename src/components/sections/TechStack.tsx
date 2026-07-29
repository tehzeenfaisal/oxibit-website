import type { ComponentType, SVGProps } from "react";
import { Stagger } from "@/components/ui/Stagger";
import { techStack } from "@/data/tech-stack";
import type { TechIconKey } from "@/data/tech-stack";

function ReactMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" width="15" height="15" {...props}>
      <circle r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth={1} fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextjsMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <circle cx="12" cy="12" r="12" fill="#000" />
      <path d="M9.3 7.3v9.4M14.7 7.3v6.4M9.3 7.9l6.6 8.9" stroke="#fff" strokeWidth={1.3} fill="none" strokeLinecap="round" />
    </svg>
  );
}

function TypeScriptMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <text x="12" y="17" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight={700} fontSize="10" fill="#fff">
        TS
      </text>
    </svg>
  );
}

function TailwindMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path
        d="M12 4.8c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.685.17 1.175.67 1.717 1.22.883.897 1.906 1.93 4.148 1.93 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.684-.17-1.174-.67-1.716-1.22C15.265 5.817 14.242 4.8 12 4.8zM7.5 10.2c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.684.17 1.174.67 1.716 1.22.883.897 1.906 1.93 4.148 1.93 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.684-.17-1.174-.67-1.716-1.22C10.765 11.217 9.742 10.2 7.5 10.2z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function NodejsMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path d="M12 1.85 21 7v10L12 22.15 3 17V7z" fill="#539E43" />
    </svg>
  );
}

function PythonMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path
        d="M11.9 2.2c-2.5 0-4.3 1-4.3 3.3v2.1h4.4v.6H5.6c-2.3 0-3.4 1.6-3.4 4.3 0 2.7 1.4 4.2 3.7 4.2h1.6v-2.5c0-2.1 1.6-3.7 3.7-3.7h4.3c1.9 0 3.2-1.4 3.2-3.2V5.5c0-1.8-1.5-3-3.3-3.3-1.2-.2-2.4 0-3.5 0zM9.5 4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
        fill="#3776AB"
      />
      <path
        d="M12.1 21.8c2.5 0 4.3-1 4.3-3.3v-2.1h-4.4v-.6h6.4c2.3 0 3.4-1.6 3.4-4.3 0-2.7-1.4-4.2-3.7-4.2h-1.6v2.5c0 2.1-1.6 3.7-3.7 3.7H8.2c-1.9 0-3.2 1.4-3.2 3.2v2.7c0 1.8 1.5 3 3.3 3.3 1.2.2 2.4 0 3.5 0zM14.5 20c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
        fill="#FFD43B"
      />
    </svg>
  );
}

function DotnetMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <circle cx="12" cy="12" r="12" fill="#512BD4" />
      <text x="12" y="15.5" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight={700} fontSize="7" fill="#fff">
        .NET
      </text>
    </svg>
  );
}

function PostgresqlMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path
        d="M4.6 10.4C4.6 6.8 7.9 4 12 4s7.4 2.8 7.4 6.4c0 1.3-.4 2.2-.4 3.5 0 .9.4 1.4.4 2.3 0 1.4-1 2.5-2.3 2.5-1 0-1.6-.5-1.9-1.4-.3.9-1.1 1.4-2 1.4-.9 0-1.6-.5-1.9-1.3-.3.8-1 1.3-1.9 1.3-1.3 0-2.3-1-2.3-2.3 0-1 .4-1.5.4-2.4 0-1.1-.9-1.9-2-1.9-.7-.9-1.4-1.8-1.4-2.5z"
        fill="#336791"
      />
      <circle cx="8.4" cy="8.6" r="0.85" fill="#fff" />
    </svg>
  );
}

function FlutterMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path d="M13.9 2 4.5 11.4l2.9 2.9L19.6 2z" fill="#47C5FB" />
      <path d="M13.9 11.9 8.9 16.9l2.9 3 5.8-5.9z" fill="#47C5FB" />
      <path d="M8.9 16.9l2.9 2.9 2.9-2.9z" fill="#00569E" />
    </svg>
  );
}

function SwiftMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <rect width="24" height="24" rx="5" fill="#F05138" />
      <path
        d="M16.8 16.6c-2.2 1.3-5.2.7-7.4-1 1.2.4 2.5.3 3.6-.2-1.5-.6-2.9-1.7-4-3 .8.5 1.6.9 2.5 1C10.1 12.3 9 10.6 8.4 8.7c1 1 2.2 1.8 3.5 2.4C10.5 9.5 9.5 7.6 10 6c1.9 2.4 4.3 3.9 6 4.7.2-1.1 0-2.2-.6-3 1.9 1.7 2.6 4.6 1.7 6.6.1.1.7 1.1.4 2.3 0 0-.4-1-.7-1z"
        fill="#fff"
      />
    </svg>
  );
}

function KotlinMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <defs>
        <linearGradient id="tech-kotlin-gradient" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#E44857" />
          <stop offset="0.5" stopColor="#C711E1" />
          <stop offset="1" stopColor="#7F52FF" />
        </linearGradient>
      </defs>
      <path d="M24 24H0V0h24L12 12z" fill="url(#tech-kotlin-gradient)" />
    </svg>
  );
}

function AwsMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 20" width="21" height="13" {...props}>
      <text x="16" y="10.5" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight={700} fontSize="10" fill="#232F3E">
        aws
      </text>
      <path d="M7 15c5.5 2.6 12 2.6 17.5 0" stroke="#FF9900" strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <path d="M22.5 13l2.6 1.8-2.9 1.1z" fill="#FF9900" />
    </svg>
  );
}

function AzureMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path d="M9.9 4 4 19.4h3.9l1-2.9h5.2l-2.5-2.1h-1.9l2-5.7 4.5 12.6H23L13.3 4z" fill="#0089D6" />
    </svg>
  );
}

function DockerMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <g fill="#2496ED">
        <rect x="4" y="11" width="2.9" height="2.9" rx="0.3" />
        <rect x="7.5" y="11" width="2.9" height="2.9" rx="0.3" />
        <rect x="11" y="11" width="2.9" height="2.9" rx="0.3" />
        <rect x="7.5" y="7.5" width="2.9" height="2.9" rx="0.3" />
        <rect x="11" y="7.5" width="2.9" height="2.9" rx="0.3" />
        <path d="M21 12c-.4-.3-1.4-.4-2.1-.2-.1-.7-.5-1.3-1-1.8l-.4-.3-.3.4c-.4.6-.5 1.4-.2 2 .1.3.3.5.5.7-.3.2-.9.4-1.6.4H2.7c-.3 1.6.2 3.6 1.5 4.9 1.4 1.3 3.3 1.9 5.7 1.9 5.4 0 9.4-2.5 11.3-7 .7 0 2.2 0 3-1.5 0-.1.3-.5-.9-1.4z" />
      </g>
    </svg>
  );
}

function KubernetesMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" {...props}>
      <path d="M12 2.2 20.3 6l2 9-5.7 7H7.4l-5.7-7 2-9z" fill="#326CE5" />
      <g fill="none" stroke="#fff" strokeWidth={1}>
        <circle cx="12" cy="12" r="3.3" />
        <path d="M12 2.8v5.9M12 15.3v5.9M20.5 7 15 10.4M9 13.6 3.5 17M20.5 17 15 13.6M9 10.4 3.5 7" />
      </g>
    </svg>
  );
}

const iconMap: Record<TechIconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  react: ReactMark,
  nextjs: NextjsMark,
  typescript: TypeScriptMark,
  tailwind: TailwindMark,
  nodejs: NodejsMark,
  python: PythonMark,
  dotnet: DotnetMark,
  postgresql: PostgresqlMark,
  flutter: FlutterMark,
  swift: SwiftMark,
  kotlin: KotlinMark,
  reactnative: ReactMark,
  aws: AwsMark,
  azure: AzureMark,
  docker: DockerMark,
  kubernetes: KubernetesMark,
};

export function TechStack() {
  return (
    <Stagger className="grid grid-cols-4 gap-8 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1" step={70}>
      {techStack.map((column) => (
        <div key={column.category}>
          <div className="mb-3.75 border-b border-[#E4ECFF] pb-2.75 text-xs font-bold tracking-wider text-silver uppercase">
            {column.category}
          </div>
          <div className="flex flex-wrap gap-2">
            {column.items.map((item) => {
              const Mark = iconMap[item.icon];
              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-3.5 py-1.75 text-[13.5px] font-semibold text-slate"
                >
                  <Mark className="shrink-0" />
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </Stagger>
  );
}
