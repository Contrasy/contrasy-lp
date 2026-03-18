"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Camera, Lightning, Lock } from "@phosphor-icons/react";
import Aurora from "./AuroraBg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a] pt-20"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#1FCC8C", "#2EE59D", "#0a3d2a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg mb-6"
          >
            <ShieldCheck size={24} weight="fill" className="text-[#2EE59D]" />
            <span className="text-sm font-medium text-white/90">
              Clareza antes e depois da assinatura
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Entenda qualquer{" "}
            <span className="text-[#2EE59D]">contrato</span>
            <br />
            antes ou depois de assinar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Vai assinar? Descubra{" "}
            <strong className="text-white">
              riscos, taxas e cláusulas escondidas
            </strong>
            . Já assinou? Saiba{" "}
            <strong className="text-white">
              seus direitos e o que pode fazer
            </strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="px-8 py-4 bg-[#2EE59D] text-[#0F172A] rounded-lg font-semibold text-lg hover:bg-[#1FCC8C] hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Analisar um contrato
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              Como funciona
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: <Camera size={24} weight="fill" className="text-[#2EE59D]" />, label: "Análise por foto" },
              { icon: <Lightning size={24} weight="fill" className="text-[#2EE59D]" />, label: "Resultado em segundos" },
              { icon: <Lock size={24} weight="fill" className="text-[#2EE59D]" />, label: "100% seguro e privado" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                {item.icon}
                <span className="text-sm font-medium text-gray-400">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#2EE59D]/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#2EE59D] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
