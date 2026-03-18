"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Como Funciona", id: "how-it-works" },
    { label: "Benefícios", id: "benefits" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Logo size="md" className={scrolled ? "text-[#0F172A]" : "text-white"} />
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-[#2EE59D]"
                    : "text-gray-300 hover:text-[#2EE59D]"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => scrollToSection("hero")}
            className="px-6 py-2 rounded-lg font-semibold bg-[#2EE59D] text-[#0F172A] hover:bg-[#1FCC8C] hover:shadow-lg hover:scale-105 transition-all"
          >
            Analisar Contrato
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
