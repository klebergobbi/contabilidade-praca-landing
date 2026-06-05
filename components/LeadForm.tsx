"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { leadForm } from "@/content/site";
import { trackLead } from "@/lib/tracking";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  whatsapp: z
    .string()
    .min(10, "Informe um WhatsApp válido")
    .regex(/[\d()\s-]+/, "Use apenas números"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().max(600).optional(),
  // honeypot anti-spam — deve ficar vazio
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { subject: "" },
  });

  async function onSubmit(values: FormValues) {
    if (values.company) return; // honeypot acionado
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");
      trackLead("form");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[18px] bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-semibold text-graphite-900">
          {leadForm.successTitle}
        </h3>
        <p className="mt-2 text-ink">{leadForm.successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[18px] bg-white p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-graphite-900">
        {leadForm.title}
      </h3>
      <p className="mt-2 text-ink">{leadForm.subtitle}</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-graphite-900">
            {leadForm.fields.name.label}
          </label>
          <Input
            id="name"
            autoComplete="name"
            placeholder={leadForm.fields.name.placeholder}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-graphite-900">
            {leadForm.fields.whatsapp.label}
          </label>
          <Input
            id="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={leadForm.fields.whatsapp.placeholder}
            aria-invalid={!!errors.whatsapp}
            {...register("whatsapp")}
          />
          {errors.whatsapp && (
            <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-graphite-900">
            {leadForm.fields.subject.label}
          </label>
          <Select id="subject" aria-invalid={!!errors.subject} {...register("subject")}>
            <option value="" disabled>
              Selecione...
            </option>
            {leadForm.fields.subject.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-graphite-900">
            {leadForm.fields.message.label}
          </label>
          <Textarea
            id="message"
            placeholder={leadForm.fields.message.placeholder}
            {...register("message")}
          />
        </div>

        {/* honeypot — escondido de usuários reais */}
        <div className="hidden" aria-hidden>
          <label htmlFor="company">Empresa</label>
          <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{leadForm.errorMessage}</p>
      )}

      <Button type="submit" variant="gold" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            {leadForm.submittingLabel}
          </>
        ) : (
          leadForm.submitLabel
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-ink">{leadForm.consent}</p>
    </form>
  );
}
