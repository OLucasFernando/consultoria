import { Container } from "@/components/ui/Container";

export default function SobrePage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-4xl font-bold">
          Sobre a consultoria
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Soluções em Psicologia Organizacional,
          Recursos Humanos e Desenvolvimento Humano,
          unindo conhecimento psicológico e estratégia
          para apoiar pessoas e organizações.
        </p>
      </Container>
    </main>
  );
}