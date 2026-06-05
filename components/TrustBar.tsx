import { trustBar } from "@/content/site";

export function TrustBar() {
  return (
    <section className="bg-cloud">
      <div className="container grid grid-cols-2 gap-y-8 py-12 sm:grid-cols-4 sm:py-14">
        {trustBar.items.map((item) => (
          <div key={item.label} className="flex flex-col items-center px-2 text-center">
            <span className="tnum font-display text-3xl font-semibold tracking-tighter text-gold-600 sm:text-4xl">
              {item.value}
            </span>
            <span className="mt-1.5 text-[14px] leading-tight text-inkmute">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
