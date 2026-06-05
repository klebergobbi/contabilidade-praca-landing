import { Star } from "lucide-react";
import { testimonials, business } from "@/content/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl tracking-tighter text-ink sm:text-[2.9rem]">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-slate">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-[40px] bg-cream-lifted p-9 shadow-navpill"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-[20px] leading-snug tracking-tight text-ink">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-pill bg-ink text-[14px] font-bold text-gold">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="text-[13px] text-slate">{item.role}</span>
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
            className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-ink bg-cream px-6 py-3 text-[15px] font-medium tracking-tight text-ink transition-colors hover:bg-cream-lifted"
          >
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            Ver as {business.google.reviews} avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
