# Preparação local para lançamento — 8 de setembro de 2026

## Estado atual aprovado

O lançamento utiliza WhatsApp e abertura do aplicativo de e-mail. O envio direto está deliberadamente bloqueado em produção: um remetente autorizado ou credenciais Resend, sozinhos, NÃO o habilitam. Envio direto é uma funcionalidade futura e exige decisão explícita, proteção adequada contra abuso, nova configuração e alteração da trava no código.

`SITE_URL` e o provedor de hospedagem continuam pendentes. `SITE_INDEXABLE` deve permanecer ausente ou `false` até a validação e aprovação pública; previews continuam sem indexação.

## Histórico — revisão de 8 de setembro

As seções históricas abaixo registram decisões e testes daquela revisão. Instruções antigas sobre disponibilizar Resend mediante remetente autorizado foram substituídas pelo estado atual acima.

### Revisão e correções

- Links dos serviços na página inicial e na página Serviços levam ao formulário preenchido.
- Empresas, profissionais e projetos personalizados têm sugestões próprias, editáveis.
- A categoria é determinada pelo cadastro do serviço. Parâmetros inválidos deixam o formulário vazio.
- A seção Sobre da página inicial agora leva à apresentação completa.
- Menu compacto também em tablets, link para pular ao conteúdo e ajustes da abertura em telas pequenas.
- Corrigidos os três tipos vazios que impediam o lint e o atalho local ausente do ESLint.
- Durante o envio, os campos ficam protegidos contra alterações; erros preservam a mensagem e sucesso limpa os campos.
- O remetente de teste Resend fica restrito ao desenvolvimento. A produção oferece WhatsApp e e-mail pelo aplicativo enquanto não houver remetente autorizado.
- Títulos e descrições por página, canônicos sem parâmetros de formulário, Open Graph, Twitter Card, imagem de compartilhamento e ícone próprios.
- Sitemap e robots preparados para o endereço público futuro. Indexação desativada por padrão.
- Privacidade e Termos ajustados à alternativa de abrir o aplicativo de e-mail. Prazo de conservação confirmado pelo responsável: 60 dias após o último contato de interessados que não contratarem; exclusão operacional, não automática.

### Validações históricas

- `npm run lint` e `npm run build`.
- `node scripts/check-launch.mjs`: oito serviços, projeto, parâmetros inválidos, validação no servidor, destinatário fixo, resposta do provedor, indisponibilidade e configuração de SEO. Sem envio real.
- Navegador: páginas principais e legais em 320, 768 e 1440 px; fluxo de serviço até contato, menu/Escape e bloqueio de nome obrigatório.
- Verificação HTTP local: 147 links internos, 15 destinos, âncoras, um H1 por página, robots, sitemap, imagem social e ícone.
- Prévia visual da imagem de compartilhamento; o recebimento real no WhatsApp e a aparência em redes sociais só podem ser concluídos no dispositivo/serviço de destino.
- O recebimento de e-mail local foi confirmado anteriormente pelo responsável. Nesta revisão, envios foram simulados.
- `.env.local` permanece ignorado e não é um arquivo versionado. Nenhuma chave foi exibida.

### Pendências registradas naquela revisão

1. Escolher uma hospedagem gratuita que permita uso comercial. O plano Hobby da Vercel é restrito a uso pessoal não comercial; este site promove serviços. Não foi contratada nem configurada hospedagem.
2. Definir o endereço público e preencher `SITE_URL`; ativar `SITE_INDEXABLE=true` apenas após a revisão pública. Não é necessário comprar um domínio para usar um subdomínio da hospedagem.
3. Sem domínio/remetente autorizado, manter WhatsApp e abertura do aplicativo de e-mail. O remetente de teste do Resend não é a configuração final para produção.
4. Antes de habilitar uma API pública de envio direto, configurar proteção antispam persistente/limitação na infraestrutura e verificar as condições dos fornecedores. O campo oculto atual é apenas uma proteção básica, não substitui limitação distribuída.
5. Completar a identificação da hospedagem e as condições de tratamento/transferência de dados na política, conforme os fornecedores realmente escolhidos. O texto local não é certificação de conformidade jurídica.
6. Na etapa do GitHub, revisar os arquivos novos e as alterações anteriores. Há mudanças preexistentes de permissão de arquivo (644 para 755) em vários arquivos; esta revisão não as normalizou, não fez commit e não enviou nada ao repositório.
7. Após publicação, testar links HTTPS, entrega real, preview de compartilhamento e comportamento dos canais no celular.

## Referências

- Vercel Hobby: https://vercel.com/docs/plans/hobby
- Vercel Fair Use: https://vercel.com/docs/limits/fair-use-guidelines
- Resend, remetente de teste: https://resend.com/docs/knowledge-base/403-error-resend-dev-domain


## Configuração pública pendente — ciclo final

- Não publicar nem ativar indexação antes da revisão final.
- `SITE_URL` deve ser a origem HTTPS real da hospedagem, sem caminho. Não usar localhost ou inventar domínio. Deixar ausente enquanto a URL não existir.
- `SITE_INDEXABLE` fica ausente ou `false` no local e em todos os previews. Somente após aprovação da publicação definir `true` no contexto de produção e refazer o build.
- O código também bloqueia indexação em desenvolvimento e nos contextos de preview reconhecidos (`CONTEXT` e `VERCEL_ENV`). Em outras plataformas, separar explicitamente as variáveis dos previews.
- Sem URL pública, canonical e imagens sociais absolutas não são anunciados; a rota de imagem de compartilhamento permanece pronta para uso futuro.
- Não configurar Resend na hospedagem neste lançamento. O código mantém envio direto desligado em produção independentemente de credenciais.
- Identificar o provedor na Política de Privacidade antes de publicar. A exclusão de contatos, respostas e currículos segue rotina manual, não um job do site.
- Executar `node scripts/check-launch.mjs` e `node scripts/check-contact-forms.mjs`, lint e build depois de futuras correções.


## Histórico — validação final do ciclo de 16/09/2026

Correções concluídas sem publicação, commit ou ativação de indexação.

### Arquivos tocados neste ciclo

- `package.json` e `package-lock.json`: atualização controlada de segurança.
- `src/components/home/Contact/ContactForm.tsx` e `RecruitmentForm.tsx`: método POST e bloqueio até hidratação.
- `src/components/home/Contact/ReadyContactFields.tsx` (novo): campos desabilitados no HTML inicial e canais alternativos acessíveis.
- `src/lib/email-config.ts`: envio direto sempre desligado em produção.
- `src/lib/seo.ts`: origem pública HTTPS validada, noindex seguro e ausência de URLs sociais fictícias.
- `src/app/page.tsx` e `src/app/not-found.tsx`: metadados explícitos para evitar origem localhost gerada automaticamente.
- `src/app/favicon.ico`: identidade LF existente em icon.svg, tamanhos 16–256 px.
- `src/app/politica-de-privacidade/page.tsx` e `src/app/termos-de-uso/page.tsx`: ajustes de transparência, envio pelo aplicativo e hospedagem ainda pendente.
- `scripts/check-launch.mjs` e `scripts/check-contact-forms.mjs` (novo): regressões de produção, SEO, formulários e canais.
- `CONTACT-SETUP.md` e este documento: operação atual e pendências de publicação.

### Versões relevantes

| Pacote | Antes | Depois |
| --- | --- | --- |
| next | 16.2.10 | 16.3.5 |
| eslint-config-next | 16.2.10 | 16.3.5 |
| sharp (transitivo) | 0.34.5 | 0.35.4 |
| postcss | 8.4.31 no Next / 8.5.19 na raiz | 8.5.23 deduplicado |
| nanoid (transitivo) | 3.3.16 | 3.3.19 |
| baseline-browser-mapping (desenvolvimento) | 2.10.43 | 2.11.24 |

Lockfile revisado; React permanece 19.2.4. Sem migração arquitetural.

### Resultados

- `npm audit --omit=dev`: zero vulnerabilidades.
- Auditoria completa: três avisos altos em dependências de desenvolvimento (`brace-expansion`, `browserslist`, `js-yaml`). Não estão no conjunto de produção; acompanhar em manutenção sem ampliar este ciclo.
- `npm run lint`: passou.
- `node scripts/check-launch.mjs`: passou, incluindo respostas simuladas do provedor, validação e bloqueio de envio em produção.
- `node scripts/check-contact-forms.mjs`: passou, incluindo valores/encoding de WhatsApp e mailto, dados inválidos e ausência de envio via API.
- `npm run build`: passou com Next 16.3.5, sem warnings de metadados.
- `git diff --check`: passou. `.env.local` não é rastreado; nenhuma chave foi transferida.
- Navegador com JavaScript: ambos os formulários habilitam após hidratação; campos obrigatórios vazios impedem prosseguir. Menu mobile abre e fecha com Escape. Nenhum erro/warning no console normal consultado.
- Sem execução de JavaScript: teste no navegador por proxy local com CSP `script-src 'none'` e sandbox sem `allow-scripts`. Ambos os formulários mantiveram campos/botões desabilitados, método POST e alternativas de WhatsApp/e-mail visíveis. Nenhum dado pessoal foi colocado na URL. Esse proxy não integra o projeto.
- Responsividade: início, serviços, contato comum e recrutamento em 320, 375 e 1440 px, sem overflow horizontal. Conferência visual dos formulários em mobile e desktop.
- HTTP: 15 destinos e 328 ocorrências de links internos/âncoras sem erros. Destino inexistente retorna 404 corretamente.
- Google Forms externo abriu “Diagnóstico Inicial de Carreira.”. Links e conteúdo das mensagens WhatsApp/mailto validados em testes isolados; nenhum contato real foi enviado e recebimento externo não foi retestado.
- Favicon LF inspecionado visualmente, consistente com SVG; favicon, SVG, imagem social e retrato retornam 200.
- Todas as páginas conferidas permanecem noindex; metadados sem localhost. Robots contém `Disallow: /`; sitemap permanece vazio enquanto falta URL pública/indexação.
- Privacidade mantém Forms/Drive/WhatsApp/e-mail, retenção de 60 dias com rotina manual e hospedagem a identificar. Termos esclarecem que abrir aplicativo não confirma envio/recebimento.

### Conclusão e pendências

Nenhum bloqueador adicional independente da hospedagem foi encontrado nos testes realizados. Antes da publicação: escolher hospedagem compatível com Next dinâmico e uso comercial, identificar o provedor na política, configurar a origem HTTPS real, manter previews noindex, aprovar o commit/GitHub, configurar produção sem credenciais Resend, refazer build e testes públicos. Habilitar `SITE_INDEXABLE=true` somente no ambiente público definitivo quando autorizado. Conferir compartilhamento e envio/recebimento nos aplicativos reais após publicação.

### Inventário Git histórico ao encerrar aquele ciclo

O repositório contém alterações anteriores a este ciclo, incluindo mudanças de permissão. Nada foi removido, normalizado, preparado para commit ou enviado. Os arquivos novos abaixo devem ser considerados na revisão do futuro commit:

```
CONTACT-SETUP.md
PREPARACAO-LANCAMENTO.md
public/images/lucas-portrait-v1.png
scripts/check-contact-forms.mjs
scripts/check-launch.mjs
src/app/api/contato/route.ts
src/app/icon.svg
src/app/opengraph-image.tsx
src/app/robots.ts
src/app/sitemap.ts
src/components/home/Contact/ReadyContactFields.tsx
src/components/home/Contact/RecruitmentForm.tsx
src/lib/contact-prefill.ts
src/lib/email-config.ts
src/lib/seo.ts
```

Estado completo dos arquivos rastreados modificados:

```
.gitignore
AGENTS.md
CLAUDE.md
README.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
src/app/contato/page.tsx
src/app/favicon.ico
src/app/globals.css
src/app/layout.tsx
src/app/not-found.tsx
src/app/page.tsx
src/app/politica-de-privacidade/page.tsx
src/app/servicos/page.tsx
src/app/sobre/page.tsx
src/app/termos-de-uso/page.tsx
src/components/home/About/About.tsx
src/components/home/CTA/CTA.tsx
src/components/home/Contact/Contact.tsx
src/components/home/Contact/ContactForm.tsx
src/components/home/Hero/Hero.tsx
src/components/home/Hero/HeroContent.tsx
src/components/home/Hero/HeroStats.tsx
src/components/home/Process/Process.tsx
src/components/home/Services/ServiceCard.tsx
src/components/home/Services/Services.tsx
src/components/layout/Footer.tsx
src/components/layout/Header.tsx
src/components/ui/Badge.tsx
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Container.tsx
src/components/ui/Input.tsx
src/components/ui/SectionTitle.tsx
src/components/ui/Select.tsx
src/components/ui/Textarea.tsx
src/lib/services.ts
src/lib/utils.ts
tsconfig.json
```


## Ajustes finais do Git após a auditoria

As 47 alterações acidentais de modo foram normalizadas de 755 para 644, sem mudar o conteúdo nessa operação. Os 15 arquivos novos, incluindo os testes executados por Node, permanecem em 644. Os cinco SVGs do template (file, globe, next, vercel e window) foram removidos após nova busca sem referências funcionais. O inventário anterior permanece como registro histórico, não como estado atual do Git.

Não houve staging, commit, push ou publicação nesta preparação. O README foi alinhado com os canais de contato e metadados atuais. Nenhuma funcionalidade, variável de ambiente ou dependência foi alterada.

### Validação após os ajustes finais do Git

Passaram: `git diff --check`, `npm run lint`, `node scripts/check-launch.mjs`, `node scripts/check-contact-forms.mjs` e `npm run build`. `npm audit --omit=dev`: zero vulnerabilidades. O build preserva as páginas, a API e as rotas de metadados; nenhum arquivo necessário foi removido.

Staging vazio; nenhuma alteração de modo permanece. Os 15 novos arquivos estão em 644. `.env.local` continua ignorado; a verificação não encontrou a chave local nem padrões de credenciais nos arquivos candidatos. Não houve commit, push ou publicação.

### Arquivos que ficaram limpos após normalização

Os 14 arquivos abaixo tinham somente alteração de modo e não entram no diff do futuro commit. Os outros cinco que também tinham apenas modo eram os SVGs agora excluídos intencionalmente.

```
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next.config.ts
postcss.config.mjs
src/components/home/Hero/HeroStats.tsx
src/components/home/Process/Process.tsx
src/components/ui/Badge.tsx
src/components/ui/Card.tsx
src/components/ui/Container.tsx
src/components/ui/SectionTitle.tsx
src/lib/utils.ts
tsconfig.json
```

### Inventário exato proposto para o futuro commit

Este inventário é uma proposta; nada foi adicionado ao staging. São 48 caminhos: 28 modificações reais, 15 inclusões e cinco exclusões. Caminhos relativos à raiz do repositório.

**28 arquivos modificados:**

```
README.md
package-lock.json
package.json
src/app/contato/page.tsx
src/app/favicon.ico
src/app/globals.css
src/app/layout.tsx
src/app/not-found.tsx
src/app/page.tsx
src/app/politica-de-privacidade/page.tsx
src/app/servicos/page.tsx
src/app/sobre/page.tsx
src/app/termos-de-uso/page.tsx
src/components/home/About/About.tsx
src/components/home/CTA/CTA.tsx
src/components/home/Contact/Contact.tsx
src/components/home/Contact/ContactForm.tsx
src/components/home/Hero/Hero.tsx
src/components/home/Hero/HeroContent.tsx
src/components/home/Services/ServiceCard.tsx
src/components/home/Services/Services.tsx
src/components/layout/Footer.tsx
src/components/layout/Header.tsx
src/components/ui/Button.tsx
src/components/ui/Input.tsx
src/components/ui/Select.tsx
src/components/ui/Textarea.tsx
src/lib/services.ts
```

**15 arquivos novos a incluir:**

```
CONTACT-SETUP.md
PREPARACAO-LANCAMENTO.md
public/images/lucas-portrait-v1.png
scripts/check-contact-forms.mjs
scripts/check-launch.mjs
src/app/api/contato/route.ts
src/app/icon.svg
src/app/opengraph-image.tsx
src/app/robots.ts
src/app/sitemap.ts
src/components/home/Contact/ReadyContactFields.tsx
src/components/home/Contact/RecruitmentForm.tsx
src/lib/contact-prefill.ts
src/lib/email-config.ts
src/lib/seo.ts
```

**Cinco exclusões intencionais:**

```
public/file.svg
public/globe.svg
public/next.svg
public/vercel.svg
public/window.svg
```

Não há bloqueador identificado para preparar esse conjunto após autorização. Configuração da hospedagem, URL pública e indexação permanecem etapas posteriores.
