import { Plus } from "lucide-react";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="duvidas" className="bg-white py-20 sm:py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-graphite-900 sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-ink">{faq.subtitle}</p>
        </div>

        <div className="mt-10 divide-y divide-graphite-700/10 rounded-2xl border border-graphite-700/10">
          {faq.items.map((item) => (
            <details key={item.question} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-graphite-900 [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 leading-relaxed text-ink">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
