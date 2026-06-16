import Image from "next/image";
import { BIO } from "@/lib/bio";

export default function Biography() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="healing-band scroll-mt-24 border-y border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-3">About</p>
          <h2
            id="about-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)] sm:text-5xl"
          >
            Meet Christopher
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Veteran, intuitive, and spiritual guide — rooted in service and
            presence.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,19rem)_1fr]">
          <figure className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <div className="bio-portrait overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-[0_8px_32px_rgba(74,124,104,0.08)]">
              <Image
                src={BIO.image.src}
                alt={BIO.image.alt}
                width={760}
                height={950}
                sizes="(max-width: 1024px) 20rem, 19rem"
                className="h-auto w-full object-cover object-[center_20%]"
                priority={false}
              />
            </div>
            <figcaption className="mt-4 text-center font-[family-name:var(--font-cormorant)] text-xl text-[var(--text)] lg:text-left">
              {BIO.name}
            </figcaption>
          </figure>

          <div className="min-w-0">
            <ul
              className="mb-8 grid gap-3 sm:grid-cols-3"
              aria-label="Professional highlights"
            >
              {BIO.highlights.map((item) => (
                <li
                  key={item.label}
                  className="zen-card rounded-xl px-4 py-3 text-left"
                >
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--sage-deep)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-[var(--text-secondary)]">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>

            <div className="space-y-5 text-[0.9875rem] leading-[1.75] text-[var(--text-secondary)] sm:text-base">
              {BIO.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <aside
              className="bio-book-callout mt-8 rounded-2xl border border-[var(--border)] border-l-4 border-l-[var(--sage-deep)] bg-[var(--bg-card)] px-5 py-5 sm:px-6"
              aria-label="Forthcoming book"
            >
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--sage-deep)]">
                Forthcoming book
              </p>
              <p className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text)]">
                {BIO.book.title}
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {BIO.book.subtitle}
              </p>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                {BIO.book.status}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
