import {
  Rocket,
  ArrowLeftRight,
  Scale,
  FileText,
  Users,
  MessageSquareText,
  ArrowRight,
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
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter text-ink sm:text-[2.75rem]">
            {services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-snug text-inkmute">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <article
                key={item.title}
                className="bg-white p-8 transition-colors hover:bg-cloud"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold-700">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-[21px] font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[17px] leading-normal text-inkmute">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <WhatsAppCta
            source="whatsapp_services"
            message={services.whatsappMessage}
            size="lg"
          >
            {services.ctaLabel}
          </WhatsAppCta>
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 text-[17px] font-medium tracking-tight text-gold-700 hover:gap-2.5 transition-all"
          >
            Pedir proposta
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
