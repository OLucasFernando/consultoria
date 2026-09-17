import { pageMetadata } from "@/lib/seo";
import { serviceContactHref } from "@/lib/contact-prefill";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata("Sobre | Lucas Fernando", "Conheça a atuação de Lucas Fernando em Psicologia Organizacional, recrutamento e seleção e projetos personalizados para empresas.", "/sobre");

const areas = [
  {
    title: "Recrutamento do início ao fim",
    description:
      "Alinhamento do perfil com gestores e demais envolvidos, condução das etapas do processo seletivo e acompanhamento até a contratação.",
  },
  {
    title: "Busca ativa de profissionais",
    description:
      "Experiência em hunting e condução simultânea de vagas, especialmente para posições de tecnologia, considerando o contexto de cada oportunidade.",
  },
  {
    title: "Entrevistas e análise técnica",
    description:
      "Entrevistas comportamentais e elaboração de pareceres técnicos para apoiar decisões de seleção mais estruturadas, com atenção à experiência do candidato.",
  },
];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="bg-slate-50 py-16 md:py-24">
          <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Sobre mim</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Lucas Fernando Santos Sousa</h1>
              <p className="mt-4 font-medium text-blue-700">Psicólogo · CRP 22/05509</p>
              <div className="mt-8 space-y-5 text-lg">
                <p>
                  Sou psicólogo com atuação em Psicologia Organizacional e
                  experiência em Recrutamento e Seleção, especialmente para
                  posições de tecnologia.
                </p>
                <p>
                  Ao longo da minha trajetória, conduzi múltiplas vagas
                  simultaneamente, desde o alinhamento do perfil com as pessoas
                  responsáveis pela contratação até o acompanhamento final do
                  processo. Meu trabalho busca conectar as necessidades da
                  organização a uma experiência respeitosa para cada candidato.
                </p>
                <p>
                  A busca ativa de profissionais, as entrevistas comportamentais
                  e a elaboração de pareceres técnicos fazem parte dessa atuação,
                  contribuindo para decisões mais estruturadas e alinhadas ao
                  contexto de cada negócio.
                </p>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-md rounded-[2rem] border border-violet-100 bg-white p-3 shadow-xl shadow-violet-950/5 lg:rotate-1">
              <Image
                src="/images/lucas-portrait-v1.png"
                alt="Retrato de Lucas Fernando Santos Sousa, com blazer violeta e camisa clara."
                width={1122}
                height={1402}
                sizes="(max-width: 512px) calc(100vw - 72px), 424px"
                preload
                className="h-auto w-full rounded-3xl"
              />
            </figure>
          </Container>
        </section>

        <section className="py-16 md:py-24" aria-labelledby="experiencia-title">
          <Container>
            <h2 id="experiencia-title" className="text-3xl font-bold md:text-4xl">Minha experiência na prática</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {areas.map((area) => (
                <div key={area.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="mt-4">{area.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-blue-50 py-16 md:py-24" aria-labelledby="projetos-title">
          <Container>
            <div className="max-w-3xl">
              <h2 id="projetos-title" className="text-3xl font-bold md:text-4xl">Projetos a partir da realidade da sua empresa</h2>
              <p className="mt-6 text-lg">
                Desenvolvo projetos personalizados em Psicologia Organizacional
                a partir da compreensão das necessidades de cada empresa e das
                pessoas que fazem parte dela. O escopo, os objetivos e as etapas
                são definidos conforme o contexto e a demanda, com respeito aos
                princípios éticos da profissão.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={serviceContactHref("projeto")}>Conversar sobre um projeto</Button>
                <Button href="/servicos" variant="outline">Conhecer serviços</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
