import Image from "next/image";
import { Check, Star } from "lucide-react";
import { about, business, images } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="bg-canvas-light text-ink">
      <div className="container grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        {/* foto à esquerda */}
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-canvas-dark px-4 py-2">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            <span className="tnum text-[15px] font-semibold text-white">
              {business.google.rating}
            </span>
            <span className="text-[13px] text-white/60">no Google</span>
          </div>
        </div>

        <div>
          <h2 className="max-w-xl font-display text-[2.5rem] leading-[1.05] tracking-tighter text-ink sm:text-[3.25rem]">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-[17px] leading-relaxed text-ink-mute">
              {p}
            </p>
          ))}

          <ul className="mt-8 space-y-3">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-[16px] text-ink">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-canvas-dark">
                  <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
