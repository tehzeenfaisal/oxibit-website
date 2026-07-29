import { ArrowRight, Mail, Phone, Clock, CalendarCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TintedSection } from "@/components/ui/TintedSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { OfficeMap } from "@/components/sections/OfficeMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { offices } from "@/data/offices";
import { contactFaq } from "@/data/faq";

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell Oxibit Technologies your goal and we'll come back within one business day with a clear next step, usually a short discovery call.",
  path: "/contact",
});

const officeDetails = [
  {
    role: "United States · Headquarters",
    description: "Client partnership, project leadership, and your US-based point of contact.",
    iconColor: "text-blue",
  },
  {
    role: "Pakistan · Delivery center",
    description: "Engineering, design, and QA depth with working hours that overlap your day.",
    iconColor: "text-orange",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqPageJsonLd(contactFaq)} />

      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us your goal and we'll come back within one business day with a clear next step, usually a short discovery call. No pressure, no sales script."
        className="pt-20 pb-6"
      />

      {/* Contact grid */}
      <Container className="pt-12 pb-18 max-[920px]:py-16">
        <Reveal className="grid grid-cols-[1.25fr_1fr] gap-8 max-[920px]:grid-cols-1">
          <ContactForm />

          <div className="flex flex-col justify-between gap-5">
            <div className="rounded-2xl border border-[#E1E9F5] bg-[#EEF4FF] p-7.5">
              <h3 className="mb-5 font-heading text-lg font-semibold text-charcoal">Reach us directly</h3>
              <div className="flex flex-col gap-4.5">
                <a href="mailto:info@oxibit.com" className="flex items-center gap-3.25">
                  <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[10px] border border-[#DCE6F4] bg-white">
                    <Mail className="size-5 text-blue" />
                  </span>
                  <span>
                    <span className="block text-xs text-silver">Email</span>
                    <span className="block text-[15px] font-medium text-charcoal">info@oxibit.com</span>
                  </span>
                </a>
                <a href="tel:+18459154480" className="flex items-center gap-3.25">
                  <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[10px] border border-[#DCE6F4] bg-white">
                    <Phone className="size-5 text-blue" />
                  </span>
                  <span>
                    <span className="block text-xs text-silver">Phone · US</span>
                    <span className="block text-[15px] font-medium text-charcoal">+1 (845) 915 4480</span>
                  </span>
                </a>
                <a href="tel:+923334401011" className="flex items-center gap-3.25">
                  <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[10px] border border-[#DCE6F4] bg-white">
                    <Phone className="size-5 text-blue" />
                  </span>
                  <span>
                    <span className="block text-xs text-silver">Phone · Pakistan</span>
                    <span className="block text-[15px] font-medium text-charcoal">+92 (333) 440 1011</span>
                  </span>
                </a>
                <div className="flex items-center gap-3.25">
                  <span className="flex size-10.5 shrink-0 items-center justify-center rounded-[10px] border border-[#DCE6F4] bg-white">
                    <Clock className="size-5 text-blue" />
                  </span>
                  <span>
                    <span className="block text-xs text-silver">Response time</span>
                    <span className="block text-[15px] font-medium text-charcoal">Within one business day</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-mist bg-white p-7.5 shadow-[0_5px_22px_rgba(20,42,71,0.06)]">
              <span className="mb-4 inline-flex size-11.5 items-center justify-center rounded-[10px] bg-blue-050">
                <CalendarCheck className="size-5.75 text-blue" />
              </span>
              <h3 className="mb-2 font-heading text-lg font-semibold text-charcoal">Prefer to talk live?</h3>
              <p className="mb-4.5 text-[14.5px] leading-relaxed text-slate">
                Book a 30-minute discovery call at a time that works for you. We&apos;ll come prepared with questions about your goal.
              </p>
              <div className="mb-4 rounded-[10px] border border-dashed border-blue-100 bg-[#F8FBFF] p-4.5 text-center">
                <div className="mb-1.5 text-xs font-semibold tracking-wide text-silver uppercase">Scheduling</div>
                <div className="text-[13.5px] text-slate">Calendly embed goes here</div>
              </div>
              <LinkButton href="#" variant="solid" size="md" icon={ArrowRight} className="h-12! w-full!">
                Schedule Discovery Call
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Offices / map */}
      <TintedSection>
        <Reveal className="mb-10 max-w-155">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Our offices</p>
          <h2 className="font-heading text-[34px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            A US base and a delivery center, working as one team.
          </h2>
        </Reveal>
        <Reveal>
          <OfficeMap />
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-5.5 max-[920px]:grid-cols-1" step={100}>
          {offices.map((office, i) => {
            const detail = officeDetails[i];
            return (
              <div key={office.id} className="rounded-2xl border border-mist bg-white p-7 shadow-[0_5px_22px_rgba(20,42,71,0.06)]">
                <div className="mb-3 flex items-center gap-2.5">
                  <MapPin className={`size-5 ${detail.iconColor}`} />
                  <h3 className="font-heading text-[17px] font-semibold text-charcoal">{office.city}</h3>
                </div>
                <p className="mb-1.5 text-[14.5px] leading-relaxed text-slate">{detail.role}</p>
                <p className="text-sm leading-relaxed text-silver">{detail.description}</p>
              </div>
            );
          })}
        </Stagger>
      </TintedSection>

      {/* FAQ */}
      <Container maxWidth="880px" className="py-20 max-[920px]:py-16">
        <Reveal className="mb-11 text-center">
          <p className="mb-3 text-xs font-semibold tracking-wide text-blue uppercase">Before you reach out</p>
          <h2 className="font-heading text-[34px] leading-[1.14] font-semibold tracking-tight text-charcoal max-[600px]:text-[27px]">
            A few things people ask first.
          </h2>
        </Reveal>
        <Reveal>
          <FaqAccordion items={contactFaq} />
        </Reveal>
      </Container>
    </>
  );
}
