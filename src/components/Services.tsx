import type { ReactNode } from "react";
import PackageIcon from "@/components/PackageIcons";
import {
  bogoSpecial,
  clearingServices,
  counselingServices,
  featuredSession,
  readingServices,
  sessionLengths,
  weddingService,
} from "@/lib/services";

type PackageTone =
  | "sessions"
  | "special"
  | "readings"
  | "guidance"
  | "clearings"
  | "ceremony";

type ServiceCardProps = {
  title: string;
  audience?: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  duration?: string;
  followUp?: string;
  note?: string;
};

function Price({
  price,
  priceFrom,
  priceTo,
}: {
  price?: number;
  priceFrom?: number;
  priceTo?: number;
}) {
  if (priceFrom !== undefined && priceTo !== undefined) {
    return (
      <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--text)]">
        ${priceFrom}
        <span className="text-xl text-[var(--text-secondary)]"> – ${priceTo}</span>
      </p>
    );
  }

  return (
    <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--text)]">
      ${price}
    </p>
  );
}

function ServiceCard({
  title,
  audience,
  price,
  priceFrom,
  priceTo,
  duration,
  followUp,
  note,
}: ServiceCardProps) {
  const details = [duration, followUp].filter(Boolean);

  return (
    <article className="package-card flex h-full flex-col rounded-lg p-6 sm:p-7">
      {audience && (
        <p className="package-card__label mb-3">{audience}</p>
      )}
      <h4 className="font-[family-name:var(--font-cormorant)] text-xl leading-snug text-[var(--text)]">
        {title}
      </h4>

      <div className="mt-5">
        <Price price={price} priceFrom={priceFrom} priceTo={priceTo} />
      </div>

      {details.length > 0 && (
        <ul className="mt-6 flex-1 space-y-2 border-t border-[var(--border)] pt-5">
          {details.map((detail) => (
            <li
              key={detail}
              className="text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              {detail}
            </li>
          ))}
        </ul>
      )}

      {note && (
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          {note}
        </p>
      )}
    </article>
  );
}

function ExpressSessionsCard() {
  return (
    <article className="package-card flex h-full flex-col rounded-lg p-6 sm:p-7">
      <p className="package-card__label mb-3">Shorter visits</p>
      <h4 className="font-[family-name:var(--font-cormorant)] text-xl leading-snug text-[var(--text)]">
        Express Sessions
      </h4>

      <ul className="mt-6 flex-1 border-t border-[var(--border)] pt-5">
        {sessionLengths.map((session) => (
          <li
            key={session.minutes}
            className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] py-3.5 text-sm last:border-0"
          >
            <span className="text-[var(--text-secondary)]">{session.minutes} min</span>
            <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--text)]">
              ${session.price}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PackageSection({
  id,
  tone,
  eyebrow,
  title,
  experience,
  children,
}: {
  id: string;
  tone: PackageTone;
  eyebrow: string;
  title?: string;
  experience: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={`package-section package-section--${tone}`}
      aria-labelledby={headingId}
    >
      <header className="package-section__header">
        <div className="package-section__heading">
          <PackageIcon tone={tone} />
          <div className="package-section__titles">
            <p className="package-section__eyebrow">{eyebrow}</p>
            <h3 id={headingId} className="package-section__title">
              {title ?? eyebrow}
            </h3>
          </div>
        </div>
        <p className="package-section__experience">{experience}</p>
      </header>
      <div className="package-section__content">{children}</div>
    </section>
  );
}

function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 sm:gap-7">
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="px-4 py-20 sm:px-6 sm:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center sm:mb-20">
          <p className="section-eyebrow mb-3">Offerings</p>
          <h2
            id="services-title"
            className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)] sm:text-5xl"
          >
            Services &amp; Sessions
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--text-secondary)]">
            Each package is a different experience. Gift certificates are
            available.
          </p>
        </header>

        <div className="flex flex-col gap-12 sm:gap-16">
          <PackageSection
            id="package-sessions"
            tone="sessions"
            eyebrow="Sessions"
            title="Full & express"
            experience="Time-based visits — a full 90-minute session or a shorter express check-in."
          >
            <CardGrid>
              <ServiceCard
                audience="Full experience"
                title={featuredSession.title}
                price={featuredSession.price}
                duration={featuredSession.duration}
                followUp={featuredSession.followUp}
                note={featuredSession.note}
              />
              <ExpressSessionsCard />
            </CardGrid>
          </PackageSection>

          <PackageSection
            id="package-special"
            tone="special"
            eyebrow="Special offer"
            experience="Two complete sessions with follow-ups — best for ongoing work."
          >
            <div className="mx-auto w-full max-w-lg sm:mx-0">
              <ServiceCard
                title={bogoSpecial.title}
                price={bogoSpecial.price}
                duration={bogoSpecial.description}
              />
            </div>
          </PackageSection>

          <PackageSection
            id="package-readings"
            tone="readings"
            eyebrow="Readings"
            title="Tarot & oracle"
            experience="Insight through cards — guidance, reflection, and perspective on your path."
          >
            <CardGrid>
              <ServiceCard audience="Individual" {...readingServices[0]} />
              <ServiceCard audience="Couples" {...readingServices[1]} />
            </CardGrid>
          </PackageSection>

          <PackageSection
            id="package-guidance"
            tone="guidance"
            eyebrow="Guidance"
            title="Spiritual counseling"
            experience="Supportive conversation — life transitions, grief, purpose, and spiritual questions."
          >
            <CardGrid>
              <ServiceCard audience="Individual" {...counselingServices[0]} />
              <ServiceCard audience="Couples" {...counselingServices[1]} />
            </CardGrid>
          </PackageSection>

          <PackageSection
            id="package-clearings"
            tone="clearings"
            eyebrow="Energy work"
            title="Clearings"
            experience="Energy reset — release what feels heavy in your body, aura, or home."
          >
            <CardGrid>
              <ServiceCard audience="Personal" {...clearingServices[0]} />
              <ServiceCard audience="Space" {...clearingServices[1]} />
            </CardGrid>
          </PackageSection>

          <PackageSection
            id="package-ceremony"
            tone="ceremony"
            eyebrow="Ceremony"
            title="Weddings"
            experience="A personalized ceremony to honor your union."
          >
            <div className="mx-auto w-full max-w-sm sm:mx-0">
              <ServiceCard
                title={weddingService.title}
                price={weddingService.price}
              />
            </div>
          </PackageSection>
        </div>
      </div>
    </section>
  );
}
