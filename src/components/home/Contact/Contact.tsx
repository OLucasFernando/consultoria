import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contato"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Contato"
              title="Vamos conversar sobre seu projeto?"
              description="Entre em contato para tirar dúvidas, solicitar uma consultoria ou conhecer melhor os serviços oferecidos."
            />

            <div className="mt-10 space-y-6 text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-900">
                  E-mail
                </h3>

                <p className="mt-2">
                  lucasfernando.recruiter@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  WhatsApp
                </h3>

                <p className="mt-2">
                  (21) 98849-0811
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Atendimento
                </h3>

                <p className="mt-2">
                  Online para todo o Brasil e presencial mediante disponibilidade.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}