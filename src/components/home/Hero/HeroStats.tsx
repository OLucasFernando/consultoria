import { Card } from "@/components/ui/Card";

export function HeroStats() {
  return (
    <div className="space-y-6 fade-up">

      <Card className="glass">

        <h3 className="text-xl font-bold">
          Atendimento Humanizado
        </h3>

        <p className="mt-3">
          Soluções personalizadas
          para empresas e profissionais.
        </p>

      </Card>

      <Card className="glass">

        <h3 className="text-xl font-bold">
          Base Científica
        </h3>

        <p className="mt-3">
          Psicologia baseada em evidências
          aplicada ao contexto organizacional.
        </p>

      </Card>

      <Card className="glass">

        <h3 className="text-xl font-bold">
          Desenvolvimento Contínuo
        </h3>

        <p className="mt-3">
          Pessoas mais preparadas
          geram organizações mais fortes.
        </p>

      </Card>

    </div>
  );
}