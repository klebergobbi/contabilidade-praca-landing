import { process } from "@/content/site";

export function Process() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">{process.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl tracking-tighter text-ink sm:text-[2.9rem]">
            {process.title}
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-slate">
            {process.subtitle}
          </p>
        </div>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3">
          {/* arco orbital conectando os passos (desktop) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-16 hidden h-10 w-full text-gold md:block"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M120 20 C 360 -20, 640 60, 880 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2 6"
              strokeLinecap="round"
            />
          </svg>

          {process.steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start">
              <div className="grid h-16 w-16 place-items-center rounded-pill border-[1.5px] border-ink bg-cream">
                <span className="tnum font-display text-2xl text-ink">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[22px] tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-slate">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
