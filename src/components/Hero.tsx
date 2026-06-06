import { CONTACT_EMAIL } from "@/lib/services";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center sm:px-6">
      <p className="section-eyebrow fade-up mb-4 text-[var(--sage-deep)]">
        Serenity Source
      </p>
      <h1 className="fade-up fade-up-delay-1 max-w-4xl text-balance font-[family-name:var(--font-cormorant)] text-4xl font-light leading-tight tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
        Clarity, guidance &amp;{" "}
        <span className="whitespace-nowrap">spiritual care</span>
      </h1>
      <p className="fade-up fade-up-delay-2 mt-6 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] sm:mt-8 sm:text-lg">
        Tarot and oracle readings, spiritual counseling, energy clearings, and
        wedding officiation — offered in a calm, grounded space.
      </p>
      <div className="fade-up fade-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#services"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm tracking-wide"
        >
          View services
          <span aria-hidden="true">↓</span>
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="btn-secondary inline-flex items-center rounded-full px-8 py-3 text-sm tracking-wide"
        >
          Book by email
        </a>
      </div>
    </section>
  );
}
