"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CurrencyDollar, Warning, Brain, ClipboardText } from "@phosphor-icons/react";

const Benefits = () => {
  const painPoints = [
    {
      title: "Taxas escondidas",
      description:
        "Taxas de manutenção, condomínio ou multas que não estavam claras. Seja antes de assinar ou depois, você precisa saber o que está no contrato.",
      icon: <CurrencyDollar size={48} weight="fill" className="text-[#0F172A]" />,
    },
    {
      title: "Multas inesperadas",
      description:
        "Multas pesadas enterradas nas letras miúdas. Se ainda não assinou, evite. Se já assinou, saiba seus direitos para contestar.",
      icon: <Warning size={48} weight="fill" className="text-[#0F172A]" />,
    },
    {
      title: "Cláusulas confusas",
      description:
        "Juridiquês complexo que esconde obrigações importantes. Contrasy traduz para linguagem simples — não importa se o contrato é novo ou já assinado.",
      icon: <Brain size={48} weight="fill" className="text-[#0F172A]" />,
    },
    {
      title: "Obrigações ocultas",
      description:
        "Renovações automáticas, compromissos de longo prazo ou responsabilidades escondidas. Descubra o que existe no seu contrato e o que você pode fazer.",
      icon: <ClipboardText size={48} weight="fill" className="text-[#0F172A]" />,
    },
  ];

  return (
    <section
      id="pain-points"
      className="min-h-screen flex items-center justify-center bg-[#E9FBF3]/30 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">
            Você já passou por isso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vai assinar e quer se proteger? Ou já assinou e quer entender seus direitos?{" "}
            <strong className="text-[#0F172A]">Nos dois casos, Contrasy te ajuda.</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((pain, index) => (
            <PainPointCard key={index} pain={pain} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-lg border border-[#2EE59D]/20">
            <p className="text-lg text-gray-700 mb-2">
              <strong className="text-[#0F172A]">A boa notícia?</strong>
            </p>
            <p className="text-xl text-[#0F172A] font-semibold">
              Nunca é cedo ou tarde demais para entender o que está no seu contrato
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PainPointCard = ({
  pain,
  index,
}: {
  pain: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
        className="text-5xl mb-4"
      >
        {pain.icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">
        {pain.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {pain.description}
      </p>
    </motion.div>
  );
};

export default Benefits;
