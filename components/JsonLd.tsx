export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Contrasy",
    url: "https://contrasyai.com",
    description:
      "Análise de contratos com inteligência artificial. Identifique cláusulas escondidas, riscos e taxas em segundos.",
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Contrasy",
    url: "https://contrasyai.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Analise contratos com IA e identifique cláusulas escondidas, riscos e taxas antes que seja tarde demais.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funciona a análise do Contrasy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você tira uma foto ou faz upload do contrato em PDF — pode ser um contrato que vai assinar ou um que já assinou. Nossa IA processa o documento, identifica cláusulas importantes, riscos, taxas escondidas e obrigações. Você recebe um resumo claro em linguagem simples, com prós, contras e seus direitos.",
        },
      },
      {
        "@type": "Question",
        name: "Meus documentos estão seguros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Usamos criptografia de ponta a ponta para proteger seus dados. Seus contratos são processados pela IA e depois deletados automaticamente. Nunca compartilhamos ou vendemos suas informações. Sua privacidade é nossa prioridade.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva a análise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A análise completa leva apenas alguns segundos! Nossa IA processa o documento rapidamente e você recebe um resumo claro com alertas e pontos de atenção quase instantaneamente.",
        },
      },
      {
        "@type": "Question",
        name: "Contrasy substitui um advogado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. Contrasy é uma ferramenta de análise e compreensão para contratos comuns do dia a dia. Para situações complexas, contratos de alto valor ou dúvidas jurídicas específicas, sempre recomendamos consultar um advogado especializado.",
        },
      },
      {
        "@type": "Question",
        name: "Posso analisar um contrato que já assinei?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Contrasy funciona tanto para contratos que você vai assinar quanto para os que já assinou. Se já assinou, te ajudamos a entender o que está escrito, quais são seus direitos e o que pode ser contestado ou renegociado.",
        },
      },
      {
        "@type": "Question",
        name: "A análise é 100% precisa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nossa IA é treinada para identificar cláusulas comuns e riscos frequentes, mas não é perfeita. Use Contrasy como uma camada adicional de clareza e compreensão, não como substituto de aconselhamento jurídico.",
        },
      },
      {
        "@type": "Question",
        name: "Que formatos de documento são aceitos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aceitamos fotos, PDFs e arquivos de imagem. Nossa IA processa o texto automaticamente usando reconhecimento ótico de caracteres (OCR), então funciona mesmo com contratos impressos ou manuscritos.",
        },
      },
      {
        "@type": "Question",
        name: "Que tipos de contratos posso analisar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contrasy funciona melhor com contratos comuns do dia a dia: aluguel, serviços, assinaturas, compra e venda, termos de uso. Pode ser um contrato novo ou um que já assinou. Para contratos corporativos complexos ou acordos internacionais, recomendamos consultar um advogado.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
