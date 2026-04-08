import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Contrasy - Análise de Contratos com IA",
    short_name: "Contrasy",
    description:
      "Analise contratos com IA e identifique cláusulas escondidas, riscos e taxas.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F172A",
    icons: [
      {
        src: "/logo.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
