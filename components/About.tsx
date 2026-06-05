import Image from "next/image";
import { Check, Star } from "lucide-react";
import { about, business, images } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream-lifted py-24 sm:py-32">
      {/* headline-watermark creme-sobre-creme (assinatura Mastercard) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 hidden select-none font-display text-[10rem] leading-none tracking-tighter text-cream-ghost lg:block"
      >
        2006
      </span>

      <div className="container relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tighter text-ink sm:text-[2.9rem]">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-[17px] leading-relaxed text-slate">
              {p}
            </p>
          ))}

          <ul className="mt-8 space-y-3">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-[16px] text-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-gold text-ink">
                  <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* portrait circular com satélite */}
        <div className="relative mx-auto flex max-w-md justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-pill shadow-card">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>
          {/* satélite com a nota do Google */}
          <div className="absolute bottom-4 right-2 flex items-center gap-2 rounded-pill border-[5px] border-cream-lifted bg-ink px-5 py-3 sm:right-4">
            <Star className="h-5 w-5 fill-gold text-gold" aria-hidden />
            <span className="tnum font-display text-lg text-cream">
              {business.google.rating}
            </span>
            <span className="text-[12px] text-cream/70">no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
