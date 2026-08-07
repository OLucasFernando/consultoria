import { Container } from "@/components/ui/Container";

export default function TermosDeUsoPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-4xl font-bold">
          Termos de Uso
        </h1>

        <p className="mt-4 text-slate-600">
          Ao utilizar este site, você concorda com as
          condições de uso e com as informações apresentadas
          sobre os serviços oferecidos.
        </p>
      </Container>
    </main>
  );
}