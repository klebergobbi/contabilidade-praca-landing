import { CheckCircle2, MapPin, Building2 } from "lucide-react";
import { about, business } from "@/content/site";

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

        {/* Placeholder visual até chegar a foto real da fachada/equipe (TODO) */}
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-graphite-900 shadow-soft">
            <div className="flex h-full flex-col justify-end gap-3 bg-[radial-gradient(circle_at_top_right,_rgba(242,183,5,0.25),_transparent_60%)] p-8 text-white">
              <Building2 className="h-10 w-10 text-gold" aria-hidden />
              <p className="font-display text-2xl font-semibold">
                {business.name}
              </p>
              <p className="flex items-center gap-2 text-white/75">
                <MapPin className="h-4 w-4 text-gold" aria-hidden />
                {business.address.full}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
