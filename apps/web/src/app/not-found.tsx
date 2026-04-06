import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Error 404</p>
        <h1 className="mt-4 text-4xl font-heading font-bold text-foreground sm:text-5xl">
          Esta pagina no existe
        </h1>
        <p className="mt-4 text-base text-muted">
          La URL que has abierto no esta disponible o se ha movido.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
