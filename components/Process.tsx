import { process } from "@/content/site";

export function Process() {
  return (
    <section className="bg-canvas-dark text-white">
      <div className="container py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-[2.5rem] leading-[1.05] tracking-tighter text-white sm:text-[3.25rem]">
            {process.title}
          </h2>
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-white/72">
            {process.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-3">
          {process.steps.map((step) => (
            <div key={step.number} className="bg-canvas-dark p-8">
              <span className="tnum font-display text-5xl tracking-tighter text-gold">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-[22px] tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-relaxed text-white/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
