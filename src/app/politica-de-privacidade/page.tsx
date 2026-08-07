import { Container } from "@/components/ui/Container";

export default function PoliticaPrivacidadePage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-4xl font-bold">
          Política de Privacidade
        </h1>

        <p className="mt-4 text-slate-600">
          Sua privacidade é importante. As informações
          enviadas pelo formulário serão utilizadas apenas
          para contato e prestação dos serviços solicitados.
        </p>
      </Container>
    </main>
  );
}