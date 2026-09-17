"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

// Server HTML and the first hydration render stay disabled. Only a hydrated
// client can enable the controls and handle submission without native navigation.
export function ReadyContactFields({ children, disabled = false, className }: {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  const ready = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  return (
    <>
      {!ready && (
        <p role="status" className="mb-6 text-sm">
          O formulário precisa de JavaScript para funcionar. Se ele não carregar,
          entre em contato pelo <a href="https://wa.me/5521988490811" className="underline underline-offset-4">WhatsApp</a>
          {" ou pelo "}<a href="mailto:lucasfernando.recruiter@gmail.com" className="underline underline-offset-4">e-mail</a>.
        </p>
      )}
      <fieldset disabled={!ready || disabled} className={className}>
        {children}
      </fieldset>
    </>
  );
}
