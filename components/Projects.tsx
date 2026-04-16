"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ChatCircleDots, Brain } from "@phosphor-icons/react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      step: "1",
      name: "Envie o contrato",
      description: "Tire uma foto ou faça upload de um PDF — pode ser um contrato que você vai assinar ou um que já assinou. Nossa IA aceita qualquer formato.",
      icon: <Camera size={56} weight="fill" className="text-[#2EE59D]" />,
    },
    {
      step: "2",
      name: "Conte sua situação",
      description: "Responda algumas perguntas rápidas para contextualizar: qual o tipo de contrato, sua situação e o que você precisa saber. Assim a análise fica personalizada.",
      icon: <ChatCircleDots size={56} weight="fill" className="text-[#2EE59D]" />,
    },
    {
      step: "3",
      name: "Análise personalizada",
      description: "A IA cruza o conteúdo do contrato com o seu contexto e gera uma análise sob medida — destacando riscos, seus direitos e o que você pode fazer na sua situação.",
      icon: <Brain size={56} weight="fill" className="text-[#2EE59D]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-[#E9FBF3]/30 py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0F172A]">
            Como <span className="text-[#2EE59D]">funciona</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Simples, rápido e eficiente. Entenda qualquer contrato em 3 passos
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-start gap-3 sm:gap-6 mb-8 sm:mb-12">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[#2EE59D] rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-[#0F172A] shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-5 sm:p-8 rounded-2xl shadow-lg border border-[#2EE59D]/20">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                      className="text-4xl sm:text-6xl"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#0F172A]">
                        {step.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 sm:left-8 top-10 sm:top-16 w-0.5 h-8 sm:h-12 bg-[#2EE59D]/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Vai assinar ou já assinou? Nos dois casos, clareza faz toda a diferença.
          </p>
          <a
            href="https://app.contrasyai.com/try"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#2EE59D] text-[#0F172A] rounded-lg font-semibold text-sm sm:text-lg hover:bg-[#1FCC8C] hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Analisar um contrato agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


