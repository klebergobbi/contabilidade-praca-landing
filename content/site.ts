/**
 * FONTE DA VERDADE de toda a copy e dados de contato da landing page.
 * Nenhuma string de copy ou número de contato deve viver em componente.
 * Trocar headline, telefone ou depoimento se faz AQUI, em um único lugar.
 *
 * Itens marcados com TODO precisam de confirmação do cliente antes do go-live.
 */

export const business = {
  name: "Contabilidade Praça",
  legalName: "Contabilidade Praça",
  cnpj: "07.999.575/0001-09",
  // TODO: confirmar número de registro CRC
  crc: "",
  foundedYear: 2006,
  yearsLabel: "+20 anos",
  address: {
    street: "Av. Getúlio Vargas, 180 - Centro",
    city: "Floriano",
    state: "PI",
    zip: "64800-002",
    full: "Av. Getúlio Vargas, 180 - Centro, Floriano - PI, 64800-002",
  },
  phone: {
    landline: "(89) 3522-1700",
    landlineHref: "tel:+558935221700",
    whatsappDisplay: "(89) 99415-1373",
    whatsappNumber: "5589994151373",
  },
  // TODO: confirmar e-mail oficial
  email: "",
  instagram: {
    handle: "@contabilidadepraca",
    url: "https://instagram.com/contabilidadepraca",
  },
  // TODO: confirmar horário de funcionamento
  hours: "Seg a Sex, 8h às 18h",
  google: {
    rating: "5,0",
    reviews: 36,
    // TODO: substituir pela URL real do perfil no Google
    url: "https://www.google.com/search?q=Contabilidade+Pra%C3%A7a+Floriano",
  },
  owners: ["Rômulo de Oliveira Praça", "Andrea Alves Sousa Praça"],
} as const;

export const seo = {
  title: "Contabilidade em Floriano-PI | Contabilidade Praça",
  description:
    "Escritório de contabilidade em Floriano-PI com +20 anos e nota 5,0 no Google. Abertura de empresa, troca de contador, MEI, Simples Nacional e planejamento tributário dentro da lei. Fale agora no WhatsApp.",
  ogImageAlt: "Contabilidade Praça — contabilidade em Floriano-PI",
} as const;

export const nav = {
  links: [
    { label: "Serviços", href: "#servicos" },
    { label: "Para quem", href: "#para-quem" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  ctaLabel: "Falar no WhatsApp",
} as const;

/**
 * Imagens do site. Fotos atuais são stock licenciado (Unsplash) como
 * referência profissional. TODO go-live: substituir por fotos reais do
 * escritório/equipe da Contabilidade Praça em Floriano-PI.
 */
export const images = {
  hero: {
    src: "/images/hero-consultoria.jpg",
    alt: "Contadores da Contabilidade Praça em atendimento, comemorando resultado com cliente",
  },
  about: {
    src: "/images/sobre-atendimento.jpg",
    alt: "Atendimento próximo da Contabilidade Praça: consultora orientando cliente",
  },
} as const;

export const hero = {
  eyebrow: "Contabilidade em Floriano-PI · +20 anos",
  headline: "Sua empresa no regime certo, sem dor de cabeça com o fisco",
  subheadline:
    "A Contabilidade Praça cuida da abertura, da troca de contador e do dia a dia fiscal da sua empresa com atendimento próximo e planejamento tributário dentro da lei.",
  ctaPrimary: "Falar agora no WhatsApp",
  ctaSecondary: "Pedir uma proposta",
  // chips de prova rápida abaixo do CTA
  proofChips: [
    "Nota 5,0 no Google",
    "+20 anos de mercado",
    "Atendimento humano e direto",
  ],
  whatsappMessage:
    "Olá! Vim pela página da Contabilidade Praça e quero falar sobre a contabilidade da minha empresa.",
} as const;

export const trustBar = {
  items: [
    { value: "5,0", label: "no Google (36 avaliações)" },
    { value: "+20", label: "anos em Floriano-PI" },
    { value: "100%", label: "dentro da lei" },
    { value: "Resp.", label: "rápida no WhatsApp" },
  ],
} as const;

export const services = {
  title: "Como a gente resolve a sua contabilidade",
  subtitle:
    "Tudo o que a sua empresa precisa para ficar em dia, no regime mais vantajoso permitido pela legislação.",
  ctaLabel: "Tirar dúvida no WhatsApp",
  whatsappMessage:
    "Olá! Tenho uma dúvida sobre os serviços de contabilidade da Contabilidade Praça.",
  items: [
    {
      icon: "Rocket",
      title: "Abertura de empresa",
      description:
        "CNPJ aberto do jeito certo, com o enquadramento e as atividades adequadas ao seu negócio — sem retrabalho lá na frente.",
    },
    {
      icon: "ArrowLeftRight",
      title: "Troca de contador",
      description:
        "Migração tranquila e sem custo de adesão. Cuidamos da transição com seu contador atual e organizamos tudo.",
    },
    {
      icon: "Scale",
      title: "Planejamento tributário",
      description:
        "Análise do seu faturamento para escolher o regime certo (MEI, Simples, Presumido) e pagar o imposto correto, dentro da lei.",
    },
    {
      icon: "FileText",
      title: "Obrigações em dia",
      description:
        "Guias, declarações e folha entregues no prazo. Você recebe avisos claros do que pagar e quando.",
    },
    {
      icon: "Users",
      title: "Departamento pessoal",
      description:
        "Admissão, folha de pagamento, férias e rescisões conduzidas com segurança e dentro das normas trabalhistas.",
    },
    {
      icon: "MessageSquareText",
      title: "Suporte de verdade",
      description:
        "Um contador que responde. Dúvida sobre nota, imposto ou abertura? Você fala com gente, direto no WhatsApp.",
    },
  ],
} as const;

export const audience = {
  title: "Para quem é a Contabilidade Praça",
  subtitle:
    "Se você está em um destes momentos, a gente já ajudou dezenas de empresas iguais à sua.",
  items: [
    {
      title: "Vai abrir o CNPJ",
      description:
        "Quer sair do CPF, formalizar o negócio ou abrir a primeira empresa com orientação do começo ao fim.",
    },
    {
      title: "Está insatisfeito com o contador atual",
      description:
        "Sente falta de retorno, recebe surpresas de imposto ou nunca entende o que está pagando.",
    },
    {
      title: "MEI que cresceu",
      description:
        "Faturou acima do limite ou contratou e precisa migrar para o Simples sem sustos.",
    },
    {
      title: "Profissional liberal e prestador de serviço",
      description:
        "Médico, dentista, engenheiro, advogado, consultor — quem precisa do regime certo para não pagar imposto a mais.",
    },
  ],
} as const;

export const process = {
  title: "Começar é simples",
  subtitle: "Três passos e a sua contabilidade já fica em boas mãos.",
  steps: [
    {
      number: "01",
      title: "Você chama no WhatsApp",
      description:
        "Conta rapidamente o seu momento: abertura, troca de contador ou dúvida sobre imposto.",
    },
    {
      number: "02",
      title: "A gente analisa e orienta",
      description:
        "Avaliamos o seu caso e indicamos o melhor caminho e regime, com transparência total sobre custos.",
    },
    {
      number: "03",
      title: "Cuidamos de tudo",
      description:
        "Assumimos a parte burocrática e fiscal. Você foca no seu negócio com a contabilidade em dia.",
    },
  ],
} as const;

export const about = {
  title: "Mais de 20 anos cuidando da contabilidade de Floriano",
  paragraphs: [
    "A Contabilidade Praça é um escritório de Floriano-PI fundado em 2006. Em mais de duas décadas, construímos uma reputação baseada em atendimento próximo, responsabilidade e clareza — reconhecida pela nota 5,0 no Google.",
    "Sob a direção de Rômulo de Oliveira Praça e Andrea Alves Sousa Praça, atendemos empresas de diversos portes e segmentos, sempre com o mesmo compromisso: deixar a sua empresa em dia, no regime certo e sem complicação.",
  ],
  highlights: [
    "Escritório físico no Centro de Floriano-PI",
    "Atendimento humano, sem robô e sem fila",
    "Transparência total sobre custos e impostos",
  ],
  // TODO: foto da fachada/equipe para esta seção
  imageAlt: "Equipe da Contabilidade Praça em Floriano-PI",
} as const;

export const testimonials = {
  title: "Quem confia na Contabilidade Praça",
  subtitle: "Nota 5,0 no Google, com avaliações de clientes reais.",
  // TODO: substituir pelos depoimentos reais extraídos do Google.
  // Mantidos genéricos e verdadeiros até a confirmação do cliente.
  items: [
    {
      name: "Cliente verificado no Google",
      role: "Avaliação 5 estrelas",
      quote:
        "Atendimento atencioso e profissional. Resolvem tudo com agilidade e explicam de forma simples.",
    },
    {
      name: "Cliente verificado no Google",
      role: "Avaliação 5 estrelas",
      quote:
        "Fiz a troca de contador e foi tranquilo. Hoje tenho retorno rápido sempre que preciso.",
    },
    {
      name: "Cliente verificado no Google",
      role: "Avaliação 5 estrelas",
      quote:
        "Profissionais sérios e de confiança. Recomendo para quem quer contabilidade bem feita em Floriano.",
    },
  ],
} as const;

export const faq = {
  title: "Perguntas frequentes",
  subtitle: "Se a sua dúvida não estiver aqui, é só chamar no WhatsApp.",
  items: [
    {
      question: "Vocês atendem empresas de fora de Floriano?",
      answer:
        "Sim. Além do atendimento presencial no Centro de Floriano-PI, atendemos clientes de outras cidades de forma 100% digital, com a mesma proximidade pelo WhatsApp.",
    },
    {
      question: "Trocar de contador dá trabalho ou tem custo?",
      answer:
        "Não. A migração é tranquila e sem taxa de adesão. Cuidamos da transição com o seu contador atual e organizamos toda a documentação para você não ter dor de cabeça.",
    },
    {
      question: "Vocês ajudam a escolher o melhor regime tributário?",
      answer:
        "Sim. Analisamos o seu faturamento e a sua atividade para indicar o enquadramento mais vantajoso permitido pela legislação — sempre dentro da lei, com planejamento tributário transparente.",
    },
    {
      question: "Sou MEI e cresci. Preciso mudar alguma coisa?",
      answer:
        "Provavelmente sim. Ao ultrapassar o limite do MEI ou ao contratar funcionário, a migração para o Simples Nacional costuma ser necessária. A gente avalia o seu caso e conduz a mudança com segurança.",
    },
    {
      question: "Quanto custa a contabilidade da minha empresa?",
      answer:
        "Depende do porte e da atividade. Por isso preferimos avaliar o seu caso antes de passar um valor — assim a proposta é justa e sem surpresa. Chame no WhatsApp para receber uma proposta.",
    },
  ],
} as const;

export const finalCta = {
  title: "Pronto para deixar a contabilidade em boas mãos?",
  subtitle:
    "Fale agora com a Contabilidade Praça e descubra o caminho certo para a sua empresa. Resposta rápida e sem compromisso.",
  ctaPrimary: "Falar no WhatsApp agora",
  whatsappMessage:
    "Olá! Quero uma proposta da Contabilidade Praça para a contabilidade da minha empresa.",
} as const;

export const leadForm = {
  title: "Prefere que a gente entre em contato?",
  subtitle:
    "Deixe seus dados e retornamos pelo WhatsApp. É rápido e sem compromisso.",
  fields: {
    name: { label: "Nome", placeholder: "Seu nome" },
    whatsapp: { label: "WhatsApp", placeholder: "(89) 9 9999-9999" },
    subject: {
      label: "Como podemos ajudar?",
      options: [
        "Abrir empresa (CNPJ)",
        "Trocar de contador",
        "Sou MEI e quero crescer",
        "Planejamento tributário",
        "Outro assunto",
      ],
    },
    message: { label: "Mensagem (opcional)", placeholder: "Conte um pouco do seu caso" },
  },
  submitLabel: "Quero ser contatado",
  submittingLabel: "Enviando...",
  successTitle: "Recebemos o seu contato!",
  successMessage:
    "Em breve a Contabilidade Praça fala com você. Se preferir, chame agora mesmo no WhatsApp.",
  errorMessage:
    "Não conseguimos enviar agora. Tente novamente ou fale direto no WhatsApp.",
  consent:
    "Ao enviar, você concorda em ser contatado pela Contabilidade Praça sobre o seu pedido.",
} as const;

export const whatsappFloat = {
  label: "Falar no WhatsApp",
  message:
    "Olá! Vim pela página da Contabilidade Praça e quero falar com um contador.",
} as const;

export const lgpd = {
  text: "Usamos cookies e tecnologias de medição para entender o desempenho dos nossos anúncios e melhorar sua experiência. Você pode aceitar ou recusar os cookies não essenciais.",
  accept: "Aceitar",
  reject: "Recusar",
  policyLabel: "Política de Privacidade",
  policyHref: "#",
} as const;

export const footer = {
  tagline: "Contabilidade em Floriano-PI desde 2006.",
  rightsTemplate: "© {year} Contabilidade Praça. Todos os direitos reservados.",
  // Disclaimer de compliance (segmento sensível)
  disclaimer:
    "As informações desta página têm caráter informativo. Cada caso é avaliado individualmente e todo serviço é prestado em conformidade com a legislação vigente.",
} as const;
