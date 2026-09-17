# Site de Lucas Fernando Santos Sousa

Site profissional em Next.js, com páginas de início, serviços, sobre, contato, privacidade e termos.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Configure as variáveis privadas em `.env.local`, que está ignorado pelo Git. Nunca copie chaves para arquivos públicos nem use `NEXT_PUBLIC_` para credenciais.

## Validação

```bash
npm run lint
node scripts/check-launch.mjs
node scripts/check-contact-forms.mjs
npm run build
```

Os testes verificam os formulários e simulam o provedor de e-mail; não enviam mensagens reais.

## Contato

O formulário comum recebe dúvidas e pedidos de consultoria, com sugestões editáveis conforme o serviço escolhido. A Solicitação de Recrutamento (`/contato?servico=2#formulario-contato`) usa um formulário empresarial curto; o alinhamento detalhado ocorre depois da conversa comercial. O Diagnóstico Inicial de Carreira continua no Google Forms externo.

Em produção, ambos os formulários preparam mensagens para WhatsApp ou para o aplicativo de e-mail. O visitante precisa revisar e confirmar o envio no aplicativo correspondente.

O envio direto está deliberadamente desabilitado no lançamento: credenciais Resend e remetente autorizado não habilitam essa opção em produção. Uma ativação futura exige decisão explícita, proteção contra abuso e alteração da configuração e da trava no código. Consulte [CONTACT-SETUP.md](CONTACT-SETUP.md).

## Busca e compartilhamento

- `SITE_URL`: origem HTTPS pública definitiva, sem caminho. Pode ser um endereço fornecido pela hospedagem; não exige domínio comprado.
- `SITE_INDEXABLE`: manter ausente ou `false` até a validação e aprovação pública; habilitar somente na produção definitiva. Locais e previews permanecem sem indexação.
- Ambientes com `VERCEL_ENV=preview` permanecem sem indexação.
- Hospedagem e `SITE_URL` continuam pendentes. Sem essa URL, não são anunciados canonical nem imagens sociais absolutas; a rota da imagem continua disponível, robots bloqueia indexação e o sitemap fica vazio. Reconstrua o projeto após a configuração futura.
- A imagem `/opengraph-image` e o ícone `/icon.svg` são gerados no próprio projeto.

## Antes da publicação

Consulte [PREPARACAO-LANCAMENTO.md](PREPARACAO-LANCAMENTO.md). Esta revisão não publica nem envia alterações ao GitHub.
