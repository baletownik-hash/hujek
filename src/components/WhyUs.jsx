import useReveal from "../hooks/useReveal";

const REASONS = [
  {
    title: "Indywidualne podejście",
    description:
      "Każde zlecenie traktujemy osobno i dopasowujemy rozwiązanie do potrzeb klienta.",
  },
  {
    title: "Dokładna realizacja",
    description:
      "Dbamy o szczegóły — od projektu, przez montaż, po estetyczne wykończenie.",
  },
  {
    title: "Szybki kontakt",
    description:
      "Odpowiadamy sprawnie i ustalamy termin realizacji bez zbędnej zwłoki.",
  },
  {
    title: "Obsługa lokalnych firm",
    description:
      "Znamy specyfikę Nieporętu i okolic Warszawy oraz potrzeby lokalnego biznesu.",
  },
];

export default function WhyUs() {
  const introRef = useReveal();

  return (
    <section id="o-firmie" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div ref={introRef} className="reveal lg:sticky lg:top-28">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Dlaczego warto z nami?
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink">
            Dobra reklama powinna być widoczna, czytelna i zadbana. Pomagamy
            firmom skutecznie prezentować swoją ofertę w przestrzeni miejskiej
            i lokalnej.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {REASONS.map((reason) => {
            return <ReasonItem key={reason.title} reason={reason} />;
          })}
        </ul>
      </div>
    </section>
  );
}

function ReasonItem({ reason }) {
  const ref = useReveal();
  return (
    <li
      ref={ref}
      className="reveal rounded-2xl border border-black/5 bg-paper p-6"
    >
      <h3 className="text-lg font-semibold text-graphite">{reason.title}</h3>
      <p className="mt-2 text-sm text-ink">{reason.description}</p>
    </li>
  );
}
