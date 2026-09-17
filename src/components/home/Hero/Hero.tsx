import { Container } from "@/components/ui/Container";
import { HeroContent } from "./HeroContent";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Círculo decorativo */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      {/* Círculo decorativo */}
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

      <Container>

        <div className="grid min-h-[90vh] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">

          <HeroContent />

          <HeroStats />

        </div>

      </Container>

    </section>
  );
}