"use client";

import * as React from "react";
import { lgpd } from "@/content/site";
import { getConsent, setConsent } from "@/lib/consent";
import { Button } from "@/components/ui/button";

export function LgpdBanner() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Só aparece se o usuário ainda não decidiu.
    if (getConsent() === null) setOpen(true);
  }, []);

  function decide(value: "granted" | "denied") {
    setConsent(value);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de privacidade"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-[28px] border border-ink/10 bg-white p-5 shadow-card sm:inset-x-5 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink">
          {lgpd.text}{" "}
          <a
            href={lgpd.policyHref}
            className="font-medium text-ink underline underline-offset-2 hover:text-gold-700"
          >
            {lgpd.policyLabel}
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => decide("denied")}>
            {lgpd.reject}
          </Button>
          <Button variant="gold" size="sm" onClick={() => decide("granted")}>
            {lgpd.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
