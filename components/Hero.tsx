import Image from "next/image";
import { Star } from "lucide-react";
import { hero, business, images } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/**
 * Hero em duas colunas (modelo Mastercard): texto + CTAs à esquerda,
 * foto em moldura "stadium" (40px) à direita, com portrait circular da
 * nota do Google e arco dourado decorativo. Canvas creme.
 */
export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-cream pb-24 pt-32 sm:pt-36"
    >
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* esquerda: texto + CTAs */}
        <div className="animate-fade-up">
          <h1 className="max-w-xl font-display text-[2.5rem] leading-[1.03] tracking-tighter text-ink sm:text-[3.1rem] lg:text-[3.6rem]">
            Sua empresa no <span className="text-gold-700">regime certo</span>,
            sem dor de cabeça com o fisco
          </h1>

          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-slate">
            {hero.subheadline}
          </p>

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

        {/* direita: foto em moldura stadium + arco + portrait circular */}
        <div className="relative animate-fade-up">
          {/* arco orbital dourado (assinatura Mastercard) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -top-8 right-0 hidden h-36 w-64 text-gold sm:block"
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
            <div className="relative aspect-[5/4]">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* portrait circular com a nota do Google + satélite */}
          <div className="absolute -bottom-5 -left-3 grid h-28 w-28 place-items-center rounded-pill border-[6px] border-cream bg-ink text-center sm:-left-5 sm:h-32 sm:w-32">
            <div>
              <span className="tnum block font-display text-3xl text-gold">
                {business.google.rating}
              </span>
              <span className="block text-[11px] leading-tight text-cream/70">
                no Google
              </span>
            </div>
            <span className="absolute -right-1 -top-1 grid h-9 w-9 place-items-center rounded-pill border-2 border-cream bg-gold">
              <Star className="h-4 w-4 fill-ink text-ink" aria-hidden />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
