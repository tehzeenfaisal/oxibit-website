"use client";

import { useState, type FormEvent } from "react";
import { Check, Lock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";
import { SelectField } from "./SelectField";
import { TextareaField } from "./TextareaField";

const serviceOptions = [
  "Custom Software",
  "Web & Mobile Apps",
  "SaaS Platform",
  "AI Solutions",
  "Cloud & DevOps",
  "UI/UX Design",
  "Quality Assurance",
  "Maintenance & Support",
  "Not sure yet",
];

const budgetOptions = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k+", "Not sure yet"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="p-9 text-center">
        <span className="mb-4.5 inline-flex size-16 items-center justify-center rounded-full bg-success-fill">
          <Check className="size-8 text-success" />
        </span>
        <h2 className="mb-2 font-heading text-[22px] font-semibold text-charcoal">Thanks, we&apos;ve got it.</h2>
        <p className="mx-auto max-w-95 text-[15.5px] leading-relaxed text-slate">
          We&apos;ll be in touch within one business day with a clear next step. Talk soon.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-9">
      <h2 className="mb-1.5 font-heading text-[22px] font-semibold text-charcoal">Send us a message</h2>
      <p className="mb-6.5 text-[14.5px] text-silver">Fields marked with an asterisk are required.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
        <div className="grid grid-cols-2 gap-4.5 max-[920px]:grid-cols-1">
          <FormField label="Full name *" name="name" placeholder="Jordan Avery" required />
          <FormField label="Work email *" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="grid grid-cols-2 gap-4.5 max-[920px]:grid-cols-1">
          <FormField label="Company" name="company" placeholder="Company name" />
          <FormField label="Phone" name="phone" type="tel" placeholder="Optional" />
        </div>
        <div className="grid grid-cols-2 gap-4.5 max-[920px]:grid-cols-1">
          <SelectField label="How can we help?" name="service" placeholder="Select a service" options={serviceOptions} />
          <SelectField label="Estimated budget" name="budget" placeholder="Select a range" options={budgetOptions} />
        </div>
        <TextareaField
          label="Tell us about your project *"
          name="message"
          rows={5}
          placeholder="What are you trying to build or improve? What does success look like?"
          required
        />
        <div className="mt-1 flex flex-wrap items-center gap-3.5">
          <Button type="submit" variant="gradient" size="lg" className="w-45">
            Start Your Project
          </Button>
          <span className="inline-flex items-center gap-2 text-[13.5px] text-silver">
            <Lock className="size-3.75" /> We&apos;ll never share your details.
          </span>
        </div>
      </form>
    </Card>
  );
}
