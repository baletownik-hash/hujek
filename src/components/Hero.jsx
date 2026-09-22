export default function Hero() {
  return (
    <section
      id="start"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-graphite pt-16 sm:min-h-screen sm:pt-20"
    >
      <img
        src="/images/hero-reklama.jpg"
        alt="Duży baner reklamowy zamontowany na elewacji budynku w świetle dnia"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-graphite/40"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 py-20 sm:py-28">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
          Nieporęt i okolice Warszawy
        </p>

        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
          Reklama, którą widać
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
          Projektujemy, rozwieszamy i dbamy o reklamy, które skutecznie
          przyciągają uwagę klientów.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:511624139"
            className="rounded-full bg-accent px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
          >
            Zadzwoń: 511 624 139
          </a>
          <a
            href="#oferta"
            className="rounded-full border border-white/30 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Zobacz ofertę
          </a>
        </div>
      </div>
    </section>
  );
}
