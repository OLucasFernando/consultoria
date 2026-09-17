// Local regression checks. Provider responses are mocked; no email is sent.
import fs from 'node:fs';
import path from 'node:path';
import Module, { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import ts from 'typescript';
const nativeRequire = createRequire(import.meta.url);
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const mod = new Module(file);
  cache.set(file, mod);
  mod.require = (id) => {
    if (id.startsWith('@/')) return load(path.join('src', id.slice(2)) + '.ts');
    if (id.startsWith('.')) return load(path.resolve(path.dirname(file), id) + '.ts');
    return nativeRequire(id);
  };
  mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, file);
  return mod.exports;
}
(async () => {
  const { contactPrefill } = load('src/lib/contact-prefill.ts');
  for (let id = 1; id <= 8; id++) {
    const data = contactPrefill(String(id));
    assert.ok(data.initialSubject);
    assert.ok(data.initialMessage.includes(id <= 4 ? 'empresa' : 'carreira'));
  }
  assert.equal(contactPrefill('invalid').initialMessage, '');
  assert.equal(contactPrefill(['2', '8']).initialMessage, '');
  assert.equal(contactPrefill('projeto').initialSubject, 'Projeto personalizado');
  const { POST } = load('src/app/api/contato/route.ts');
  let sends = 0;
  global.fetch = async (_url, options) => {
    sends++;
    const body = JSON.parse(options.body);
    assert.deepEqual(body.to, ['lucasfernando.recruiter@gmail.com']);
    assert.equal(body.reply_to, 'teste@example.com');
    return Response.json({ id: 'mock-id' });
  };
  const valid = { name: 'Teste', email: 'teste@example.com', subject: 'Dúvida', message: 'Mensagem de teste' };
  const post = (data, origin = 'http://localhost') => POST(new Request('http://localhost/api/contato', { method: 'POST', headers: { origin }, body: JSON.stringify(data) }));
  process.env.NODE_ENV = 'development';
  process.env.RESEND_API_KEY = 'mock';
  process.env.CONTACT_EMAIL_FROM = 'Teste <onboarding@resend.dev>';
  assert.equal((await post(valid)).status, 200);
  const sent = sends;
  for (const invalid of [null, [], { ...valid, name: ' ' }, { ...valid, email: 'invalid' }, { ...valid, message: ' ' }, { ...valid, subject: 'a\nb' }, { ...valid, website: 'bot' }, { ...valid, message: 'a'.repeat(5001) }]) assert.equal((await post(invalid)).status, 400);
  assert.equal((await post(valid, 'https://other.example')).status, 403);
  assert.equal(sends, sent);
  process.env.NODE_ENV = 'production';
  assert.equal((await post(valid)).status, 503);
  assert.equal(sends, sent);
  process.env.CONTACT_EMAIL_FROM = 'Contato <contato@example.com>';
  assert.equal((await post(valid)).status, 503);
  assert.equal(sends, sent);
  process.env.NODE_ENV = 'development';
  assert.equal((await post(valid)).status, 200);
  global.fetch = async () => new Response('', { status: 429 });
  assert.equal((await post(valid)).status, 502);
  global.fetch = async () => { throw new Error('offline'); };
  assert.equal((await post(valid)).status, 502);
  delete process.env.RESEND_API_KEY;
  assert.equal((await post(valid)).status, 503);
  const seo = load('src/lib/seo.ts');
  delete process.env.VERCEL_ENV;
  delete process.env.CONTEXT;
  process.env.NODE_ENV = 'production';
  delete process.env.SITE_URL;
  delete process.env.SITE_INDEXABLE;
  assert.equal(seo.indexable(), false);
  assert.equal(seo.pageMetadata('Título', 'Descrição', '/contato').alternates, undefined);
  assert.deepEqual(seo.pageMetadata('Título', 'Descrição', '/').openGraph.images, []);
  for (const invalid of ['http://example.com', 'https://localhost', 'https://127.0.0.1', 'https://example.com/path']) {
    process.env.SITE_URL = invalid;
    assert.throws(() => seo.siteUrl());
  }
  process.env.SITE_URL = 'https://example.com';
  process.env.SITE_INDEXABLE = 'true';
  assert.equal(seo.indexable(), true);
  assert.equal(seo.pageMetadata('Título', 'Descrição', '/contato').alternates.canonical, 'https://example.com/contato');
  process.env.NODE_ENV = 'development';
  assert.equal(seo.indexable(), false);
  process.env.NODE_ENV = 'production';
  process.env.CONTEXT = 'deploy-preview';
  assert.equal(seo.indexable(), false);
  process.env.CONTEXT = 'branch-deploy';
  assert.equal(seo.indexable(), false);
  process.env.CONTEXT = 'production';
  assert.equal(seo.indexable(), true);
  process.env.VERCEL_ENV = 'preview';
  assert.equal(seo.indexable(), false);
  console.log('OK: serviços, projetos, validação, envio simulado, falhas, trava de produção e SEO/local/previews. Nenhum e-mail real enviado.');
})().catch((error) => { console.error(error); process.exitCode = 1; });
