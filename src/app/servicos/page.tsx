import { pageMetadata } from "@/lib/seo";
import { serviceContactHref } from "@/lib/contact-prefill";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Process } from "@/components/home/Process/Process";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMetadata("Serviços | Lucas Fernando", "Consultoria em Recursos Humanos, recrutamento e seleção e orientação de carreira. Conheça os serviços para empresas e profissionais.", "/servicos");

const groups = [
  {
    id: "empresas",
    title: "Para empresas",
    description: "Apoio à gestão de pessoas, à contratação e ao desenvolvimento de equipes, considerando a realidade de cada organização.",
    serviceIds: [1, 2, 3, 4],
  },
  {
    id: "profissionais",
    title: "Para profissionais",
    description: "Orientação para organizar seus próximos passos e apresentar sua trajetória com clareza em processos seletivos.",
    serviceIds: [5, 6, 7, 8],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="bg-slate-50 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Serviços</span>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Apoio para sua empresa e para sua trajetória profissional.</h1>
              <p className="mt-6 text-lg">Cada demanda começa com o entendimento das suas necessidades. Conheça as áreas de atuação e encontre o apoio que faz sentido para o seu momento.</p>
              <nav aria-label="Categorias de serviços" className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#empresas">Para minha empresa</Button>
                <Button href="#profissionais" variant="outline">Para minha carreira</Button>
              </nav>
            </div>
          </Container>
        </section>

        {groups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-24 py-16 md:py-20">
            <Container>
              <div className="max-w-3xl">
                <h2 id={`${group.id}-title`} className="text-3xl font-bold md:text-4xl">{group.title}</h2>
                <p className="mt-4 text-lg">{group.description}</p>
              </div>
              {group.id === "profissionais" && (
                <div id="diagnostico-carreira" className="mt-8 scroll-mt-28 rounded-2xl bg-violet-50 p-6 md:p-8">
                  <h3 className="text-2xl font-semibold">Diagnóstico Inicial de Carreira</h3>
                  <p className="mt-4">Suas respostas ajudam a compreender seu momento profissional, objetivos e necessidades antes da indicação do serviço. Após o preenchimento, conversaremos sobre as possibilidades e condições da consultoria.</p>
                  <p className="mt-4 text-sm">O diagnóstico será preenchido no Google Forms, em nova aba. O envio de currículo pelo formulário exige uma conta Google.</p>
                  <Button href="https://forms.gle/QQNRizmQQQa5c3Fu9" target="_blank" rel="noopener noreferrer" className="mt-6">Iniciar diagnóstico (nova aba)</Button>
                  <p className="mt-3 text-sm">Se precisar de ajuda para preencher, <Link href={serviceContactHref(5)} className="underline underline-offset-4">entre em contato sobre sua carreira</Link>.</p>
                </div>
              )}
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {services.filter((service) => group.serviceIds.includes(service.id)).map((service) => (
                  <article key={service.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mb-6 mt-4">{service.description}</p>
                    <Link href={serviceContactHref(service.id)} aria-label={service.id === 2 ? "Solicitar recrutamento" : `Conversar sobre ${service.title}`} className="mt-auto self-start rounded font-semibold underline underline-offset-4 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4">{service.id === 2 ? "Solicitar recrutamento" : "Conversar sobre este serviço →"}</Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ))}

        <section className="bg-violet-50 py-16 md:py-20" aria-labelledby="personalizados-title">
          <Container>
            <div className="max-w-3xl">
              <h2 id="personalizados-title" className="text-3xl font-bold md:text-4xl">Sua demanda precisa de um projeto próprio?</h2>
              <p className="mt-6 text-lg">Os projetos podem ser construídos a partir das necessidades da empresa e das pessoas envolvidas. Na conversa inicial, compreendemos o contexto para definir o escopo, as etapas e as condições do trabalho.</p>
              <div className="mt-8"><Button href={serviceContactHref("projeto")}>Conversar sobre um projeto</Button></div>
            </div>
          </Container>
        </section>

        <Process />

        <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">Vamos entender o que você precisa?</h2>
              <p className="mt-4 text-lg">Conte se procura apoio para sua empresa ou para sua carreira e qual desafio deseja trabalhar. Você pode escolher o contato por WhatsApp ou e-mail.</p>
              <div className="mt-8"><Button href="/contato">Entrar em contato</Button></div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
