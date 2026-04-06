"use client";

import { motion } from "framer-motion";
import { FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo, Lightning, Lock, Flag, ShieldCheck } from "@phosphor-icons/react";
import { Logo } from "./Logo";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = {
    product: [
      { label: "Como Funciona", id: "how-it-works" },
      { label: "Benefícios", id: "benefits" },
      { label: "FAQ", id: "faq" },
    ],
    company: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contato", href: "#" },
    ],
    resources: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Guias", href: "#" },
      { label: "Suporte", href: "#" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "LGPD", href: "#" },
      { label: "Segurança", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <FacebookLogo size={24} weight="fill" />, name: "Facebook", href: "#" },
    { icon: <TwitterLogo size={24} weight="fill" />, name: "Twitter", href: "#" },
    { icon: <LinkedinLogo size={24} weight="fill" />, name: "LinkedIn", href: "#" },
    { icon: <InstagramLogo size={24} weight="fill" />, name: "Instagram", href: "#" },
  ];

  return (
    <>
      {/* CTA Final */}


      <footer className="bg-[#0F172A] text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="mb-4">
                  <Logo size="lg" className="text-white" />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Entenda contratos em segundos com IA. Identifique riscos, taxas e cláusulas importantes — antes de assinar ou depois, para conhecer seus direitos.
                </p>
              </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-[#2EE59D] transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Produto</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.id && scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#2EE59D] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#4a06c9] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#2EE59D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#2EE59D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Contrasy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Flag size={16} weight="fill" /> Feito no Brasil</span>
            <span>•</span>
            <span className="flex items-center gap-1"><ShieldCheck size={16} weight="fill" /> Protegendo suas decisões</span>
          </div>
        </motion.div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
