import { Check } from "lucide-react";
import { audience } from "@/content/site";

export function Audience() {
  return (
    <section id="para-quem" className="bg-cloud py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-graphite-900 sm:text-4xl">
            {audience.title}
          </h2>
          <p className="mt-4 text-lg text-ink">{audience.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {audience.items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl bg-white p-6 shadow-soft"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-graphite-900">
                <Check className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-1 leading-relaxed text-ink">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
