import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#2667B8] text-white hover:bg-[#0F3D91] shadow-lg shadow-blue-500/20",

    secondary:
      "bg-white text-slate-900 border border-slate-300 hover:bg-slate-100",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}