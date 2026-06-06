"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";

import clearingsAnimation from "@/lottie/clearings.json";
import ceremonyAnimation from "@/lottie/ceremony.json";
import guidanceAnimation from "@/lottie/guidance.json";
import readingsAnimation from "@/lottie/readings.json";
import sessionsAnimation from "@/lottie/sessions.json";
import specialAnimation from "@/lottie/special.json";

type PackageTone =
  | "sessions"
  | "special"
  | "readings"
  | "guidance"
  | "clearings"
  | "ceremony";

const ANIMATIONS: Record<PackageTone, object> = {
  sessions: sessionsAnimation,
  special: specialAnimation,
  readings: readingsAnimation,
  guidance: guidanceAnimation,
  clearings: clearingsAnimation,
  ceremony: ceremonyAnimation,
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export default function PackageIcon({
  tone,
  className = "",
}: {
  tone: PackageTone;
  className?: string;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [mounted, setMounted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || reducedMotion) {
      lottieRef.current?.goToAndStop(0, true);
      return;
    }

    lottieRef.current?.play();
  }, [mounted, reducedMotion, tone]);

  if (!mounted) {
    return (
      <span
        className={`package-icon package-icon--placeholder ${className}`.trim()}
        aria-hidden="true"
      />
    );
  }

  return (
    <span className={`package-icon ${className}`.trim()} aria-hidden="true">
      <Lottie
        lottieRef={lottieRef}
        animationData={ANIMATIONS[tone]}
        loop={!reducedMotion}
        autoplay={!reducedMotion}
        className="package-icon__lottie"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </span>
  );
}
