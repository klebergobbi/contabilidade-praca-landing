import { Check } from "lucide-react";
import { audience } from "@/content/site";

export function Audience() {
  return (
    <section id="para-quem" className="bg-cloud py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter text-ink sm:text-[2.75rem]">
            {audience.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-snug text-inkmute">
            {audience.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {audience.items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-[18px] bg-white p-7"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-graphite-900">
                <Check className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-[19px] font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[17px] leading-normal text-inkmute">
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
