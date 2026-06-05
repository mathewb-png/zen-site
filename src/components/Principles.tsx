const principles = [
  {
    title: "Presence",
    body: "The past has passed. The future is not here yet. Only this breath is real.",
  },
  {
    title: "Simplicity",
    body: "Let go of what you do not need. Clarity grows in open space.",
  },
  {
    title: "Compassion",
    body: "Meet yourself gently. Progress is not perfection — it is returning, again and again.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.3em] text-[var(--sage-deep)]">
          Path
        </p>
        <h2 className="mb-14 text-center font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)] sm:text-5xl">
          Three gentle truths
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.title}
              className="zen-card rounded-2xl p-8 text-center"
            >
              <h3 className="mb-4 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--sage-deep)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
