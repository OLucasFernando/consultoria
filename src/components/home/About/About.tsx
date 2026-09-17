import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Sobre
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Psicologia aplicada à estratégia organizacional
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Atuação conectando comportamento humano,
            desenvolvimento profissional e necessidades
            organizacionais para apoiar decisões mais conscientes.
          </p>

          <div className="mt-8"><Button href="/sobre" variant="outline">Conheça minha trajetória</Button></div>
        </div>

      </Container>

    </section>
  );
}