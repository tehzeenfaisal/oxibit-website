export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Oxibit understood our operations better than vendors we'd used for years. The software fit our business, not the other way around.",
    initials: "DO",
    name: "Daniel Okonkwo",
    role: "VP Engineering, Meridian Health",
  },
  {
    quote:
      "Two years after launch they're still our team. Updates ship, issues get fixed fast, and we never feel handed off.",
    initials: "SL",
    name: "Sara Lindqvist",
    role: "COO, Vantage Retail",
  },
  {
    quote:
      "They were straight with us about scope and cost from day one. No surprises on the invoice, and the build came in on time.",
    initials: "MR",
    name: "Marcus Reilly",
    role: "CTO, Atlas Logistics",
  },
];
