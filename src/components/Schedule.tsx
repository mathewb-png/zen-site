import { schedule } from "@/lib/services";

export default function Schedule() {
  return (
    <section id="schedule" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow mb-3">Availability</p>
        <h2 className="mb-8 font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)] sm:text-5xl">
          Hours &amp; locations
        </h2>

        <article className="zen-card rounded-2xl p-6 text-left sm:p-8">
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text)]">
            Regular hours
          </h3>
          <p className="mt-3 text-[var(--text-secondary)]">{schedule.regular}</p>

          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text)]">
              Special dates
            </h3>
            {schedule.exceptions.map((item) => (
              <div key={item.dates} className="mt-4">
                <p className="text-sm font-medium text-[var(--sage-deep)]">
                  {item.dates}
                </p>
                <p className="mt-1 text-[var(--text-secondary)]">
                  {item.location} · {item.hours}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
