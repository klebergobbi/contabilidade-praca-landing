import { trustBar } from "@/content/site";

export function TrustBar() {
  return (
    <section className="bg-cream">
      <div className="container">
        <div className="grid grid-cols-2 gap-y-10 rounded-stadium bg-cream-lifted px-6 py-12 shadow-navpill sm:grid-cols-4 sm:px-12">
          {trustBar.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center px-2 text-center">
              <span className="tnum font-display text-4xl text-ink sm:text-5xl">
                {item.value}
              </span>
              <span className="mt-2 text-[14px] leading-tight text-slate">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
