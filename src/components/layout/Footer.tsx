import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Lucas Fernando
            </h3>

            <p className="mt-2 max-w-md text-slate-600">
              Psicólogo Organizacional especializado em Recursos Humanos,
              Desenvolvimento Humano e Consultoria de Carreira.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-slate-600">
            <Link href="#inicio">Início</Link>
            <Link href="#servicos">Serviços</Link>
            <Link href="#sobre">Sobre</Link>
            <Link href="#processo">Processo</Link>
            <Link href="#contato">Contato</Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Lucas Fernando. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}