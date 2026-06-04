import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Recebe leads do formulário.
 *
 * STUB: hoje apenas valida e registra. A integração real (Evolution API
 * para WhatsApp e/ou e-mail) é um TODO de go-live — ver CLAUDE.md e
 * variáveis EVOLUTION_* / LEAD_NOTIFICATION_EMAIL em .env.example.
 */

const leadSchema = z.object({
  name: z.string().min(2).max(120),
  whatsapp: z.string().min(10).max(20),
  subject: z.string().min(1).max(120),
  message: z.string().max(600).optional(),
  company: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  // honeypot acionado → finge sucesso para não dar pistas ao bot
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  // TODO: integrar com Evolution API (WhatsApp) e/ou e-mail.
  // Por enquanto, apenas loga no servidor.
  const { name, whatsapp, subject } = parsed.data;
  console.info("[lead] novo contato:", { name, whatsapp, subject });

  return NextResponse.json({ ok: true });
}
