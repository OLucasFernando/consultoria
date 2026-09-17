"use client";

import { useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">

        <Link
          href="/"
          className="shrink-0 whitespace-nowrap text-2xl font-bold tracking-tight text-slate-900"
        >
          Lucas Fernando<span className="text-[#2667B8]">.</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden lg:block">
          <Button href="/contato">Solicitar Consultoria</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden"
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>

      </Container>
      <nav
        id={menuId}
        aria-label="Navegação para celular"
        hidden={!open}
        className="border-t border-slate-200 bg-white lg:hidden"
      >
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-medium hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contato" onClick={() => setOpen(false)} className="mt-2">
              Solicitar Consultoria
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}