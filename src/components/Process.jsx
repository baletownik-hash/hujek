import useReveal from "../hooks/useReveal";

const STEPS = [
  { number: "1", title: "Kontakt", description: "Dzwonisz lub piszesz — ustalamy pierwsze szczegóły." },
  { number: "2", title: "Ustalenie potrzeb", description: "Rozmawiamy o tym, czego dokładnie potrzebuje Twoja firma." },
  { number: "3", title: "Projekt lub przygotowanie materiałów", description: "Przygotowujemy projekt graficzny lub materiały do realizacji." },
  { number: "4", title: "Realizacja", description: "Montujemy, rozwieszamy lub czyścimy — zgodnie z ustaleniami." },
];

export default function Process() {
  const headingRef = useReveal();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Jak działamy?</h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <StepItem key={step.number} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepItem({ step }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="reveal relative pl-14 sm:pl-0">
      <span
        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-graphite font-display text-lg font-semibold text-white sm:static sm:mb-4"
        aria-hidden="true"
      >
        {step.number}
      </span>
      <h3 className="text-lg font-semibold text-graphite">{step.title}</h3>
      <p className="mt-2 text-sm text-ink">{step.description}</p>
    </li>
  );
}
