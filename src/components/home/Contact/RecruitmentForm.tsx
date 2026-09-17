"use client";

import Link from "next/link";
import { ReadyContactFields } from "./ReadyContactFields";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const fields = [
  { name: "company", label: "Nome da empresa", autoComplete: "organization" },
  { name: "name", label: "Nome do responsável", autoComplete: "name" },
  { name: "contact", label: "Contato (e-mail ou WhatsApp)", autoComplete: "off" },
  { name: "role", label: "Cargo/vaga que deseja contratar", autoComplete: "off" },
  { name: "location", label: "Cidade/Estado", autoComplete: "off" },
];

export function RecruitmentForm() {
  const id = useId();
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || "").trim();
    const invalid = fields.find((field) => !value(field.name));
    if (invalid || !value("description")) {
      setStatus("Preencha todos os campos com as informações da solicitação.");
      form.querySelector<HTMLElement>(`[name="${invalid?.name || "description"}"]`)?.focus();
      return;
    }
    const contact = value("contact");
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[+\d\s().-]+$/.test(contact) && contact.replace(/\D/g, "").length >= 8 && contact.replace(/\D/g, "").length <= 15;
    if (!isEmail && !isPhone) {
      setStatus("Informe um e-mail ou número de WhatsApp com DDD (inclua o código do país, se necessário).");
      form.querySelector<HTMLInputElement>('[name="contact"]')?.focus();
      return;
    }
    const quantity = Number(value("quantity"));
    if (!Number.isSafeInteger(quantity) || quantity < 1) {
      setStatus("Informe uma quantidade inteira maior que zero.");
      form.querySelector<HTMLInputElement>('[name="quantity"]')?.focus();
      return;
    }
    const text = `SOLICITAÇÃO DE RECRUTAMENTO

Empresa: ${value("company")}
Responsável: ${value("name")}
Contato: ${contact}
Cargo/Vaga: ${value("role")}
Cidade/Estado: ${value("location")}
Modelo: ${value("model")}
Quantidade: ${quantity}
Urgência: ${value("urgency")}

Descrição:
${value("description")}`;
    const channel = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value;
    if (channel === "mailapp") {
      setStatus("Revise e confirme o envio no seu aplicativo de e-mail. A solicitação ainda não foi enviada pelo site.");
      window.location.assign(`mailto:lucasfernando.recruiter@gmail.com?subject=${encodeURIComponent("Solicitação de recrutamento")}&body=${encodeURIComponent(text)}`);
    } else {
      setStatus("Revise e confirme o envio no WhatsApp. A solicitação ainda não foi enviada pelo site.");
      window.location.assign(`https://wa.me/5521988490811?text=${encodeURIComponent(text)}`);
    }
  }

  return (
    <form method="post" id="formulario-contato" onSubmit={submit} className="min-w-0 scroll-mt-28 rounded-3xl bg-white p-5 shadow-lg sm:p-8">
      <p className="mb-6 text-sm">Todos os campos são obrigatórios. Estas informações ajudam a iniciar a conversa comercial; o alinhamento detalhado da vaga acontece posteriormente.</p>
      <ReadyContactFields className="min-w-0 space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={`${id}-${field.name}`} className="mb-2 block font-medium">{field.label} *</label>
            <Input id={`${id}-${field.name}`} name={field.name} autoComplete={field.autoComplete} required maxLength={field.name === "contact" ? 254 : 120} aria-describedby={field.name === "contact" ? `${id}-contact-help` : undefined} />
            {field.name === "contact" && <p id={`${id}-contact-help`} className="mt-2 text-sm">Informe apenas um: e-mail ou WhatsApp com DDD.</p>}
          </div>
        ))}
        <div>
          <label htmlFor={`${id}-model`} className="mb-2 block font-medium">Modelo de trabalho *</label>
          <Select id={`${id}-model`} name="model" required defaultValue="">
            <option value="" disabled>Selecione</option>
            {["Presencial", "Híbrido", "Remoto", "A definir"].map((option) => <option key={option}>{option}</option>)}
          </Select>
        </div>
        <div>
          <label htmlFor={`${id}-quantity`} className="mb-2 block font-medium">Quantidade de profissionais/vagas *</label>
          <Input id={`${id}-quantity`} name="quantity" type="number" inputMode="numeric" min={1} step={1} required />
        </div>
        <div>
          <label htmlFor={`${id}-urgency`} className="mb-2 block font-medium">Urgência *</label>
          <Select id={`${id}-urgency`} name="urgency" required defaultValue="">
            <option value="" disabled>Selecione</option>
            {["O quanto antes", "Nos próximos 30 dias", "Sem urgência", "A definir"].map((option) => <option key={option}>{option}</option>)}
          </Select>
        </div>
        <div>
          <label htmlFor={`${id}-description`} className="mb-2 block font-medium">Breve descrição da necessidade *</label>
          <Textarea id={`${id}-description`} name="description" required maxLength={1000} rows={5} aria-describedby={`${id}-description-help`} />
          <p id={`${id}-description-help`} className="mt-2 text-sm">Até 1.000 caracteres. Não inclua documentos, dados de candidatos ou informações confidenciais.</p>
        </div>
        <p className="text-sm">O site prepara sua mensagem. Você precisa revisar e confirmar o envio no WhatsApp ou no aplicativo de e-mail. Se o aplicativo não abrir, use os contatos desta página.</p>
        <p className="text-sm">Usaremos os dados para responder à solicitação e conversar sobre o recrutamento. Ao abrir o canal escolhido, o conteúdo é compartilhado com ele. Consulte a <Link href="/politica-de-privacidade" className="underline underline-offset-4">Política de Privacidade</Link>.</p>
        <div className="flex flex-col gap-3">
          <Button type="submit" value="whatsapp" className="w-full">Continuar no WhatsApp</Button>
          <Button type="submit" value="mailapp" variant="outline" className="w-full">Abrir no aplicativo de e-mail</Button>
        </div>
        <p role="status" aria-live="polite">{status}</p>
      </ReadyContactFields>
    </form>
  );
}
