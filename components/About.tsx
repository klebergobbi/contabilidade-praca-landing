import Image from "next/image";
import { CheckCircle2, MapPin, Star } from "lucide-react";
import { about, business, images } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-graphite-900 sm:text-4xl">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-ink">
              {p}
            </p>
          ))}

          <ul className="mt-7 space-y-3">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-graphite-900">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-600" aria-hidden />
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foto real de atendimento (TODO go-live: foto do escritório/equipe) */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-graphite-900/70 via-graphite-900/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-6 text-white">
              <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span className="text-sm font-medium">{business.address.full}</span>
            </div>
          </div>

          {/* selo de nota Google sobreposto */}
          <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft sm:-right-5">
            <Star className="h-5 w-5 fill-gold text-gold" aria-hidden />
            <div className="leading-tight">
              <span className="tnum block font-display text-lg font-bold text-graphite-900">
                {business.google.rating}
              </span>
              <span className="text-[11px] text-ink">no Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
