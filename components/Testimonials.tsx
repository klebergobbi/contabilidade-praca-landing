import { Star } from "lucide-react";
import { testimonials, business } from "@/content/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-canvas-dark text-white">
      <div className="container py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-[2.5rem] leading-[1.05] tracking-tighter text-white sm:text-[3.25rem]">
            {testimonials.title}
          </h2>
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-white/72">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-lg bg-surface-elevated p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[18px] leading-relaxed text-white/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-[15px] font-semibold text-gold">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="text-[13px] text-white/55">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={business.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/80 px-6 py-3 text-[15px] font-semibold tracking-ui text-white transition-colors hover:bg-white/10"
          >
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            Ver as {business.google.reviews} avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
