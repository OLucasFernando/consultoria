import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function HeroContent() {
  return (
    <div className="fade-up">

      <Badge>
        Psicólogo Organizacional
      </Badge>

      <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
        Desenvolvendo
        <span className="text-gradient"> pessoas </span>

        para fortalecer organizações.
      </h1>

      <p className="mt-8 max-w-xl text-xl">
        Consultoria em Recursos Humanos,
        desenvolvimento humano,
        recrutamento e seleção
        e estratégias organizacionais.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Button>
          Solicitar Consultoria
        </Button>

        <Button variant="outline">
          Conhecer Serviços
        </Button>

      </div>

    </div>
  );
}