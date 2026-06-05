import { Phone, MapPin, Clock } from "lucide-react";
import { finalCta, business } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { LeadForm } from "@/components/LeadForm";

export function FinalCta() {
  return (
    <section id="contato" className="bg-graphite-950 py-20 text-white sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-semibold tracking-tighter sm:text-[2.75rem]">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-snug text-white/65">
            {finalCta.subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCta
              source="whatsapp_final_cta"
              message={finalCta.whatsappMessage}
              size="lg"
            >
              {finalCta.ctaPrimary}
            </WhatsAppCta>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          <dl className="space-y-5 text-[17px]">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              <dd className="flex flex-wrap items-center gap-x-2">
                <a href={business.phone.landlineHref} className="hover:text-gold">
                  {business.phone.landline}
                </a>
                <span className="text-white/60">WhatsApp {business.phone.whatsappDisplay}</span>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              <dd className="text-white/85">{business.address.full}</dd>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              <dd className="text-white/85">{business.hours}</dd>
            </div>
          </dl>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
