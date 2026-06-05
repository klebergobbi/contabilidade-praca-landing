import { Phone, MapPin, Clock } from "lucide-react";
import { finalCta, business } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { LeadForm } from "@/components/LeadForm";

export function FinalCta() {
  return (
    <section id="contato" className="bg-canvas-dark text-white">
      <div className="container grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="max-w-md font-display text-[2.5rem] leading-[1.04] tracking-tighter text-white sm:text-[3.25rem]">
            {finalCta.title}
          </h2>
          <p className="mt-5 max-w-md text-[18px] leading-relaxed text-white/72">
            {finalCta.subtitle}
          </p>
          <div className="mt-8">
            <WhatsAppCta
              source="whatsapp_final_cta"
              message={finalCta.whatsappMessage}
              size="lg"
            >
              {finalCta.ctaPrimary}
            </WhatsAppCta>
          </div>

          <dl className="mt-10 space-y-4 text-[16px] text-white/80">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              <a href={business.phone.landlineHref} className="hover:text-gold">
                {business.phone.landline}
              </a>
              <span className="text-white/55">
                WhatsApp {business.phone.whatsappDisplay}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              {business.address.full}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              {business.hours}
            </div>
          </dl>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
