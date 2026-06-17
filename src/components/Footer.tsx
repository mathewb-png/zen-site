import Logo from "@/components/Logo";
import { CONTACT_EMAIL } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="healing-band border-t border-[var(--border)] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <a
          href="#"
          className="rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage)]"
          aria-label="Serenity Source — back to top"
        >
          <Logo size="footer" />
        </a>
        <p className="mt-4 font-[family-name:var(--font-cormorant)] text-xl text-[var(--text)]">
          Serenity Source
        </p>
        <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
          Guidance with care. Presence with purpose.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-5 max-w-full break-all text-sm text-[var(--sage-deep)] hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-8 text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Serenity Source
        </p>
        <div className="mt-5 w-full max-w-xs border-t border-[var(--border)]/70 pt-5">
          <a
            href="https://mcbyrnecreative.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide text-[var(--text-muted)] transition-colors hover:text-[var(--sage-deep)]"
          >
            Site by{" "}
            <span className="font-medium text-[var(--text-secondary)] underline-offset-2 hover:underline">
              mcbyrnecreative.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
