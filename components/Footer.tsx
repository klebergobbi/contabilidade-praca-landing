import Image from "next/image";
import { Instagram, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { footer, business, nav } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="container py-20">
        <h2 className="max-w-xl font-display text-[2rem] leading-tight tracking-tighter text-cream sm:text-[2.6rem]">
          A gente está aqui sempre que você precisar.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/logo-contabilidade-praca.png"
              alt={business.name}
              width={317}
              height={117}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-cream/55">
              {footer.tagline}
            </p>
            <p className="mt-3 text-[12px] text-cream/40">CNPJ {business.cnpj}</p>
            {business.crc && (
              <p className="text-[12px] text-cream/40">CRC {business.crc}</p>
            )}
          </div>

          <nav aria-label="Rodapé">
            <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-cream/40">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/70 hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-cream/40">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] text-cream/70">
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
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-eyebrow text-cream/40">
              Social
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a
                  href={business.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/70 hover:text-gold"
                >
                  <Instagram className="h-4 w-4 text-gold" aria-hidden />
                  {business.instagram.handle}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container flex flex-col gap-3 py-6 text-[12px] text-cream/40">
          <p>{footer.disclaimer}</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.rightsTemplate.replace("{year}", String(year))}</p>
            <p>
              {footer.developer.label}{" "}
              <a
                href={footer.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cream/60 transition-colors hover:text-gold"
              >
                {footer.developer.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
