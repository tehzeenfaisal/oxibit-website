"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[60] border-b bg-white/72 backdrop-blur-[14px] backdrop-saturate-150 transition-[box-shadow,border-color] duration-200 ${
        scrolled ? "border-transparent shadow-[0_1px_0_rgba(14,42,71,0.04),0_10px_28px_rgba(14,42,71,0.07)]" : "border-mist"
      }`}
    >
      <div className="mx-auto flex h-17 max-w-[1200px] items-center gap-9 px-10 max-[920px]:px-6 max-[600px]:px-4.5">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logos/oxibit-logo.png" alt="Oxibit Technologies" width={140} height={27} className="h-6.75 w-auto" priority />
        </Link>

        <nav className="ml-1.5 flex items-center gap-1 max-[920px]:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3.5 py-2 text-[15px] transition-colors ${
                  active ? "bg-cloud font-semibold text-blue" : "font-medium text-slate hover:bg-cloud hover:text-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <LinkButton href="/contact" variant="gradient" size="md">
            Start Your Project
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
