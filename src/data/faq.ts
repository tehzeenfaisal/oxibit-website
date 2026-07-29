export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: "How does a project start?",
    answer:
      "Every engagement begins with a discovery call and a short, paid discovery phase. We learn your goals, constraints, and how you'll measure success, then give you a written plan, timeline, and price range before any build work begins.",
  },
  {
    question: "How do you price your work?",
    answer:
      "Most projects are fixed-scope with a fixed price, set after discovery. For longer or evolving products, we offer a monthly retainer. Either way, you know what you're paying and what it buys before we start.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay. Maintenance and support are part of how we work, not an afterthought. We monitor, fix, update, and keep improving your software for years after release.",
  },
  {
    question: "Do you meet enterprise security and compliance needs?",
    answer:
      "Yes. We sign NDAs and MSAs, follow least-privilege access, and can work within SOC 2, HIPAA, and GDPR requirements. We're glad to complete your security review.",
  },
  {
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. On final payment, all source code, designs, and IP are yours, with full handover and documentation. There's no lock-in.",
  },
  {
    question: "Where is your team based?",
    answer:
      "We're headquartered in Tuxedo, New York, with a delivery center in Lahore, Pakistan. You get a US-based point of contact and working hours that overlap your day.",
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "How quickly will you respond?",
    answer:
      "Within one business day. For most enquiries we'll suggest a short discovery call as the next step.",
  },
  {
    question: "Do I need everything figured out first?",
    answer:
      "No. A clear goal is enough to start. We'll help you shape scope, approach, and budget during discovery.",
  },
  {
    question: "Is the discovery call free?",
    answer:
      "Yes. The first call is free and has no obligation. We'll only suggest a paid discovery phase once there's a clear reason to.",
  },
  {
    question: "Can you sign our NDA before we share details?",
    answer:
      "Absolutely. Send yours or use ours. We're glad to have it in place before any detailed conversation.",
  },
];
