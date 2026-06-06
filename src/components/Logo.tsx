"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";

import logoAnimation from "@/lottie/logo.json";

type LogoProps = {
  size?: "nav" | "footer";
  showWordmark?: boolean;
  className?: string;
};

const markClass = {
  nav: "logo-mark logo-mark--nav",
  footer: "logo-mark logo-mark--footer",
} as const;

const LOGO_PLAY_INTERVAL_MS = 5000;

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

export default function Logo({
  size = "nav",
  showWordmark = false,
  className = "",
}: LogoProps) {
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

    const playLogo = () => {
      lottieRef.current?.goToAndPlay(0, true);
    };

    playLogo();
    const interval = window.setInterval(playLogo, LOGO_PLAY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [mounted, reducedMotion]);

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={markClass[size]} aria-hidden="true">
        {mounted ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={logoAnimation}
            loop={false}
            autoplay={false}
            className="logo-lottie"
            rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
            onComplete={() => lottieRef.current?.goToAndStop(0, true)}
          />
        ) : (
          <span className="logo-lottie logo-lottie--placeholder" />
        )}
      </span>
      {showWordmark && (
        <span className="hidden font-[family-name:var(--font-cormorant)] text-xl font-medium tracking-wide text-[var(--text)] sm:inline sm:text-2xl">
          Serenity Source
        </span>
      )}
    </span>
  );
}
