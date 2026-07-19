import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Container className="pt-20">
        <h1 className="text-5xl font-bold text-slate-900">
          Olá, Consultoria!
        </h1>

        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Nosso primeiro componente reutilizável está funcionando.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>
            Solicitar Consultoria
          </Button>

          <Button variant="secondary">
            Conhecer Serviços
          </Button>
        </div>
      </Container>
    </main>
  );
}