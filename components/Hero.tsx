import Image from "next/image";
import { Star, CheckCircle2 } from "lucide-react";
import { hero, business, images } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-graphite-900 text-white"
    >
      {/* backdrop atmosférico dourado (mesh do modelo, em preto+dourado) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] h-[520px] w-[520px] rounded-full bg-gold/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-25%] left-[-15%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium tracking-tight text-gold">
            <Star className="h-4 w-4 fill-gold" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl lg:text-[3.5rem]">
            {hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta
              source="whatsapp_hero"
              message={hero.whatsappMessage}
              size="lg"
            >
              {hero.ctaPrimary}
            </WhatsAppCta>
            <a
              href="#contato"
              className="inline-flex h-14 items-center justify-center rounded-lg border border-graphite-600 px-8 text-lg font-semibold tracking-tight text-white transition-colors hover:border-gold hover:text-gold"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.proofChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* foto real + badge flutuante de prova social */}
        <div className="animate-fade-up">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-graphite-600 shadow-soft">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* leve overlay grafite para integrar à paleta */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-graphite-900/45 via-transparent to-transparent"
              />
            </div>

            {/* badge Google flutuante */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-graphite-600 bg-graphite-700/95 px-5 py-4 shadow-soft backdrop-blur sm:-left-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15">
                <Star className="h-6 w-6 fill-gold text-gold" aria-hidden />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="tnum font-display text-xl font-bold leading-none">
                    {business.google.rating}
                  </span>
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden />
                    ))}
                  </span>
                </div>
                <p className="tnum mt-1 text-xs text-white/65">
                  {business.google.reviews} avaliações no Google
                </p>
              </div>
            </div>

            {/* selo de tempo de mercado */}
            <div className="absolute -right-3 -top-4 rounded-2xl bg-gold px-4 py-3 text-center text-graphite-900 shadow-gold sm:-right-5">
              <span className="tnum block font-display text-2xl font-bold leading-none">
                {business.yearsLabel}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-tight">
                de mercado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
