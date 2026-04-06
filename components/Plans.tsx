"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, XCircle, Star } from "@phosphor-icons/react";

const plans = [
  {
    name: "Free",
    description:
      "Experimente o Contrasy gratuitamente. Ideal para conhecer a plataforma.",
    price: "Grátis",
    period: "",
    cta: "Começar Grátis",
    highlighted: false,
    included: [
      "1 usuário",
      "até 3 contratos cadastrados",
      "até 5 análises no total",
      "acesso às análises por 3 dias",
      "resumo do contrato",
      "pontuação de risco",
    ],
    excluded: [
      "histórico permanente de análises",
      "exportação de relatório em PDF",
      "personalização da IA",
      "workspace com múltiplos membros",
      "agentes de IA personalizados",
    ],
  },
  {
    name: "Pro",
    description:
      "Para advogados autônomos e freelancers. Controle total das análises e histórico.",
    price: "R$ 149",
    period: "/ mês",
    cta: "Selecionar Plano",
    highlighted: true,
    included: [
      "1 usuário",
      "até 100 contratos cadastrados",
      "até 100 análises por mês",
      "histórico permanente de análises",
      "exportação de relatório em PDF",
      "recomendações da IA",
      "personalização básica da IA",
    ],
    excluded: [
      "workspace com múltiplos membros",
      "agentes de IA personalizados",
      "questionários personalizados de análise",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Para escritórios de advocacia e empresas. Solução completa com equipe e IA personalizada.",
    price: "R$ 499",
    period: "/ mês",
    cta: "Selecionar Plano",
    highlighted: false,
    included: [
      "até 10 usuários",
      "até 1000 análises por mês",
      "contratos ilimitados",
      "workspace com múltiplos membros",
      "gerenciamento de membros e permissões",
      "agentes de IA personalizados",
      "questionários personalizados de análise",
      "contextos jurídicos personalizados",
      "templates de análise",
      "histórico completo de análises",
      "exportação avançada de relatórios",
      "suporte prioritário",
    ],
    excluded: [],
  },
];

const Plans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="plans"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0F172A]">
            Selecione o plano ideal para{" "}
            <span className="text-[#2EE59D]">você e sua equipe</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto items-start"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 sm:p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-[#2EE59D] bg-white"
                  : "border border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <Star
                  size={28}
                  weight="fill"
                  className="text-[#2EE59D] mt-1 shrink-0"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 text-sm sm:text-base ml-1">
                    {plan.period}
                  </span>
                )}
              </div>

              <div className="border-t border-gray-100 pt-6 flex-1">
                <ul className="space-y-3">
                  {plan.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="text-[#2EE59D] mt-0.5 shrink-0"
                      />
                      <span className="text-sm sm:text-base text-[#0F172A]">
                        {item}
                      </span>
                    </li>
                  ))}
                  {plan.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle
                        size={20}
                        weight="fill"
                        className="text-gray-300 mt-0.5 shrink-0"
                      />
                      <span className="text-sm sm:text-base text-gray-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full mt-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                  plan.highlighted
                    ? "bg-[#2EE59D] text-[#0F172A] hover:bg-[#1FCC8C] hover:shadow-xl"
                    : "border-2 border-[#2EE59D] text-[#2EE59D] hover:bg-[#2EE59D] hover:text-[#0F172A] hover:shadow-xl"
                }`}
              >
                {plan.cta}
              </button>

              {!plan.highlighted && plan.price === "Grátis" ? null : (
                plan.price !== "Grátis" && (
                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
                    Cancele quando quiser
                  </p>
                )
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
