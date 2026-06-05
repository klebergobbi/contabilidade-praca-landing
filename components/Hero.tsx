import Image from "next/image";
import { Star } from "lucide-react";
import { hero, business, images } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/**
 * Hero editorial (modelo Mastercard): canvas creme, headline densa à
 * esquerda, moldura "stadium" (40px) na foto, arco dourado decorativo e
 * portrait circular com a nota do Google.
 */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-cream pt-32 sm:pt-36">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="animate-fade-up">
            <h1 className="max-w-2xl font-display text-[2.6rem] leading-[1.02] tracking-tighter text-ink sm:text-[3.4rem] lg:text-[4rem]">
              Sua empresa no <span className="text-gold-700">regime certo</span>,
              sem dor de cabeça com o fisco
            </h1>
          </div>
          <p className="max-w-md text-[18px] leading-relaxed text-slate lg:pb-3">
            {hero.subheadline}
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppCta source="whatsapp_hero" message={hero.whatsappMessage} size="lg">
            {hero.ctaPrimary}
          </WhatsAppCta>
          <a
            href="#contato"
            className="inline-flex h-[52px] items-center justify-center rounded-btn border-[1.5px] border-ink bg-white px-8 text-[17px] font-medium tracking-tight text-ink transition-transform hover:bg-cream-lifted active:scale-[0.97]"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* moldura stadium com a foto + arco dourado + portrait circular */}
      <div className="container relative mt-14 pb-24 sm:mt-16">
        {/* arco orbital dourado (assinatura Mastercard) */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -top-6 right-4 hidden h-40 w-72 text-gold sm:block"
          viewBox="0 0 300 160"
          fill="none"
        >
          <path
            d="M2 158 C 40 40, 180 -10, 298 60"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative overflow-hidden rounded-stadium shadow-card">
          <div className="relative aspect-[16/9]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        {/* portrait circular com a nota do Google + satélite */}
        <div className="absolute -bottom-2 left-6 flex items-center gap-4 sm:left-10">
          <div className="relative grid h-28 w-28 place-items-center rounded-pill border-[6px] border-cream bg-ink text-center sm:h-32 sm:w-32">
            <div>
              <span className="tnum block font-display text-3xl text-gold">
                {business.google.rating}
              </span>
              <span className="block text-[11px] leading-tight text-cream/70">
                no Google
              </span>
            </div>
            {/* satélite */}
            <span className="absolute -right-1 -top-1 grid h-9 w-9 place-items-center rounded-pill border-2 border-cream bg-gold">
              <Star className="h-4 w-4 fill-ink text-ink" aria-hidden />
            </span>
          </div>
          <div className="hidden rounded-pill bg-white/90 px-4 py-2 text-[13px] font-medium text-ink shadow-navpill backdrop-blur sm:block">
            {business.google.reviews} avaliações reais
          </div>
        </div>
      </div>
    </section>
  );
}
