import { emailEnabled } from "@/lib/email-config";

export async function POST(request: Request) {
  const fail = (error: string, status: number) => Response.json({ error }, { status });
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return fail("Origem inválida.", 403);
  let data;
  try {
    const body = await request.text();
    if (body.length > 12000) return fail("Mensagem muito longa.", 413);
    data = JSON.parse(body);
  } catch {
    return fail("Dados inválidos.", 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return fail("Dados inválidos.", 400);
  if (data.website) return fail("Não foi possível enviar.", 400);
  const { name, email, subject = "", message } = data;
  if (
    typeof name !== "string" || !name.trim() || name.length > 100 ||
    typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject !== "string" || subject.length > 150 || /[\r\n]/.test(subject) ||
    typeof message !== "string" || !message.trim() || message.length > 5000
  ) return fail("Confira o nome, o e-mail e a mensagem.", 400);

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!emailEnabled()) return fail("Envio por e-mail indisponível. Use o WhatsApp ou o link de e-mail.", 503);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: ["lucasfernando.recruiter@gmail.com"],
        reply_to: email.trim(),
        subject: `Contato pelo site: ${subject.trim() || "Solicitação de consultoria"}`,
        text: `Nome: ${name.trim()}\nE-mail: ${email.trim()}\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return fail("Não foi possível enviar. Tente mais tarde ou use o WhatsApp.", 502);
    const result = await response.json();
    if (!result.id) return fail("Não foi possível confirmar o envio.", 502);
    return Response.json({ ok: true });
  } catch {
    return fail("Não foi possível confirmar o envio. Tente mais tarde ou use o WhatsApp.", 502);
  }
}
