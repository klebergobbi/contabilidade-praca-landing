/**
 * Tracking de conversão — ponto ÚNICO de verdade.
 *
 * Regra do projeto: TODA conversão (WhatsApp ou formulário) passa por
 * `trackLead(source)`. Nunca duplicar lógica de evento em componente.
 *
 * Os scripts de medição (GA4, Google Ads, Meta Pixel) só são carregados
 * após consentimento LGPD — ver components/LgpdBanner.tsx e lib/consent.ts.
 * Aqui apenas disparamos eventos se as funções globais existirem.
 */

export type LeadSource =
  | "whatsapp_header"
  | "whatsapp_hero"
  | "whatsapp_float"
  | "whatsapp_services"
  | "whatsapp_final_cta"
  | "whatsapp_footer"
  | "form";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;
const GADS_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;

/**
 * Registra um lead/conversão e propaga para todas as plataformas configuradas.
 * Seguro para SSR: faz no-op fora do browser.
 */
export function trackLead(source: LeadSource): void {
  if (typeof window === "undefined") return;

  const payload = { source, location: window.location.pathname };

  // GA4 — evento de geração de lead
  window.gtag?.("event", "generate_lead", {
    method: source,
    ...payload,
  });

  // Google Ads — conversão (precisa de send_to: AW-XXXX/LABEL)
  if (GADS_ID && GADS_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: `${GADS_ID}/${GADS_LABEL}`,
      ...payload,
    });
  }

  // Meta Pixel — evento padrão de lead
  window.fbq?.("track", "Lead", payload);

  if (process.env.NODE_ENV !== "production") {
    // Ajuda a validar disparos durante o desenvolvimento.
    // eslint-disable-next-line no-console
    console.info("[trackLead]", source);
  }
}
