export default function Quote() {
  return (
    <section
      id="quote"
      className="flex flex-col items-center px-6 py-28 text-center"
    >
      <blockquote className="max-w-2xl">
        <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light italic leading-relaxed text-[var(--text)] sm:text-4xl">
          &ldquo;You should sit in meditation for twenty minutes every day —
          unless you are too busy. Then you should sit for an hour.&rdquo;
        </p>
        <footer className="mt-8 text-sm tracking-wide text-[var(--text-muted)]">
          — Zen proverb
        </footer>
      </blockquote>
    </section>
  );
}
