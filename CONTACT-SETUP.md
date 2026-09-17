# Contato no lançamento atual

O envio direto fica desabilitado pelo código em produção, mesmo se houver credenciais no ambiente. Não transferir RESEND_API_KEY ou CONTACT_EMAIL_FROM para a hospedagem neste lançamento. O formulário empresarial usa exclusivamente WhatsApp e aplicativo de e-mail; o contato comum usa os mesmos canais em produção.

Em desenvolvimento, o teste existente de Resend pode continuar usando a configuração local. Não versionar `.env.local` nem usar prefixos NEXT_PUBLIC para segredos.

## Envio direto futuro (fora do escopo atual)

Exigirá remetente autorizado, proteção contra abuso, ajuste explícito da trava de produção e teste de recebimento. Não basta adicionar variáveis de ambiente. A confirmação da API indica aceitação pelo serviço, não entrega ou leitura.
