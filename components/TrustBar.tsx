import { trustBar } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-b border-graphite-700/10 bg-gold">
      <div className="container grid grid-cols-2 gap-px py-6 sm:grid-cols-4">
        {trustBar.items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center px-2 text-center text-graphite-900"
          >
            <span className="tnum font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {item.value}
            </span>
            <span className="mt-1 text-xs font-medium leading-tight sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
