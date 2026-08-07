import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Entendimento das necessidades, objetivos e desafios para definir a melhor estratégia.",
  },
  {
    number: "02",
    title: "Planejamento estratégico",
    description:
      "Construção de um plano de ação personalizado para cada organização ou profissional.",
  },
  {
    number: "03",
    title: "Implementação das soluções",
    description:
      "Execução das ações propostas com foco em desenvolvimento e resultados consistentes.",
  },
  {
    number: "04",
    title: "Acompanhamento dos resultados",
    description:
      "Monitoramento da evolução, avaliação dos resultados e ajustes quando necessário.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Processo"
          title="Como funciona"
          description="Cada projeto é desenvolvido de forma personalizada, respeitando as necessidades de cada cliente."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span className="text-3xl font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}