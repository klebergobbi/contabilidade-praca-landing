import { Plus } from "lucide-react";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="duvidas" className="bg-canvas-light text-ink">
      <div className="container grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="max-w-xs font-display text-[2.5rem] leading-[1.05] tracking-tighter text-ink sm:text-[3.25rem]">
            {faq.title}
          </h2>
          <p className="mt-5 max-w-sm text-[18px] leading-relaxed text-ink-mute">
            {faq.subtitle}
          </p>
        </div>

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[20px] tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/20 transition-transform duration-200 group-open:rotate-45">
                  <Plus className="h-4 w-4 text-ink" aria-hidden />
                </span>
              </summary>
              <p className="pb-6 text-[16px] leading-relaxed text-ink-mute">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
