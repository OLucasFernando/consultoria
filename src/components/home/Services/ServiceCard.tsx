import Link from "next/link";
interface ServiceCardProps {
  href: string;
  cta?: string;
  title: string;
  description: string;
}

export function ServiceCard({
  href,
  cta = "Conversar sobre este serviço →",
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>
      <Link href={href} aria-label={`${cta}: ${title}`} className="mt-auto pt-5 font-semibold underline underline-offset-4">{cta}</Link>
    </div>
  );
}