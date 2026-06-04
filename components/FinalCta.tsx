import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { finalCta, business } from "@/content/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { LeadForm } from "@/components/LeadForm";

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-graphite-900 py-20 text-white sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]"
      />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/75">
            {finalCta.subtitle}
          </p>

          <div className="mt-8">
            <WhatsAppCta
              source="whatsapp_final_cta"
              message={finalCta.whatsappMessage}
              size="lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {finalCta.ctaPrimary}
            </WhatsAppCta>
          </div>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold" aria-hidden />
              <dd>
                <a href={business.phone.landlineHref} className="hover:text-gold">
                  {business.phone.landline}
                </a>{" "}
                · WhatsApp {business.phone.whatsappDisplay}
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold" aria-hidden />
              <dd>{business.address.full}</dd>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gold" aria-hidden />
              <dd>{business.hours}</dd>
            </div>
          </dl>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
