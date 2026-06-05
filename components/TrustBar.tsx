import { trustBar } from "@/content/site";

export function TrustBar() {
  return (
    <section className="bg-canvas-light text-ink">
      <div className="container grid grid-cols-2 gap-y-10 py-14 sm:grid-cols-4 sm:py-16">
        {trustBar.items.map((item) => (
          <div key={item.label} className="flex flex-col items-center px-2 text-center">
            <span className="tnum font-display text-4xl tracking-tighter text-ink sm:text-5xl">
              {item.value}
            </span>
            <span className="mt-2 text-[14px] leading-tight text-ink-mute">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
