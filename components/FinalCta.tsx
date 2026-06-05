import { Phone, MapPin, Clock } from "lucide-react";
import { finalCta, business } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { LeadForm } from "@/components/LeadForm";

export function FinalCta() {
  return (
    <section id="contato" className="bg-cream pb-24 pt-4 sm:pb-32">
      <div className="container">
        <div className="overflow-hidden rounded-stadium bg-ink px-6 py-14 sm:px-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="max-w-md font-display text-[2.2rem] leading-tight tracking-tighter text-cream sm:text-[2.8rem]">
                {finalCta.title}
              </h2>
              <p className="mt-5 max-w-md text-[18px] leading-relaxed text-cream/65">
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

              <dl className="mt-10 space-y-4 text-[16px] text-cream/85">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a href={business.phone.landlineHref} className="hover:text-gold">
                    {business.phone.landline}
                  </a>
                  <span className="text-cream/55">
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
        </div>
      </div>
    </section>
  );
}
