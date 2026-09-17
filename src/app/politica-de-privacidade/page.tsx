import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = pageMetadata("Política de Privacidade | Lucas Fernando", "Política de Privacidade do site de Lucas Fernando Santos Sousa.", "/politica-de-privacidade");

const sections = [
  {
    "title": "Responsável e contato",
    "text": "Lucas Fernando Santos Sousa, Psicólogo, CRP 22/05509, é responsável pelo tratamento das informações recebidas para atender às solicitações feitas neste site. Para dúvidas sobre privacidade ou pedidos relativos aos seus dados, escreva para lucasfernando.recruiter@gmail.com."
  },
  {
    "title": "Dados e finalidade",
    "text": "O formulário solicita nome e mensagem, além de assunto opcional. O e-mail é necessário no envio por e-mail e opcional no WhatsApp. Esses dados são utilizados para compreender sua demanda, responder ao contato e conversar sobre uma possível prestação de serviços. Ao usar o WhatsApp, seu número e as informações de perfil disponibilizadas no aplicativo também podem ficar visíveis ao destinatário."
  },
  {
    "title": "Solicitação de recrutamento e diagnóstico de carreira",
    "text": "A solicitação empresarial pede nome da empresa, nome e contato do responsável, cargo/vaga, cidade/estado, modelo de trabalho, quantidade, urgência e breve descrição. Os dados servem ao contato comercial e à compreensão inicial da necessidade de recrutamento. Esse formulário prepara uma mensagem no navegador, sem enviar os campos à API do site ou gravá-los em um banco de dados do site. O envio deve ser confirmado no WhatsApp ou no aplicativo de e-mail; ao abrir esses canais, o conteúdo é compartilhado com eles. O diagnóstico profissional, quando acessado no Google Forms, coleta respostas sobre carreira, e-mail, LinkedIn e eventualmente currículo. Essas informações são usadas para compreender a demanda e indicar serviços, sendo armazenadas no Google Forms/Google Drive e em eventual planilha vinculada. O alinhamento empresarial detalhado é uma etapa posterior, encaminhada após a conversa comercial quando houver contratação/vaga em processo."
  },
  {
    "title": "Fundamento do tratamento",
    "text": "No contato para conhecer ou solicitar serviços, os dados necessários são tratados para realizar procedimentos preliminares relacionados a uma possível contratação, a seu pedido. Eventuais tratamentos decorrentes de um serviço contratado terão suas finalidades e condições informadas no contexto desse serviço. Este formulário não inscreve você em listas de publicidade."
  },
  {
    "title": "Como as mensagens chegam",
    "text": "Quando o envio direto por e-mail estiver disponível e for escolhido no formulário, as informações passam pelo servidor do site e pelo serviço Resend, responsável pelo envio, e são recebidas na caixa de e-mail profissional hospedada no Gmail. Ao escolher WhatsApp, o texto preenchido é transferido para um link do WhatsApp para você revisar e confirmar o envio. Mesmo antes dessa confirmação, a abertura do link transmite seu conteúdo à plataforma. A opção de abrir no aplicativo de e-mail prepara o assunto e a mensagem para você revisar e enviar no seu aplicativo de correio; o link do endereço de e-mail também abre esse aplicativo."
  },
  {
    "title": "Serviços externos",
    "text": "Resend, Google e WhatsApp participam do processamento conforme o canal utilizado e suas próprias condições de privacidade. Esses serviços podem processar informações fora do Brasil. A configuração dos fornecedores e os mecanismos aplicáveis às transferências internacionais devem ser considerados na operação do serviço. Não há banco de dados de mensagens implementado neste site; isso não impede que mensagens e registros sejam mantidos pelos serviços de comunicação."
  },
  {
    "title": "Conservação das informações",
    "text": "Para interessados que não contratarem um serviço, as mensagens, respostas de formulários e arquivos recebidos serão mantidos por até 60 dias após o último contato e, ao final desse período, excluídos por rotina manual dos canais e arquivos sob responsabilidade do profissional, incluindo Forms, Drive e eventual planilha vinculada, salvo necessidade de conservação prevista em lei. Caso haja contratação, os dados necessários passam a seguir as condições do serviço e as obrigações legais e profissionais aplicáveis. Registros e cópias mantidos pelos fornecedores seguem também suas próprias condições de conservação. Você pode solicitar informações ou a exclusão dos seus dados pelo contato indicado nesta página."
  },
  {
    "title": "Navegação e cookies",
    "text": "A versão atual do site não implementa ferramentas de publicidade, análise de audiência ou cookies de rastreamento próprios. Serviços externos acessados por links podem utilizar cookies conforme suas políticas. Registros técnicos de conexão e segurança podem ser processados pela infraestrutura utilizada para disponibilizar o site; a identificação do provedor e as informações aplicáveis a esses registros serão incluídas nesta política antes da publicação, quando a infraestrutura pública estiver definida."
  },
  {
    "title": "Seus direitos",
    "text": "Nos termos da LGPD, você pode solicitar confirmação e acesso aos dados, correção, informações sobre compartilhamento e, quando aplicável, anonimização, bloqueio, eliminação ou portabilidade. Também pode exercer oposição nas hipóteses legais e revogar consentimento quando ele for a base utilizada. Os pedidos podem ser enviados ao e-mail informado acima, sem cobrança, e poderão exigir confirmação de identidade para proteger seus dados. Você também pode apresentar uma petição à ANPD."
  },
  {
    "title": "Cuidados ao escrever",
    "text": "Envie somente informações necessárias para o primeiro contato. Evite incluir documentos de identificação, dados de saúde, informações sigilosas da empresa ou dados pessoais de outras pessoas. Este formulário é destinado ao contato inicial sobre os serviços."
  },
  {
    "title": "Atualizações",
    "text": "Esta política poderá ser atualizada para refletir mudanças no site e nos serviços utilizados. Alterações relevantes no tratamento serão informadas pelos meios apropriados."
  }
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Política de Privacidade</h1>
            <p className="mt-4 text-sm">Atualizado em 15 de setembro de 2026.</p>
            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p className="mt-4">{section.text}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6">
              <a className="break-all underline underline-offset-4" href="mailto:lucasfernando.recruiter@gmail.com">lucasfernando.recruiter@gmail.com</a>
              <Link className="underline underline-offset-4" href="/politica-de-privacidade">Política de Privacidade</Link>
              <Link className="underline underline-offset-4" href="/termos-de-uso">Termos de Uso</Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
