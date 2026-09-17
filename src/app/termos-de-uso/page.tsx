import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = pageMetadata("Termos de Uso | Lucas Fernando", "Termos de Uso do site de Lucas Fernando Santos Sousa.", "/termos-de-uso");

const sections = [
  {
    "title": "Sobre o site",
    "text": "Este site apresenta os serviços e a atuação profissional de Lucas Fernando Santos Sousa, Psicólogo, CRP 22/05509, em Psicologia Organizacional, Recrutamento e Seleção e desenvolvimento de carreira."
  },
  {
    "title": "Informações e contratação",
    "text": "As descrições têm caráter informativo. O envio de uma mensagem não representa contratação, reserva de horário ou início de atendimento. Escopo, etapas, valores, prazos e demais condições serão definidos diretamente com o interessado antes da prestação do serviço."
  },
  {
    "title": "Contato por e-mail e WhatsApp",
    "text": "Você pode escolher o canal de contato disponível. No WhatsApp, a mensagem é preparada para revisão e envio no aplicativo; por e-mail, o formulário encaminha a solicitação ao serviço de envio quando essa opção estiver disponível, ou abre seu aplicativo de correio com o texto preenchido para você enviar. Abrir o WhatsApp ou o aplicativo de e-mail não significa que a solicitação foi enviada ou recebida. Você precisa revisar a mensagem e confirmar o envio no aplicativo correspondente. Somente na modalidade de envio direto, quando disponível, uma confirmação do formulário indica aceitação pelo serviço de envio, sem garantir entrega ou leitura. Falhas de conexão ou dos serviços externos podem impedir a entrega. Se necessário, utilize o outro canal de contato."
  },
  {
    "title": "Mensagens preenchidas automaticamente",
    "text": "Ao acessar o formulário a partir de um serviço, o assunto e a mensagem podem vir preenchidos como sugestão. Revise, complemente ou substitua esse conteúdo antes do envio. Nada é enviado apenas por abrir a página."
  },
  {
    "title": "Uso responsável",
    "text": "Forneça informações pertinentes e corretas. Não utilize os canais para spam, conteúdo ilícito, tentativas de acesso indevido ou envio de informações de terceiros sem fundamento adequado. Evite compartilhar dados sensíveis no primeiro contato."
  },
  {
    "title": "Limites das informações",
    "text": "Os conteúdos do site não substituem a análise individual de uma demanda. Os serviços são definidos conforme o contexto e os limites da atuação profissional; não há garantia de contratação, recolocação, promoção ou resultado específico. O site não oferece atendimento de urgência."
  },
  {
    "title": "Privacidade e plataformas externas",
    "text": "O tratamento de dados está descrito na Política de Privacidade. Ao acessar plataformas externas, como WhatsApp e seu serviço de e-mail, também se aplicam as condições desses fornecedores. Estes termos não afastam direitos previstos na legislação aplicável."
  },
  {
    "title": "Atualizações e dúvidas",
    "text": "As informações e funcionalidades poderão ser atualizadas. Condições de serviços já contratados são tratadas no respectivo acordo. Dúvidas sobre o site podem ser encaminhadas a lucasfernando.recruiter@gmail.com."
  }
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Termos de Uso</h1>
            <p className="mt-4 text-sm">Atualizado em 15 de setembro de 2026.</p>
            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p className="mt-4">{section.text}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6">
              <a className="break-all underline underline-offset-4" href="mailto:lucasfernando.recruiter@gmail.com">lucasfernando.recruiter@gmail.com</a>
              <Link className="underline underline-offset-4" href="/politica-de-privacidade">Política de Privacidade</Link>
              <Link className="underline underline-offset-4" href="/termos-de-uso">Termos de Uso</Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
