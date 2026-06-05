import { Check } from "lucide-react";
import { audience } from "@/content/site";

export function Audience() {
  return (
    <section id="para-quem" className="bg-canvas-light text-ink">
      <div className="container py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-[2.5rem] leading-[1.05] tracking-tighter text-ink sm:text-[3.25rem]">
            {audience.title}
          </h2>
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-ink-mute">
            {audience.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {audience.items.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-lg border border-ink/10 bg-canvas-light p-8"
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-canvas-dark">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-[20px] tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink-mute">
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
