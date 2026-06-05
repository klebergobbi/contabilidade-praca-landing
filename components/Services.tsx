import {
  Rocket,
  ArrowLeftRight,
  Scale,
  FileText,
  Users,
  MessageSquareText,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  ArrowLeftRight,
  Scale,
  FileText,
  Users,
  MessageSquareText,
};

export function Services() {
  return (
    <section id="servicos" className="bg-cream py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl tracking-tighter text-ink sm:text-[2.9rem]">
            {services.title}
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-slate">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <article key={item.title} className="group flex flex-col items-center text-center sm:items-start sm:text-left">
                {/* portrait circular com satélite (seta) */}
                <div className="relative">
                  <div className="grid h-32 w-32 place-items-center rounded-pill bg-cream-lifted shadow-card transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-12 w-12 text-gold-700" strokeWidth={1.5} aria-hidden />
                  </div>
                  <span className="absolute -bottom-1 -right-1 grid h-11 w-11 place-items-center rounded-pill border-[3px] border-cream bg-ink text-cream transition-colors group-hover:bg-gold group-hover:text-ink">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </div>

                <span className="mt-6 text-[12px] font-bold uppercase tracking-eyebrow text-gold-700">
                  0{i + 1}
                </span>
                <h3 className="mt-1 font-display text-[22px] tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-[16px] leading-relaxed text-slate">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 rounded-stadium bg-ink px-8 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="max-w-md font-display text-[26px] leading-tight tracking-tight text-cream">
            Não sabe por onde começar? A gente te orienta.
          </p>
          <WhatsAppCta
            source="whatsapp_services"
            message={services.whatsappMessage}
            size="lg"
          >
            {services.ctaLabel}
          </WhatsAppCta>
        </div>
      </div>
    </section>
  );
}
