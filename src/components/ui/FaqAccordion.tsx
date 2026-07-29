"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/faq";

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-[0_6px_20px_rgba(20,42,71,0.07)] transition-colors duration-200 ${
              open ? "border-blue-100" : "border-[#E4EAF1]"
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className={`flex w-full items-center justify-between gap-4 px-5.5 py-5 text-left font-heading text-[17px] font-semibold transition-colors duration-200 ${
                open ? "text-blue" : "text-charcoal"
              }`}
            >
              {item.question}
              <ChevronDown
                className={`size-5 shrink-0 text-silver transition-transform duration-200 ${
                  open ? "-rotate-180 text-blue" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5.5 pb-5 text-[15.5px] leading-relaxed text-slate">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
