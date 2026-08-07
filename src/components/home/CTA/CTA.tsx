import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            Vamos conversar
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Desenvolvendo pessoas.
            <br />
            Fortalecendo organizações.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Seja para fortalecer a gestão de pessoas na sua empresa ou impulsionar
            sua carreira profissional, estou preparado para oferecer soluções
            personalizadas e baseadas em evidências.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="#contato"
              className="bg-white text-blue-600 hover:bg-slate-100"
            >
              Solicitar consultoria
            </Button>

            <Button
              href="#servicos"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Conhecer serviços
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}