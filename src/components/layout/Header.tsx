import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Lucas<span className="text-[#2667B8]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2667B8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contato">
  Solicitar Consultoria
</Button>

      </Container>
    </header>
  );
}