import Image from "next/image";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { footer, business, nav } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-900 text-white">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/logo-contabilidade-praca.png"
            alt={business.name}
            width={317}
            height={117}
            className="h-9 w-auto"
          />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55">
            {footer.tagline}
          </p>
          <p className="mt-3 text-[13px] text-white/40">CNPJ {business.cnpj}</p>
          {business.crc && (
            <p className="text-[13px] text-white/40">CRC {business.crc}</p>
          )}
        </div>

        <nav className="text-[15px]" aria-label="Rodapé">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/70 hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-[15px]">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              {business.address.full}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a href={business.phone.landlineHref} className="hover:text-gold">
                {business.phone.landline}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              WhatsApp {business.phone.whatsappDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {business.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-[12px] text-white/40">
          <p>{footer.disclaimer}</p>
          <p>{footer.rightsTemplate.replace("{year}", String(year))}</p>
        </div>
      </div>
    </footer>
  );
}
