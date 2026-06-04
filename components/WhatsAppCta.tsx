"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackLead, type LeadSource } from "@/lib/tracking";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppCtaProps {
  source: LeadSource;
  message: string;
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  withIcon?: boolean;
}

/**
 * Link de WhatsApp padronizado. Único caminho para CTAs de WhatsApp:
 * monta a URL via lib/whatsapp e dispara trackLead via lib/tracking.
 */
export function WhatsAppCta({
  source,
  message,
  children,
  variant = "whatsapp",
  size = "default",
  className,
  withIcon = true,
}: WhatsAppCtaProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead(source)}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {withIcon ? <MessageCircle className="h-5 w-5" aria-hidden /> : null}
      {children}
    </a>
  );
}
