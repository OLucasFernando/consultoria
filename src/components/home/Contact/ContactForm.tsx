"use client";

import Link from "next/link";
import { ReadyContactFields } from "./ReadyContactFields";
import { useId, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm({ emailEnabled = false, initialSubject = "", initialMessage = "" }: {
  emailEnabled?: boolean;
  initialSubject?: string;
  initialMessage?: string;
}) {
  const id = useId();
  const busy = useRef(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      setStatus("Preencha seu nome e sua mensagem.");
      return;
    }
    const channel = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value;
    if (channel === "mailapp") {
      const text = `Nome: ${name}\n${email ? `E-mail: ${email}\n` : ""}\n${message}`;
      window.location.assign(`mailto:lucasfernando.recruiter@gmail.com?subject=${encodeURIComponent(subject || "Contato pelo site")}&body=${encodeURIComponent(text)}`);
      setStatus("Revise e envie a mensagem no seu aplicativo de e-mail.");
      return;
    }
    if (channel !== "email") {
      const text = `Olá! Meu nome é ${name}.\n${email ? `E-mail: ${email}\n` : ""}${subject ? `Assunto: ${subject}\n` : ""}\n${message}`;
      window.location.assign(`https://wa.me/5521988490811?text=${encodeURIComponent(text)}`);
      setStatus("Confirme o envio da mensagem no WhatsApp.");
      return;
    }
    if (!email) {
      setStatus("Informe seu e-mail para receber a resposta.");
      form.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
      return;
    }
    busy.current = true;
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website: data.get("website") }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Não foi possível enviar. Tente novamente ou use o WhatsApp.");
      setStatus("Mensagem enviada! Obrigado pelo contato.");
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((field) => { field.value = ""; });
    } catch (error) {
      setStatus(error instanceof Error && error.name === "Error" ? error.message : "Não foi possível confirmar o envio. Seus campos foram mantidos; tente novamente mais tarde.");
    } finally {
      busy.current = false;
      setSending(false);
    }
  }

  return (
    <form method="post" id="formulario-contato" onSubmit={submit} aria-busy={sending} className="scroll-mt-28 rounded-3xl bg-white p-5 sm:p-8 shadow-lg">
      <ReadyContactFields disabled={sending} className="min-w-0 space-y-6">
        {initialSubject && <p className="text-sm">Preparamos uma mensagem sobre o serviço escolhido. Você pode editar o texto antes de enviar.</p>}
        <div>
          <label htmlFor={`${id}-name`} className="mb-2 block font-medium">Seu nome *</label>
          <Input id={`${id}-name`} name="name" autoComplete="name" required maxLength={100} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="mb-2 block font-medium">Seu e-mail</label>
          <Input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength={254} aria-describedby={`${id}-email-help`} />
          <p id={`${id}-email-help`} className="mt-2 text-sm">{emailEnabled ? "Necessário para enviar por e-mail. Opcional no WhatsApp." : "Opcional. Você também pode informar seu contato na mensagem."}</p>
        </div>
        <div>
          <label htmlFor={`${id}-subject`} className="mb-2 block font-medium">Assunto (opcional)</label>
          <Input id={`${id}-subject`} name="subject" defaultValue={initialSubject} maxLength={150} />
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="mb-2 block font-medium">Como posso ajudar? *</label>
          <Textarea id={`${id}-message`} name="message" defaultValue={initialMessage} rows={5} required maxLength={5000} />
        </div>
        <div hidden aria-hidden="true">
          <label htmlFor={`${id}-website`}>Website</label>
          <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <p className="text-sm">Escolha como enviar. No WhatsApp, você confirma a mensagem no aplicativo.</p>
        <p className="text-sm">Usaremos suas informações para responder ao contato. Ao abrir o WhatsApp, o texto preenchido é compartilhado com a plataforma. Saiba mais na <Link href="/politica-de-privacidade" className="underline underline-offset-4">Política de Privacidade</Link>.</p>
        <div className="flex flex-col gap-3">
          <Button type="submit" value="whatsapp" disabled={sending} className="w-full disabled:opacity-50">Enviar pelo WhatsApp</Button>
          <Button type="submit" value={emailEnabled ? "email" : "mailapp"} variant="outline" disabled={sending} className="w-full disabled:opacity-50">{sending ? "Enviando…" : emailEnabled ? "Enviar por e-mail" : "Abrir no aplicativo de e-mail"}</Button>
        </div>
        {!emailEnabled && <p className="text-sm">A opção de e-mail abre seu aplicativo com a mensagem preenchida. Revise e confirme o envio por lá.</p>}
        <p role="status" aria-live="polite">{status}</p>
      </ReadyContactFields>
    </form>
  );
}
