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
      title: "Contrasy não substitui um advogado",
      description:
        "Somos uma ferramenta de análise e compreensão. Para situações complexas ou contratos de alto valor, recomendamos consultar um advogado — mas podemos te ajudar a entender o básico.",
      icon: <Scales size={56} weight="fill" className="text-[#2EE59D]" />,
    },
    {
      title: "Funciona para contratos novos e antigos",
      description:
        "Analise contratos que vai assinar ou documentos que já assinou. Aluguel, serviços, assinaturas, compra e venda, termos de uso — tudo do dia a dia.",
      icon: <FileText size={56} weight="fill" className="text-[#2EE59D]" />,
    },
    {
      title: "Seus documentos estão seguros",
      description:
        "Usamos criptografia de ponta a ponta. Seus contratos são processados e depois deletados automaticamente. Nunca compartilhamos ou vendemos seus dados.",
      icon: <Lock size={56} weight="fill" className="text-[#2EE59D]" />,
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
            Confiança e{" "}
            <span className="text-[#2EE59D]">transparência</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Queremos ser honestos sobre o que fazemos e como ajudamos
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#2EE59D]/20 p-5 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="text-4xl sm:text-6xl mb-4 sm:mb-6"
              >
                {point.icon}
              </motion.div>

              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0F172A]">
                {point.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg border-2 border-[#2EE59D]/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#0F172A]">
              Nossa missão
            </h3>
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              Ajudar você a entender contratos comuns —{" "}
              <strong className="text-[#0F172A]">antes de assinar para se precaver, ou depois para conhecer seus direitos</strong>.{" "}
              Somos uma camada de clareza e compreensão, não substituímos o aconselhamento jurídico profissional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
