"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { nav, hero, business } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackLead } from "@/lib/tracking";

/**
 * Global nav no modelo Apple: barra near-black fina, links discretos,
 * UI que recua para o conteúdo falar. CTA único de WhatsApp à direita.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-graphite-950/85 backdrop-blur-md backdrop-saturate-150">
      <div className="container flex h-12 items-center justify-between gap-4">
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

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-tight text-white/70 transition-colors hover:text-white"
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
          className="inline-flex h-8 items-center gap-1.5 rounded-full bg-gold px-4 text-[13px] font-medium tracking-tight text-graphite-900 transition-transform active:scale-95"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">{nav.ctaLabel}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
