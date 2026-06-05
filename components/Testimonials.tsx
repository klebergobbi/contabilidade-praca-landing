import { Star } from "lucide-react";
import { testimonials, business } from "@/content/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cloud py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter text-ink sm:text-[2.75rem]">
            {testimonials.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-snug text-inkmute">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <figure key={i} className="flex flex-col rounded-[18px] bg-white p-8">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[19px] leading-normal text-ink">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-hairline pt-4">
                <span className="block font-semibold tracking-tight text-ink">
                  {item.name}
                </span>
                <span className="text-[14px] text-inkmute">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={business.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[17px] font-medium tracking-tight text-gold-700 hover:underline"
          >
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
            Ver as {business.google.reviews} avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
