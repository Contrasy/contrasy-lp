"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a análise do Contrasy?",
      answer:
        "Você tira uma foto ou faz upload do contrato em PDF — pode ser um contrato que vai assinar ou um que já assinou. Nossa IA processa o documento, identifica cláusulas importantes, riscos, taxas escondidas e obrigações. Você recebe um resumo claro em linguagem simples, com prós, contras e seus direitos.",
    },
    {
      question: "Meus documentos estão seguros?",
      answer:
        "Sim! Usamos criptografia de ponta a ponta para proteger seus dados. Seus contratos são processados pela IA e depois deletados automaticamente. Nunca compartilhamos ou vendemos suas informações. Sua privacidade é nossa prioridade.",
    },
    {
      question: "Quanto tempo leva a análise?",
      answer:
        "A análise completa leva apenas alguns segundos! Nossa IA processa o documento rapidamente e você recebe um resumo claro com alertas e pontos de atenção quase instantaneamente.",
    },
    {
      question: "Contrasy substitui um advogado?",
      answer:
        "Não. Contrasy é uma ferramenta de análise e compreensão para contratos comuns do dia a dia. Para situações complexas, contratos de alto valor ou dúvidas jurídicas específicas, sempre recomendamos consultar um advogado especializado.",
    },
    {
      question: "Posso analisar um contrato que já assinei?",
      answer:
        "Sim! Contrasy funciona tanto para contratos que você vai assinar quanto para os que já assinou. Se já assinou, te ajudamos a entender o que está escrito, quais são seus direitos e o que pode ser contestado ou renegociado.",
    },
    {
      question: "A análise é 100% precisa?",
      answer:
        "Nossa IA é treinada para identificar cláusulas comuns e riscos frequentes, mas não é perfeita. Use Contrasy como uma camada adicional de clareza e compreensão, não como substituto de aconselhamento jurídico.",
    },
    {
      question: "Que formatos de documento são aceitos?",
      answer:
        "Aceitamos fotos, PDFs e arquivos de imagem. Nossa IA processa o texto automaticamente usando reconhecimento ótico de caracteres (OCR), então funciona mesmo com contratos impressos ou manuscritos.",
    },
    {
      question: "Que tipos de contratos posso analisar?",
      answer:
        "Contrasy funciona melhor com contratos comuns do dia a dia: aluguel, serviços, assinaturas, compra e venda, termos de uso. Pode ser um contrato novo ou um que já assinou. Para contratos corporativos complexos ou acordos internacionais, recomendamos consultar um advogado.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">
            Perguntas <span className="text-[#2EE59D]">frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre como o Contrasy funciona
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#0F172A] pr-8">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#2EE59D] flex-shrink-0"
                >
                  <CaretDown size={24} weight="bold" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ainda com dúvidas? Estamos aqui para ajudar
          </p>
          <button className="px-8 py-3 bg-[#2EE59D] text-[#0F172A] rounded-lg font-semibold hover:bg-[#1FCC8C] hover:shadow-xl hover:scale-105 transition-all">
            Falar com suporte
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
