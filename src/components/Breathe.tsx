"use client";

import { useEffect, useState } from "react";

const phases = [
  { label: "Breathe in", duration: 4000 },
  { label: "Hold", duration: 2000 },
  { label: "Breathe out", duration: 4000 },
  { label: "Rest", duration: 2000 },
] as const;

type PhaseLabel = (typeof phases)[number]["label"];

const totalCycle = phases.reduce((sum, p) => sum + p.duration, 0);

function getPhase(elapsed: number): PhaseLabel {
  let t = elapsed % totalCycle;
  for (const phase of phases) {
    if (t < phase.duration) return phase.label;
    t -= phase.duration;
  }
  return phases[0].label;
}

export default function Breathe() {
  const [phase, setPhase] = useState<PhaseLabel>(phases[0].label);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const id = setInterval(() => {
      setPhase(getPhase(Date.now() - start));
    }, 200);
    return () => clearInterval(id);
  }, [started]);

  return (
    <section
      id="breathe"
      className="flex flex-col items-center px-6 py-28 text-center"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--sage-deep)]">
        Practice
      </p>
      <h2 className="mb-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--text)] sm:text-5xl">
        One breath at a time
      </h2>
      <p className="mb-14 max-w-md text-[var(--text-secondary)]">
        Follow the circle. Inhale as it grows, exhale as it softens. No goal
        beyond this moment.
      </p>

      <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        <div
          className={`absolute inset-0 rounded-full border border-[var(--sage-light)] bg-[var(--sage)]/10 ${started ? "breathe-ring" : ""}`}
        />
        <div
          className={`absolute inset-8 rounded-full border border-[var(--sage)]/30 bg-[var(--sage)]/5 ${started ? "breathe-ring" : ""}`}
          style={{ animationDelay: "0.5s" }}
        />
        <p className="relative z-10 font-[family-name:var(--font-cormorant)] text-2xl text-[var(--sage-deep)]">
          {started ? phase : "Ready?"}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setStarted((s) => !s)}
        className="mt-12 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-8 py-3 text-sm tracking-wide text-[var(--text-secondary)] transition-colors hover:border-[var(--sage)] hover:text-[var(--sage-deep)]"
      >
        {started ? "Pause" : "Start breathing"}
      </button>
    </section>
  );
}
