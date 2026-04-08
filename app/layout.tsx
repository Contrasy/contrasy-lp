import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://contrasyai.com"),
  title: {
    default: "Contrasy - Entenda Contratos em Segundos com IA",
    template: "%s | Contrasy",
  },
  description:
    "Evite surpresas depois de assinar. Analise contratos com IA e identifique cláusulas escondidas, riscos e taxas antes que seja tarde demais. Decisões mais seguras e conscientes.",
  keywords: [
    "análise de contratos com IA",
    "analisar contrato online",
    "cláusulas escondidas contrato",
    "riscos em contratos",
    "entender contrato",
    "contrasy",
    "análise contratual inteligente",
    "contrato aluguel análise",
    "verificar contrato",
    "inteligência artificial contratos",
  ],
  authors: [{ name: "Contrasy" }],
  creator: "Contrasy",
  publisher: "Contrasy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://contrasyai.com",
    siteName: "Contrasy",
    title: "Contrasy - Entenda Contratos em Segundos com IA",
    description:
      "Analise contratos com IA e identifique cláusulas escondidas, riscos e taxas antes que seja tarde demais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contrasy - Análise de Contratos com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrasy - Entenda Contratos em Segundos com IA",
    description:
      "Analise contratos com IA e identifique cláusulas escondidas, riscos e taxas antes que seja tarde demais.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://contrasyai.com",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
