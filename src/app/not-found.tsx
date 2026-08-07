import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Página não encontrada
        </h2>

        <p className="mt-4 text-slate-600">
          A página que você procura não existe ou foi movida.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}