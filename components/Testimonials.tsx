import { Star, Quote } from "lucide-react";
import { testimonials, business } from "@/content/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cloud py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-graphite-900 sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-ink">{testimonials.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-soft"
            >
              <Quote className="h-8 w-8 text-gold/40" aria-hidden />
              <div className="mt-3 flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 leading-relaxed text-graphite-900">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-graphite-700/10 pt-4">
                <span className="block font-semibold text-graphite-900">
                  {item.name}
                </span>
                <span className="text-sm text-ink">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={business.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-graphite-900 underline-offset-4 hover:text-gold-600 hover:underline"
          >
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            Ver as {business.google.reviews} avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
