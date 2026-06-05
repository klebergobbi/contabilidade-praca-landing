"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { whatsappFloat } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackLead } from "@/lib/tracking";

export function WhatsAppFloat() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppUrl(whatsappFloat.message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead("whatsapp_float")}
      aria-label={whatsappFloat.label}
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-pill bg-whatsapp text-white shadow-card transition-all duration-300 hover:bg-whatsapp-dark animate-pulse-ring sm:h-16 sm:w-16 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
    </a>
  );
}
