import Image from "next/image";
import { Star } from "lucide-react";
import { hero, business, images } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/**
 * Hero no modelo Apple: tile claro full-bleed, stack centralizado
 * (eyebrow → headline grande → tagline → 2 CTAs) e foto edge-to-edge
 * descansando na superfície com a única sombra do sistema.
 */
export function Hero() {
  return (
    <section id="topo" className="bg-white">
      <div className="container flex flex-col items-center px-6 pt-16 text-center sm:pt-20 lg:pt-24">
        <span className="text-[15px] font-semibold tracking-tight text-gold-700">
          {hero.eyebrow}
        </span>

        <h1 className="mx-auto mt-3 max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tighter text-ink sm:text-[3.25rem] lg:text-[4rem]">
          Sua empresa no <span className="text-gold-600">regime certo</span>, sem
          dor de cabeça com o fisco
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-xl leading-snug text-inkmute sm:text-[1.6rem]">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <WhatsAppCta source="whatsapp_hero" message={hero.whatsappMessage} size="lg">
            {hero.ctaPrimary}
          </WhatsAppCta>
          <a
            href="#contato"
            className="inline-flex h-12 items-center justify-center rounded-full border border-gold/60 px-7 text-[17px] font-medium tracking-tight text-gold-700 transition-transform hover:bg-gold/10 active:scale-[0.96]"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* foto edge-to-edge com a sombra única do sistema */}
      <div className="container px-6 pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24">
        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] shadow-image">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          {/* badge Google translúcido sobre a foto (chip Apple) */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-black/5 bg-white/85 px-4 py-2.5 shadow-soft backdrop-blur-md sm:bottom-6 sm:left-6">
            <Star className="h-5 w-5 fill-gold text-gold" aria-hidden />
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="tnum text-[15px] font-semibold text-ink">
                  {business.google.rating}
                </span>
                <span className="text-[13px] text-inkmute">
                  · {business.google.reviews} avaliações no Google
                </span>
              </div>
            </div>
          </div>

          {/* selo de tempo de mercado */}
          <div className="absolute right-4 top-4 rounded-full bg-graphite-900/90 px-4 py-2 text-center backdrop-blur-md sm:right-6 sm:top-6">
            <span className="tnum text-[15px] font-semibold text-gold">
              {business.yearsLabel}
            </span>
            <span className="ml-1.5 text-[13px] text-white/80">de mercado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
