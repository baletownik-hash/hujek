import useReveal from "../hooks/useReveal";

const ICONS = {
  reklama: (
    <path d="M4 6h16v10H4z M8 16v3 M16 16v3 M4 10h16" />
  ),
  rozwieszanie: (
    <path d="M4 5v14 M20 5v14 M4 8h16 M4 16h16" />
  ),
  projektowanie: (
    <path d="M4 20l4-1 10-10-3-3L5 16l-1 4z M14 6l3 3" />
  ),
  czyszczenie: (
    <path d="M6 3v6a4 4 0 004 4h1v8 M11 13a4 4 0 004-4V3 M4 21h9" />
  ),
};

const SERVICES = [
  {
    key: "reklama",
    title: "Reklama",
    description:
      "Pomagamy zwiększyć widoczność firmy dzięki skutecznym rozwiązaniom reklamowym.",
  },
  {
    key: "rozwieszanie",
    title: "Rozwieszanie",
    description:
      "Rozwieszamy banery, plakaty i materiały reklamowe w wybranych lokalizacjach.",
  },
  {
    key: "projektowanie",
    title: "Projektowanie",
    description:
      "Tworzymy czytelne i atrakcyjne projekty banerów, szyldów oraz innych materiałów.",
  },
  {
    key: "czyszczenie",
    title: "Czyszczenie",
    description:
      "Czyścimy banery, szyldy i powierzchnie reklamowe, aby wyglądały estetycznie i profesjonalnie.",
  },
];

function ServiceCard({ service }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal group relative rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
    >
      <span
        className="absolute right-6 top-0 h-1.5 w-10 -translate-y-1/2 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[service.key]}
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-graphite">{service.title}</h3>
      <p className="mt-2 text-ink">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const headingRef = useReveal();
  return (
    <section id="oferta" className="bg-paper py-20 sm:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Co robimy?</h2>
          <p className="mt-3 text-lg text-ink">
            Kompleksowa obsługa reklamy zewnętrznej — od projektu, przez
            montaż, po utrzymanie w dobrym stanie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
