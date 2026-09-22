import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();
    // Formularz nie jest jeszcze podłączony do backendu.
    // Aby wysyłać zapytania e-mailem, podłącz tu np. usługę Formspree,
    // EmailJS lub własny endpoint API i zastąp poniższą symulację.
    setStatus("sent");
  }

  return (
    <section id="kontakt" className="bg-paper py-20 sm:py-28">
      <div ref={ref} className="reveal container-page">
        <h2 className="text-3xl font-semibold sm:text-4xl">Kontakt</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-7">
              <h3 className="text-xl font-semibold text-graphite">
                Paweł Powała REKLAMY
              </h3>
              <dl className="mt-4 space-y-3 text-ink">
                <div>
                  <dt className="sr-only">Adres</dt>
                  <dd>ul. Dworcowa 24, 05-126 Nieporęt</dd>
                </div>
                <div>
                  <dt className="sr-only">Telefon</dt>
                  <dd>
                    <a
                      href="tel:511624139"
                      className="font-semibold text-accent hover:underline"
                    >
                      511 624 139
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  <span>
                    <dt className="inline font-medium text-graphite">NIP: </dt>
                    <dd className="inline">536-172-62-64</dd>
                  </span>
                  <span>
                    <dt className="inline font-medium text-graphite">
                      REGON:{" "}
                    </dt>
                    <dd className="inline">545177274</dd>
                  </span>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-graphite p-7 text-white">
              <h3 className="text-lg font-semibold">Obszar działania</h3>
              <p className="mt-2 text-white/80">
                Nieporęt i okolice Warszawy
              </p>
              <div
                className="mt-5 flex h-40 items-center justify-center rounded-xl bg-white/5"
                role="img"
                aria-label="Mapa poglądowa obszaru działania: Nieporęt i okolice Warszawy"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-7"
            aria-label="Formularz kontaktowy"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-graphite"
                >
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-graphite placeholder:text-ink/50 focus:border-accent"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-graphite"
                >
                  Numer telefonu lub e-mail
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-graphite placeholder:text-ink/50 focus:border-accent"
                  placeholder="np. 500 100 200 lub jan@firma.pl"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-graphite"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-graphite placeholder:text-ink/50 focus:border-accent"
                  placeholder="Opisz krótko, czego potrzebujesz"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark sm:w-auto"
              >
                Wyślij zapytanie
              </button>

              <p role="status" className="text-sm text-ink">
                {status === "sent" &&
                  "Dziękujemy za wiadomość. Odezwiemy się wkrótce."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
