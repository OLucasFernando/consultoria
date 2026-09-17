import { services } from "./services";

export function contactPrefill(value: string | string[] | undefined) {
  if (value === "projeto") return {
    initialSubject: "Projeto personalizado",
    initialMessage: "Olá, Lucas! Gostaria de conversar sobre um projeto personalizado para minha empresa. Podemos alinhar nossas necessidades, os objetivos e as próximas etapas?",
  };
  const service = services.find((item) => String(item.id) === value);
  if (!service) return { initialSubject: "", initialMessage: "" };
  return {
    initialSubject: service.title,
    initialMessage: service.audience === "empresas"
      ? `Olá, Lucas! Represento uma empresa e tenho interesse no serviço de ${service.title}. Gostaria de conversar sobre nossas necessidades, as etapas e uma proposta.`
      : `Olá, Lucas! Gostaria de saber mais sobre o serviço de ${service.title}. Busco apoio para minha carreira e quero entender como funciona o atendimento e quais são os próximos passos.`,
  };
}

export function serviceContactHref(id: number | "projeto") {
  return `/contato?servico=${id}#formulario-contato`;
}
