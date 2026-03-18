"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, MagnifyingGlass, ChatText, Scales } from "@phosphor-icons/react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Camera size={56} weight="fill" className="text-[#2EE59D]" />,
      title: "Análise por foto ou PDF",
      description:
        "Tire uma foto ou faça upload de qualquer contrato — novo ou já assinado. Nossa IA processa o documento em segundos.",
    },
    {
      icon: <MagnifyingGlass size={56} weight="bold" className="text-[#2EE59D]" />,
      title: "Identifica pontos de atenção",
      description:
        "Destacamos cláusulas com taxas, multas ou obrigações que você precisa conhecer — para se precaver ou para saber seus direitos.",
    },
    {
      icon: <ChatText size={56} weight="fill" className="text-[#2EE59D]" />,
      title: "Linguagem simples",
      description:
        "Transformamos juridiquês em linguagem clara e objetiva. Entenda o que você concordou ou está prestes a concordar.",
    },
    {
      icon: <Scales size={56} weight="fill" className="text-[#2EE59D]" />,
      title: "Seus direitos e opções",
      description:
        "Mostramos os riscos e benefícios do contrato, e o que você pode fazer — seja antes de assinar ou depois.",
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
      id="features"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">
            Como o Contrasy{" "}
            <span className="text-[#2EE59D]">te ajuda</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entenda qualquer contrato — antes de assinar ou depois, quando precisar conhecer seus direitos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#E9FBF3]/30 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#2EE59D]/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="text-6xl mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo isso para você ter{" "}
            <strong className="text-[#0F172A]">clareza e segurança</strong>{" "}
            em qualquer momento — antes ou depois de assinar
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
