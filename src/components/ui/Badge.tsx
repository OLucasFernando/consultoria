interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "purple" | "red";
}

export function Badge({
  children,
  variant = "blue",
}: BadgeProps) {

  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        border
        px-4
        py-1.5
        text-sm
        font-semibold
        ${styles[variant]}
      `}
    >
      {children}
    </span>
  );
}