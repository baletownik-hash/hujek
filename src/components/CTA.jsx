import useReveal from "../hooks/useReveal";

export default function CTA() {
  const ref = useReveal();
  return (
    <section className="bg-graphite py-20 sm:py-24">
      <div
        ref={ref}
        className="reveal container-page flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Potrzebujesz reklamy, baneru lub szyldu?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Skontaktuj się z nami i opowiedz, czego potrzebujesz.
            Przygotujemy rozwiązanie dopasowane do Twojej firmy.
          </p>
        </div>

        <a
          href="tel:511624139"
          className="whitespace-nowrap rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
        >
          Zadzwoń teraz — 511 624 139
        </a>
      </div>
    </section>
  );
}
