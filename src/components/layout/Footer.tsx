import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { offices } from "@/data/offices";

const serviceLinks = [
  "Custom Software",
  "Web & Mobile Apps",
  "Cloud & DevOps",
  "Quality Assurance",
  "Maintenance",
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = ["Privacy", "Terms", "Security"];

export function Footer() {
  return (
    <footer className="bg-charcoal text-[#aeb6c0]">
      <Container className="py-16 pb-8">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1">
          <div>
            <Image
              src="/logos/oxibit-logo-white.png"
              alt="Oxibit Technologies"
              width={150}
              height={26}
              className="mb-4.5 h-6.5 w-auto"
            />
            <p className="mb-2.5 font-heading text-sm font-semibold tracking-wide text-white">We Make IT Happen.</p>
            <p className="max-w-70 text-sm leading-relaxed text-silver">
              Custom software, planned, built, tested, and maintained by one accountable partner.
            </p>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold tracking-wider text-[#6b7682] uppercase">Services</div>
            <div className="flex flex-col gap-2.75">
              {serviceLinks.map((label) => (
                <Link key={label} href="/services" className="text-[14.5px] text-[#aeb6c0] transition-colors hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold tracking-wider text-[#6b7682] uppercase">Company</div>
            <div className="flex flex-col gap-2.75">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[14.5px] text-[#aeb6c0] transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold tracking-wider text-[#6b7682] uppercase">Offices</div>
            <div className="flex flex-col gap-3.5">
              {offices.map((office) => (
                <div key={office.id} className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-[17px] shrink-0 text-blue" />
                  <span className="text-[14.5px] leading-relaxed">
                    {office.city}
                    <br />
                    <span className="text-[#6b7682]">{office.country}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4.5 border-t border-[#2C313A] pt-6">
          <span className="text-[13px] text-[#6b7682]">© {new Date().getFullYear()} Oxibit Technologies. All rights reserved.</span>
          {/* <div className="flex gap-5.5">
            {legalLinks.map((label) => (
              <Link key={label} href="#" className="text-[13px] text-silver transition-colors hover:text-white">
                {label}
              </Link>
            ))}
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
