"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { nav, hero, business } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackLead } from "@/lib/tracking";

/**
 * Nav flutuante em pílula (modelo Mastercard): descolada do topo, cantos
 * totalmente arredondados. Em ink-black para o logo (texto branco) assentar
 * e manter o preto+dourado da marca. Acento dourado nos links.
 */
export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
      <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-pill border border-white/5 bg-ink/95 px-5 py-2.5 shadow-card backdrop-blur-md sm:px-7">
        <a href="#topo" className="flex items-center" aria-label={business.name}>
          <Image
            src="/logo-contabilidade-praca.png"
            alt={business.name}
            width={317}
            height={117}
            priority
            className="h-7 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium tracking-tight text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl(hero.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead("whatsapp_header")}
          className="inline-flex h-9 items-center gap-1.5 rounded-pill bg-gold px-4 text-[14px] font-semibold tracking-tight text-ink transition-transform active:scale-95"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">{nav.ctaLabel}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
