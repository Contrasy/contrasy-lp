"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scales, FileText, Lock } from "@phosphor-icons/react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trustPoints = [
    {
      title: "Não substitui um advogado",
      description: "Somos uma ferramenta de análise, não aconselhamento jurídico.",
      icon: <Scales size={32} weight="fill" className="text-[#2EE59D]" />,
    },
    {
      title: "Contratos novos e antigos",
      description: "Aluguel, serviços, compra e venda, termos de uso — novos ou antigos.",
      icon: <FileText size={32} weight="fill" className="text-[#2EE59D]" />,
    },
    {
      title: "Seus dados estão seguros",
      description: "Criptografia ponta a ponta. Seus dados nunca são compartilhados.",
      icon: <Lock size={32} weight="fill" className="text-[#2EE59D]" />,
    },
  ];

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
      id="trust"
      ref={ref}
      className="flex items-center justify-center bg-[#E9FBF3]/30 py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#0F172A]">
            Confiança e{" "}
            <span className="text-[#2EE59D]">transparência</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ajudamos você a entender contratos do dia a dia — com honestidade e segurança
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#2EE59D]/20 p-4 sm:p-6 flex items-start gap-4"
            >
              <div className="shrink-0 mt-0.5">
                {point.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
