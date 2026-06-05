"use client";

import * as React from "react";
import Image from "next/image";
import { nav, hero, business } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-graphite-900/95 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="flex items-center" aria-label={business.name}>
          <Image
            src="/logo-contabilidade-praca.png"
            alt={business.name}
            width={317}
            height={117}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppCta
          source="whatsapp_header"
          message={hero.whatsappMessage}
          size="sm"
          className="shrink-0"
        >
          {nav.ctaLabel}
        </WhatsAppCta>
      </div>
    </header>
  );
}
