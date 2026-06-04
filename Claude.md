\# CLAUDE.md — Landing Page Contabilidade Praça



Contexto permanente do projeto. Leia antes de qualquer alteração.



\## O que é este projeto



Landing page de \*\*conversão\*\* (single-page) para a \*\*Contabilidade Praça\*\*, escritório de contabilidade em Floriano-PI com +20 anos de mercado e nota 5,0 no Google. A página recebe \*\*tráfego pago (Google Ads + Meta Ads)\*\*. Meta única de conversão: \*\*iniciar conversa no WhatsApp\*\*. Formulário é caminho secundário.



Princípio que rege todas as decisões, nesta ordem: velocidade → message match com o anúncio → CTA único de WhatsApp → prova social → tracking de conversão.



\## Stack



\- Next.js 14 (App Router) + TypeScript

\- Tailwind CSS (tokens em `tailwind.config.ts`)

\- shadcn/ui + lucide-react

\- react-hook-form + zod (formulário)

\- next/font (self-host) + next/image



\## Comandos



```bash

npm run dev      # desenvolvimento

npm run build    # build de produção

npm run start    # servir build

npm run lint     # lint

```



\## Convenções inegociáveis



\- \*\*Todo texto e dado de contato vive em `/content/site.ts`.\*\* Nenhuma string de copy ou número hardcoded em componente. Trocar headline ou telefone se faz em um único lugar.

\- Cada seção da página é um componente isolado em `/components`.

\- Mobile-first. Testar sempre 360px e 390px primeiro.

\- Função única `trackLead(source)` em `/lib/tracking.ts` para TODA conversão (WhatsApp e form). Nunca duplicar lógica de evento.

\- Links de WhatsApp sempre via `lib/whatsapp.ts`, com `text` pré-preenchido e UTM/gclid/fbclid anexados.

\- IDs de tracking e credenciais só por variável de ambiente. Ver `.env.example`.

\- Português do Brasil em toda a interface.



\## Dados do negócio (fonte da verdade)



```

Nome:        Contabilidade Praça

CNPJ:        07.999.575/0001-09

Endereço:    Av. Getúlio Vargas, 180 - Centro, Floriano - PI, 64800-002

Fixo:        (89) 3522-1700

WhatsApp:    (89) 99415-1373 → https://wa.me/5589994151373

Instagram:   @contabilidadepraca

Google:      5,0 (36 avaliações)

Fundação:    2006 (+20 anos)

Sócios:      Romulo de Oliveira Praça (administrador), Andrea Alves Sousa Praça

```



\## Identidade visual



\- Dourado/amarelo `#F2B705` (marca) · Grafite/preto `#0E1116`–`#1A1F26` (fundos)

\- Branco `#FFFFFF` · cinza claro `#F5F6F8` · cinza texto `#4A4F57`

\- Verde WhatsApp `#25D366` só em CTA de WhatsApp

\- Estética premium: preto + dourado + alta legibilidade. Espaço em branco generoso.



\## TODO antes do go-live (não inventar — confirmar com cliente)



\- \[ ] Número de registro CRC

\- \[ ] Horário de funcionamento

\- \[ ] E-mail oficial

\- \[ ] `NEXT\_PUBLIC\_GA\_ID`, `NEXT\_PUBLIC\_GADS\_ID`, `NEXT\_PUBLIC\_GADS\_CONVERSION\_LABEL`, `NEXT\_PUBLIC\_META\_PIXEL\_ID`

\- \[ ] Texto exato dos depoimentos reais do Google

\- \[ ] Foto da fachada/equipe para a seção Sobre

\- \[ ] Integração real do `/api/lead` (Evolution API / e-mail) — hoje é stub



\## Compliance e tom (atenção, segmento sensível)



\- \*\*Nunca prometer\*\* "menor imposto garantido", isenção ou resultado financeiro específico. Usar "dentro da lei", "planejamento tributário", "no regime certo". Promessas absolutas reprovam em Google Ads e ferem ética contábil.

\- Sem prova social inventada, contagem regressiva falsa ou dark pattern.

\- Banner LGPD obrigatório controlando scripts de tracking não essenciais.



\## Definição de pronto



Lighthouse mobile ≥ 90 nas 4 categorias · JSON-LD AccountingService válido · todos os CTAs disparando `trackLead` · responsivo 360→1280px sem quebra · copy 100% em `/content/site.ts` · `.env.example` e README com TODOs.

