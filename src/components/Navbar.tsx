import Logo from "@/components/Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#schedule", label: "Hours" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-white/70 backdrop-blur-lg backdrop-saturate-150">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#"
          className="inline-flex min-h-11 min-w-11 items-center rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage)]"
          aria-label="Serenity Source — back to top"
        >
          <Logo size="nav" showWordmark />
        </a>
        <ul className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-xs tracking-wide sm:text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
