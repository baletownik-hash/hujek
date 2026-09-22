const LINKS = [
  { href: "#start", label: "Start" },
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#o-firmie", label: "O firmie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite py-12 text-white/80">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Paweł Powała REKLAMY
          </p>
          <p className="mt-2 text-sm">
            Reklama | Rozwieszanie | Projektowanie | Czyszczenie
          </p>
        </div>

        <div className="text-sm">
          <p>ul. Dworcowa 24</p>
          <p>05-126 Nieporęt</p>
          <p className="mt-2">
            <a href="tel:511624139" className="hover:text-accent">
              511 624 139
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p>NIP: 536-172-62-64</p>
          <p>REGON: 545177274</p>
        </div>

        <nav aria-label="Nawigacja w stopce">
          <ul className="space-y-1.5 text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © 2026 Paweł Powała REKLAMY
      </div>
    </footer>
  );
}
