import Image from "next/image";
import { Check, Star } from "lucide-react";
import { about, business, images } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter text-ink sm:text-[2.75rem]">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-[19px] leading-normal text-inkmute">
              {p}
            </p>
          ))}

          <ul className="mt-8 space-y-3">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-[17px] text-ink">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-700">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* foto real descansando na superfície com a sombra única (TODO: foto do escritório) */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] shadow-image">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur-md">
            <Star className="h-5 w-5 fill-gold text-gold" aria-hidden />
            <span className="tnum text-[15px] font-semibold text-ink">
              {business.google.rating}
            </span>
            <span className="text-[13px] text-inkmute">no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
