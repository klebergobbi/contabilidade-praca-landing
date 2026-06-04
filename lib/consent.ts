/**
 * Estado de consentimento LGPD para scripts não essenciais (tracking).
 * Persistido em localStorage. O LgpdBanner escreve aqui; o Analytics lê.
 */

export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "cp_consent_v1";
const EVENT_NAME = "cp:consent-change";

/** Lê o consentimento salvo. Retorna null se o usuário ainda não decidiu. */
export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "granted" || raw === "denied" ? raw : null;
}

/** Salva a decisão do usuário e notifica os ouvintes (Analytics). */
export function setConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }));
}

/** Inscreve um ouvinte para mudanças de consentimento. Retorna o unsubscribe. */
export function onConsentChange(
  handler: (value: ConsentValue) => void,
): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = (e: Event) => handler((e as CustomEvent<ConsentValue>).detail);
  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}
