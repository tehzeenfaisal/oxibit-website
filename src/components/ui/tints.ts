export type Tint = "blue" | "cyan" | "orange" | "green";

interface TintClasses {
  bg: string;
  border: string;
  icon: string;
}

export const tintClasses: Record<Tint, TintClasses> = {
  blue: { bg: "bg-blue-050", border: "border-blue-100", icon: "text-blue" },
  cyan: { bg: "bg-[#E2F6FB]", border: "border-[#C9ECF4]", icon: "text-[#159AB8]" },
  orange: { bg: "bg-[#FFEFE6]", border: "border-[#FFD9C6]", icon: "text-orange" },
  green: { bg: "bg-success-fill", border: "border-[#CCEBD8]", icon: "text-success" },
};
