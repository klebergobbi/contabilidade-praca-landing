/**
 * Geração de links de WhatsApp — ponto ÚNICO de verdade.
 *
 * Todo link de WhatsApp do site sai daqui, com:
 *  - número oficial vindo de content/site.ts
 *  - mensagem (`text`) pré-preenchida
 *  - parâmetros de campanha (utm_*, gclid, fbclid) anexados ao texto,
 *    para o atendimento saber a origem do lead.
 */

import { business } from "@/content/site";

const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

/** Lê os parâmetros de campanha da URL atual (vazio no SSR). */
function readCampaignParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  for (const key of CAMPAIGN_KEYS) {
    const value = params.get(key);
    if (value) result[key] = value;
  }
  return result;
}

/** Anexa os parâmetros de campanha ao final da mensagem, de forma legível. */
function appendCampaign(message: string): string {
  const campaign = readCampaignParams();
  const entries = Object.entries(campaign);
  if (entries.length === 0) return message;
  const suffix = entries.map(([k, v]) => `${k}: ${v}`).join(" | ");
  return `${message}\n\n(origem: ${suffix})`;
}

/**
 * Monta a URL completa do WhatsApp (wa.me) com texto pré-preenchido
 * e rastreio de campanha anexado.
 */
export function buildWhatsAppUrl(message: string): string {
  const text = encodeURIComponent(appendCampaign(message));
  return `https://wa.me/${business.phone.whatsappNumber}?text=${text}`;
}
