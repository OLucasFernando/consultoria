import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { contactPrefill } from "@/lib/contact-prefill";
import { Contact } from "@/components/home/Contact/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = pageMetadata("Contato | Lucas Fernando", "Converse com Lucas Fernando pelo WhatsApp ou e-mail sobre consultoria em Recursos Humanos e desenvolvimento de carreira.", "/contato");

export default async function ContatoPage({
  searchParams,
}: {
  searchParams: Promise<{ servico?: string | string[]; publico?: string | string[] }>;
}) {
  const params = await searchParams;
  const recruitment = params.servico === "2";
  const { initialSubject, initialMessage } = contactPrefill(params.servico);

  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <div className="bg-slate-50 pt-16">
          <Container>
            <h1 className="text-4xl font-bold md:text-5xl">{recruitment ? "Solicitação de Recrutamento" : "Entre em contato"}</h1>
          </Container>
        </div>
        <Contact recruitment={recruitment} initialSubject={initialSubject} initialMessage={initialMessage} />
      </main>
      <Footer />
    </>
  );
}
