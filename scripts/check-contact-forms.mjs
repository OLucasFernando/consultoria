// Isolated regression tests: no network, no real mail or WhatsApp navigation.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
const require = createRequire(import.meta.url);
const dir = "src/components/home/Contact/";
function compile(name, dependencies = {}, globals = {}) {
  const exports = {};
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(dir + name + ".tsx", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText, { exports, require: (id) => dependencies[id] ?? require(id), ...globals });
  return exports[name];
}
const ReadyContactFields = compile("ReadyContactFields");
const serverHtml = renderToStaticMarkup(React.createElement(ReadyContactFields, {},
  React.createElement("input", { name: "personalData" }), React.createElement("button", { type: "submit" }, "Enviar")));
assert.match(serverHtml, /<fieldset disabled=""/);
assert.match(serverHtml, /precisa de JavaScript/);
assert.match(serverHtml, /href="https:\/\/wa.me\/5521988490811"/);
assert.match(serverHtml, /href="mailto:lucasfernando.recruiter@gmail.com"/);

for (const name of ["RecruitmentForm", "ContactForm"]) {
  let url = "", status = "", networkCalls = 0;
  const jsx = (type, props) => ({ type, props });
  const component = compile(name, {
    react: { useId: () => "test", useState: () => ["", (s) => { status = s; }], useRef: () => ({ current: false }) },
    "react/jsx-runtime": { jsx, jsxs: jsx },
    "next/link": "a", "./ReadyContactFields": { ReadyContactFields },
    "@/components/ui/Button": { Button: "button" }, "@/components/ui/Input": { Input: "input" },
    "@/components/ui/Select": { Select: "select" }, "@/components/ui/Textarea": { Textarea: "textarea" },
  }, {
    FormData: class { constructor(form) { this.form = form; } get(k) { return this.form[k]; } },
    window: { location: { assign: (v) => { url = v; } } },
    fetch: () => { networkCalls++; throw new Error("Unexpected network request"); },
  });
  const tree = component({});
  assert.equal(tree.props.method, "post");
  const valid = { company: "Empresa & Teste", name: "Pessoa Teste", contact: "teste@example.com",
    email: "teste@example.com", subject: "Dúvida & contato", message: "Mensagem com acentos + #",
    role: "Analista", location: "São Luís/MA", model: "Híbrido", quantity: "2", urgency: "A definir",
    description: "Necessidade com acentos & símbolos + #\nSegunda linha", querySelector: () => ({ focus() {} }) };
  async function submit(channel, extra = {}) {
    url = ""; status = "";
    await tree.props.onSubmit({ preventDefault() {}, currentTarget: { ...valid, ...extra }, nativeEvent: { submitter: { value: channel } } });
    return url;
  }
  const wa = new URL(await submit("whatsapp"));
  assert.equal(wa.hostname, "wa.me");
  const mail = new URL(await submit("mailapp"));
  assert.equal(mail.protocol, "mailto:");
  assert.equal(mail.pathname, "lucasfernando.recruiter@gmail.com");
  if (name === "RecruitmentForm") {
    const text = wa.searchParams.get("text");
    for (const k of ["company", "name", "contact", "role", "location", "model", "quantity", "urgency", "description"]) assert.ok(text.includes(valid[k]), k);
    assert.equal(mail.searchParams.get("body"), text);
    assert.equal(mail.searchParams.get("subject"), "Solicitação de recrutamento");
    assert.ok(status.includes("ainda não"));
    assert.ok(await submit("whatsapp", { contact: "+55 (11) 99999-9999" }));
    for (const invalid of [{ contact: "invalido" }, { quantity: "0" }, { quantity: "1.5" }, { name: " " }, { company: " " }, { description: " " }]) assert.equal(await submit("whatsapp", invalid), "");
  } else {
    assert.equal(mail.searchParams.get("subject"), valid.subject);
    assert.ok(mail.searchParams.get("body").includes(valid.message));
    assert.ok(wa.searchParams.get("text").includes(valid.message));
    for (const invalid of [{ name: " " }, { message: " " }]) assert.equal(await submit("whatsapp", invalid), "");
  }
  assert.equal(networkCalls, 0);
}
console.log("OK: HTML inicial protegido, alternativas de contato, ambos os formulários, validações, WhatsApp e mailto sem envio ou API.");
