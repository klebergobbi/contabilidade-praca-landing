import Image from "next/image";
import { Star } from "lucide-react";
import { hero, business, images } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/**
 * Hero (modelo Revolut): banda true black, headline GIGANTE (Sora 600,
 * tracking negativo, line-height apertado) à esquerda, foto full-bleed à
 * direita em moldura rounded-xl. Dourado como acento escasso.
 */
export function Hero() {
  return (
    <section id="topo" className="bg-canvas-dark text-white">
      <div className="container grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* esquerda: headline + CTAs */}
        <div className="animate-fade-up">
          <h1 className="font-display text-[3.25rem] leading-[0.98] tracking-tightest text-white sm:text-[4.25rem] lg:text-[4.75rem]">
            Sua empresa no <span className="text-gold">regime certo</span>, sem
            dor de cabeça com o fisco
          </h1>

          <p className="mt-7 max-w-lg text-[18px] leading-relaxed text-white/72">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta source="whatsapp_hero" message={hero.whatsappMessage} size="lg">
              {hero.ctaPrimary}
            </WhatsAppCta>
            <a
              href="#contato"
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/80 px-8 text-[17px] font-semibold tracking-ui text-white transition-transform hover:bg-white/10 active:scale-[0.97]"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* direita: foto full-bleed em moldura rounded-xl */}
        <div className="relative animate-fade-up">
          <div className="relative overflow-hidden rounded-xl">
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

          {/* selo discreto da nota do Google */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-canvas-dark/85 px-4 py-2 backdrop-blur-md">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            <span className="tnum text-[15px] font-semibold text-white">
              {business.google.rating}
            </span>
            <span className="text-[13px] text-white/60">no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
