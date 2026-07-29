import type { TextareaHTMLAttributes } from "react";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextareaField({ label, id, name, rows = 5, ...rest }: TextareaFieldProps) {
  const fieldId = id ?? name;
  return (
    <label htmlFor={fieldId} className="flex flex-col gap-1.5">
      <span className="text-[13.5px] font-medium text-charcoal">{label}</span>
      <textarea
        id={fieldId}
        name={name}
        rows={rows}
        className="resize-none rounded-xl border border-mist bg-white px-3.5 py-3 text-[14.5px] text-charcoal outline-none transition-colors placeholder:text-silver focus:border-blue"
        {...rest}
      />
    </label>
  );
}
