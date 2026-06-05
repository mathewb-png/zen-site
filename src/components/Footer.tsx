export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10 text-center">
      <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--text)]">
        Zen
      </p>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Be here. Breathe. Begin again.
      </p>
      <p className="mt-6 text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Zen Site
      </p>
    </footer>
  );
}
