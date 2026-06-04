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
    <section id="servicos" className="bg-white py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-graphite-900 sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-ink">{services.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-graphite-700/10 bg-cloud p-6 transition-all hover:border-gold/50 hover:shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-600 transition-colors group-hover:bg-gold group-hover:text-graphite-900">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
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
