import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)]">
        Page not found
      </h1>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm tracking-wide"
      >
        Back home
      </Link>
    </main>
  );
}
