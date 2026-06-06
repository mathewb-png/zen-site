import { CONTACT_EMAIL } from "@/lib/services";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow mb-3">Connect</p>
        <h2 className="mb-6 font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)] sm:text-5xl">
          Book a session
        </h2>
        <p className="mb-10 text-[var(--text-secondary)]">
          Reach out by email to schedule, ask questions, or purchase a gift
          certificate. I look forward to sitting with you.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="btn-primary inline-flex max-w-full items-center justify-center gap-2 break-all rounded-full px-6 py-4 text-sm tracking-wide sm:px-8"
        >
          {CONTACT_EMAIL}
        </a>

        <p className="mt-8 text-sm text-[var(--text-muted)]">
          Gift certificates are available.
        </p>
      </div>
    </section>
  );
}
