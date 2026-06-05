export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="fade-up mb-4 text-sm uppercase tracking-[0.3em] text-[var(--sage-deep)]">
        Welcome
      </p>
      <h1 className="fade-up fade-up-delay-1 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-tight tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl">
        Find stillness in the noise
      </h1>
      <p className="fade-up fade-up-delay-2 mt-8 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]">
        You do not need to fix everything today. Simply arrive here, breathe
        once, and let the moment be enough.
      </p>
      <a
        href="#breathe"
        className="fade-up fade-up-delay-3 mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--sage)] bg-[var(--sage)]/10 px-8 py-3 text-sm tracking-wide text-[var(--sage-deep)] transition-colors hover:bg-[var(--sage)]/20"
      >
        Begin with one breath
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
