"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Lightbulb, CheckCircle, SmileyWink } from "@phosphor-icons/react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      title: "Se precava antes de assinar",
      description:
        "Identifique taxas escondidas, multas e obrigações antes de se comprometer. Tome decisões com clareza total.",
      icon: <ShieldCheck size={56} weight="fill" className="text-[#2EE59D]" />,
      color: "from-[#2EE59D]/10 to-[#2EE59D]/5",
    },
    {
      title: "Conheça seus direitos depois",
      description:
        "Já assinou? Descubra o que o contrato realmente diz e quais são seus direitos. Saiba o que pode contestar ou renegociar.",
      icon: <Lightbulb size={56} weight="fill" className="text-blue-500" />,
      color: "from-blue-500/10 to-blue-400/5",
    },
    {
      title: "Entenda qualquer contrato",
      description:
        "Transforme juridiquês complexo em linguagem clara. Saiba exatamente o que está escrito, sem confusão, em qualquer momento.",
      icon: <CheckCircle size={56} weight="fill" className="text-green-500" />,
      color: "from-green-500/10 to-green-400/5",
    },
    {
      title: "Nunca mais no escuro",
      description:
        "Chega de assinar sem entender ou de descobrir problemas tarde demais. Contrasy te dá clareza — antes ou depois.",
      icon: <SmileyWink size={56} weight="fill" className="text-purple-500" />,
      color: "from-purple-500/10 to-purple-400/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="benefits"
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
            Os benefícios de usar{" "}
            <span className="text-[#2EE59D]">Contrasy</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Clareza e tranquilidade em cada contrato — seja antes ou depois de assinar
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${benefit.color} p-5 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#2EE59D]/20 overflow-hidden`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="text-4xl sm:text-6xl mb-4 sm:mb-6"
              >
                {benefit.icon}
              </motion.div>

              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-[#0F172A]">
                {benefit.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative element */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2EE59D] rounded-full blur-3xl"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm sm:text-lg text-gray-600 mb-2">
            Contrasy te dá clareza para agir com confiança
          </p>
          <p className="text-base sm:text-xl font-semibold text-[#0F172A]">
            Antes de assinar, para se proteger. Depois, para conhecer seus direitos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
