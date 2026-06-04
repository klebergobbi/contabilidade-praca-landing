# Landing Page — Contabilidade Praça

Landing page de **conversão** (single-page) da **Contabilidade Praça** (Floriano-PI).
Recebe tráfego pago (Google Ads + Meta Ads). Meta única: **iniciar conversa no WhatsApp**.

> Antes de qualquer alteração, leia o `CLAUDE.md` — contexto permanente e convenções inegociáveis.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (tokens em `tailwind.config.ts`)
- componentes no padrão **shadcn/ui** + **lucide-react**
- **react-hook-form** + **zod** (formulário)
- **next/font** (self-host: Inter + Sora) + **next/image**

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # lint
```

## Estrutura

```
app/
  layout.tsx        # metadata, fonts, JSON-LD, LGPD, Analytics
  page.tsx          # composição das seções
  globals.css       # base Tailwind + reduce-motion
  api/lead/route.ts # endpoint do formulário (STUB)
  robots.ts / sitemap.ts
components/         # uma seção = um componente
  ui/               # primitivos (button, input, textarea, select)
content/site.ts     # FONTE DA VERDADE de toda a copy e contato
lib/
  tracking.ts       # trackLead(source) — ponto único de conversão
  whatsapp.ts       # buildWhatsAppUrl() — links com UTM/gclid/fbclid
  consent.ts        # estado de consentimento LGPD
  utils.ts          # cn()
```

## Convenções (não negociáveis)

- Toda copy e dado de contato vivem em `content/site.ts`. Nada hardcoded em componente.
- Toda conversão passa por `trackLead(source)` (`lib/tracking.ts`). Nunca duplicar evento.
- Links de WhatsApp só via `buildWhatsAppUrl()` (`lib/whatsapp.ts`).
- IDs de tracking e credenciais só por variável de ambiente (`.env.example`).
- Mobile-first: testar 360px e 390px primeiro.
- Scripts de tracking só carregam após consentimento LGPD (banner controla).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha. Resumo:

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_GADS_ID` | Google Ads (AW-XXXXXXXXXX) |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | Label da conversão Google Ads |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `NEXT_PUBLIC_SITE_URL` | URL canônica de produção |
| `EVOLUTION_API_*` | Integração WhatsApp do `/api/lead` (futuro) |
| `LEAD_NOTIFICATION_EMAIL` | E-mail de destino dos leads (futuro) |

## TODO antes do go-live (confirmar com o cliente — não inventar)

- [ ] Número de registro **CRC** → `content/site.ts` (`business.crc`)
- [ ] **Horário de funcionamento** real → `business.hours`
- [ ] **E-mail oficial** → `business.email`
- [ ] IDs de tracking: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GADS_ID`, `NEXT_PUBLIC_GADS_CONVERSION_LABEL`, `NEXT_PUBLIC_META_PIXEL_ID`
- [ ] **Depoimentos reais** do Google → `testimonials.items`
- [ ] **Foto** da fachada/equipe → seção `About`
- [ ] Integração real do `/api/lead` (Evolution API / e-mail) — hoje é stub
- [ ] URL real do perfil do Google → `business.google.url`
- [ ] Página/conteúdo da **Política de Privacidade** (link do banner LGPD)
- [ ] Imagem Open Graph (`/opengraph-image`)

## Definição de pronto

- Lighthouse mobile ≥ 90 nas 4 categorias
- JSON-LD `AccountingService` válido
- Todos os CTAs disparando `trackLead`
- Responsivo 360→1280px sem quebra
- Copy 100% em `content/site.ts`

## Compliance (segmento sensível)

Nunca prometer "menor imposto garantido", isenção ou resultado financeiro específico.
Usar "dentro da lei", "planejamento tributário", "no regime certo". Sem prova social
inventada, contagem regressiva falsa ou dark pattern. Banner LGPD obrigatório.
