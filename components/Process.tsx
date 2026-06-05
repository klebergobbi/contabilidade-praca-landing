import { process } from "@/content/site";

export function Process() {
  return (
    <section className="bg-graphite-900 py-20 text-white sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{process.subtitle}</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {process.steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-xl border border-graphite-600 bg-graphite-700/70 p-7"
            >
              <span className="tnum font-display text-4xl font-bold tracking-tight text-gold/40">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-white/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
