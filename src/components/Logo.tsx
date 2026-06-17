import LogoMark from "@/components/LogoMark";

type LogoProps = {
  size?: "nav" | "footer";
  showWordmark?: boolean;
  className?: string;
};

const markClass = {
  nav: "logo-mark logo-mark--nav",
  footer: "logo-mark logo-mark--footer",
} as const;

export default function Logo({
  size = "nav",
  showWordmark = false,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={markClass[size]} />
      {showWordmark && (
        <span className="hidden font-[family-name:var(--font-cormorant)] text-xl font-medium tracking-wide text-[var(--text)] sm:inline sm:text-2xl">
          Serenity Source
        </span>
      )}
    </span>
  );
}
