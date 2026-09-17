import { pageMetadata } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero/Hero";
import { Services } from "@/components/home/Services/Services";
import { About } from "@/components/home/About/About";
import { Process } from "@/components/home/Process/Process";
import { Contact } from "@/components/home/Contact/Contact";
import { CTA } from "@/components/home/CTA/CTA";

export const metadata = pageMetadata("Lucas Fernando | Psicólogo Organizacional", "Consultoria em Psicologia Organizacional, Recursos Humanos e Desenvolvimento de Carreira.", "/");

export default function Home() {
  return (
    <>
      <Header />

      <main id="conteudo" tabIndex={-1}>
        <Hero />

        <Services />

        <About />

        <Process />

        <Contact />

        <CTA />
      </main>

      <Footer />
    </>
  );
}