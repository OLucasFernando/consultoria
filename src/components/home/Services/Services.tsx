import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "./ServiceCard";

import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Serviços"
          title="Soluções para pessoas e organizações"
          description="Atuação estratégica em Recursos Humanos e desenvolvimento humano."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}