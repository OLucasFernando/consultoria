import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      className={`
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-3
        text-slate-900
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-200
        ${className}
      `}
      {...props}
    />
  );
}