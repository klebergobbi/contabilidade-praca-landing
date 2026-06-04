import { Star, CheckCircle2 } from "lucide-react";
import { hero, business } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-graphite-900 text-white"
    >
      {/* brilho dourado de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="container relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <Star className="h-4 w-4 fill-gold" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
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
              className="inline-flex h-14 items-center justify-center rounded-xl border border-white/15 px-8 text-lg font-semibold text-white transition-colors hover:border-gold hover:text-gold"
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

        {/* card de prova social */}
        <div className="animate-fade-up rounded-2xl border border-white/10 bg-graphite-800/80 p-7 shadow-soft backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <span className="font-display text-2xl font-bold">
              {business.google.rating}
            </span>
          </div>
          <p className="mt-2 text-sm text-white/70">
            {business.google.reviews} avaliações no Google
          </p>

          <div className="my-6 h-px w-full bg-white/10" />

          <dl className="space-y-4">
            <div>
              <dt className="text-sm text-white/55">No mercado desde</dt>
              <dd className="font-display text-xl font-semibold">
                {business.foundedYear} · {business.yearsLabel}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-white/55">Onde estamos</dt>
              <dd className="text-base font-medium leading-snug">
                {business.address.city} - {business.address.state}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
