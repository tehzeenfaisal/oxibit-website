import type { SelectHTMLAttributes } from "react";
import { fieldClasses } from "./FormField";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder: string;
}

export function SelectField({ label, id, name, options, placeholder, ...rest }: SelectFieldProps) {
  const fieldId = id ?? name;
  return (
    <label htmlFor={fieldId} className="flex flex-col gap-1.5">
      <span className="text-[13.5px] font-medium text-charcoal">{label}</span>
      <select id={fieldId} name={name} className={`${fieldClasses} appearance-none`} defaultValue="" {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
