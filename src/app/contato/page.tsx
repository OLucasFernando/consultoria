import { Container } from "@/components/ui/Container";

export default function ContatoPage() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-4xl font-bold">
          Entre em contato
        </h1>

        <p className="mt-4 text-slate-600">
          Envie uma mensagem e entraremos em contato
          para entender como podemos ajudar.
        </p>
      </Container>
    </main>
  );
}