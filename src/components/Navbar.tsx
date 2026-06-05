const links = [
  { href: "#breathe", label: "Breathe" },
  { href: "#principles", label: "Principles" },
  { href: "#quote", label: "Wisdom" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/60 bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-[family-name:var(--font-cormorant)] text-2xl font-medium tracking-wide text-[var(--text)]"
        >
          Zen
        </a>
        <ul className="flex items-center gap-6 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link text-sm tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
