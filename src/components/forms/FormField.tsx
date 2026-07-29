import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const fieldClasses =
  "h-11.5 rounded-xl border border-mist bg-white px-3.5 text-[14.5px] text-charcoal outline-none transition-colors placeholder:text-silver focus:border-blue";

export function FormField({ label, id, name, ...rest }: FormFieldProps) {
  const fieldId = id ?? name;
  return (
    <label htmlFor={fieldId} className="flex flex-col gap-1.5">
      <span className="text-[13.5px] font-medium text-charcoal">{label}</span>
      <input id={fieldId} name={name} className={fieldClasses} {...rest} />
    </label>
  );
}

export { fieldClasses };
