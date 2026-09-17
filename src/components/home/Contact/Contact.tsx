import { emailEnabled } from "@/lib/email-config";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RecruitmentForm } from "./RecruitmentForm";
import { ContactForm } from "./ContactForm";

export function Contact({ initialSubject = "", initialMessage = "", recruitment = false }: {
  recruitment?: boolean;
  initialSubject?: string;
  initialMessage?: string;
}) {
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
              title={recruitment ? "Vamos entender sua contratação?" : "Vamos conversar sobre seu projeto?"}
              description={recruitment ? "Preencha os dados iniciais da vaga e escolha como continuar a conversa comercial." : "Entre em contato para tirar dúvidas, solicitar uma consultoria ou conhecer melhor os serviços oferecidos."}
            />

            <div className="mt-10 space-y-6 text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-900">
                  E-mail
                </h3>

                <p className="mt-2">
                  <a className="break-all underline underline-offset-4 hover:opacity-80 focus-visible:outline-2" href="mailto:lucasfernando.recruiter@gmail.com">
                    lucasfernando.recruiter@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  WhatsApp
                </h3>

                <p className="mt-2">
                  <a className="underline underline-offset-4 hover:opacity-80 focus-visible:outline-2" href="https://wa.me/5521988490811">
                    (21) 98849-0811
                  </a>
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

          {recruitment ? <RecruitmentForm /> : <ContactForm key={`${initialSubject}:${initialMessage}`} initialSubject={initialSubject} initialMessage={initialMessage} emailEnabled={emailEnabled()} />}
        </div>
      </Container>
    </section>
  );
}