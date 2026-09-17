import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = pageMetadata("Lucas Fernando | Psicólogo Organizacional", "Consultoria em Psicologia Organizacional, Recursos Humanos e Desenvolvimento de Carreira.", "/");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-5 focus:py-3 focus:text-slate-900">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}