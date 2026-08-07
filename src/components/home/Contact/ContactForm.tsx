import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  return (
    <form className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="space-y-6">
        <Input
          placeholder="Seu nome"
        />

        <Input
          type="email"
          placeholder="Seu e-mail"
        />

        <Input
          placeholder="Assunto"
        />

        <Textarea
          rows={5}
          placeholder="Como posso ajudar?"
        />

        <Button
          type="submit"
          className="w-full"
        >
          Enviar mensagem
        </Button>
      </div>
    </form>
  );
}