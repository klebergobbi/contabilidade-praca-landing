import { process } from "@/content/site";

export function Process() {
  return (
    <section className="bg-graphite-900 py-20 text-white sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter sm:text-[2.75rem]">
            {process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-snug text-white/60">
            {process.subtitle}
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-12 md:grid-cols-3">
          {process.steps.map((step) => (
            <li key={step.number} className="text-center md:text-left">
              <span className="tnum font-display text-[15px] font-semibold tracking-tight text-gold">
                {step.number}
              </span>
              <h3 className="mt-3 text-[22px] font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[17px] leading-normal text-white/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
