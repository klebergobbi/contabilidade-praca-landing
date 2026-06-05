import { Check } from "lucide-react";
import { audience } from "@/content/site";

export function Audience() {
  return (
    <section id="para-quem" className="bg-cream-lifted py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-tighter text-ink sm:text-[2.9rem]">
            {audience.title}
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-slate">
            {audience.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {audience.items.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-stadium bg-cream px-8 py-7"
            >
              <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-gold text-ink">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-[20px] tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
