import { Plus } from "lucide-react";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section id="duvidas" className="bg-white py-20 sm:py-28">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter text-ink sm:text-[2.75rem]">
            {faq.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-snug text-inkmute">
            {faq.subtitle}
          </p>
        </div>

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[19px] font-semibold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-gold-700 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 text-[17px] leading-normal text-inkmute">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
