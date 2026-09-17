import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  className = "",
  ...props
}: TextareaProps) {

  return (
    <textarea
      className={`
        min-h-32
        w-full
        rounded-xl
        border
        border-slate-300
        px-4
        py-3
        text-slate-900
        outline-none
        transition
        placeholder:text-slate-400
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200
        ${className}
      `}
      {...props}
    />
  );
}