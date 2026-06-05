import {
  Rocket,
  ArrowLeftRight,
  Scale,
  FileText,
  Users,
  MessageSquareText,
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
    <section id="servicos" className="bg-canvas-dark text-white">
      <div className="container py-20 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-[2.5rem] leading-[1.05] tracking-tighter text-white sm:text-[3.25rem]">
            {services.title}
          </h2>
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-white/72">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <article
                key={item.title}
                className="rounded-lg bg-surface-elevated p-8 transition-colors hover:bg-[#1c1f22]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-[22px] tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[16px] leading-relaxed text-white/65">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-start gap-5 rounded-xl bg-surface-elevated p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="max-w-md font-display text-[26px] leading-tight tracking-tight text-white">
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
